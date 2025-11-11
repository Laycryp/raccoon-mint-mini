'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  useAccount,
  useChainId,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { base } from 'wagmi/chains';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { formatUnits } from 'viem';
import { sdk } from '@farcaster/miniapp-sdk';
import { COLLECTION_ABI } from '@/lib/abi/collection';
import { ERC20_ABI } from '@/lib/abi/erc20';
import {
  CHAIN_ID,
  CONTRACT_ADDRESS,
  USDC_ADDRESS,
  USDC_DECIMALS,
  MAX_QTY_UI,
} from '@/lib/constants';

export default function Home() {
  const chainId = useChainId();
  const { address, isConnected } = useAccount();

  const [qty, setQty] = useState<number>(1);
  const [mounted, setMounted] = useState(false); // ✅ يمنع اختلاف SSR/CSR

  useEffect(() => {
    setMounted(true);
  }, []);

  // Farcaster Mini App: Ready call
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const sameOrigin = !appUrl || window.location.origin === appUrl;
    if (sameOrigin) {
      sdk.actions.ready().catch(console.error);
    }
  }, []);

  const canRead = mounted && isConnected && chainId === CHAIN_ID;

  // === Reads (لا تُفعّل قبل mount) ===
  const { data: remaining } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'remaining',
    query: { enabled: !!canRead },
  });
  const { data: totalSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'totalSupply',
    query: { enabled: !!canRead },
  });
  const { data: maxSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'maxSupply',
    query: { enabled: !!canRead },
  });
  const { data: priceUSDC } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'priceUSDC',
    query: { enabled: !!canRead },
  });
  const { data: saleActive } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'saleActive',
    query: { enabled: !!canRead },
  });
  const { data: maxPerWallet } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'maxPerWallet',
    query: { enabled: !!canRead },
  });
  const { data: mintedOfMe } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'mintedOf',
    args: [address ?? '0x0000000000000000000000000000000000000000'],
    query: { enabled: !!canRead && !!address },
  });
  const { data: allowance } = useReadContract({
    address: USDC_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: [address ?? '0x0000000000000000000000000000000000000000', CONTRACT_ADDRESS],
    query: { enabled: !!canRead && !!address },
  });

  // === Derived ===
  const minted = totalSupply ?? 0n;
  const max = maxSupply ?? 333n;
  const percent = useMemo(() => {
    if (max === 0n) return 0;
    const p = Number((minted * 100n) / max);
    return Math.min(100, Math.max(0, p));
  }, [minted, max]);

  const requiredAmount: bigint = useMemo(() => (priceUSDC ?? 0n) * BigInt(qty), [priceUSDC, qty]);

  const hasEnoughAllowance = useMemo(() => {
    if (allowance === undefined) return false;
    return allowance >= requiredAmount;
  }, [allowance, requiredAmount]);

  const walletOverLimit = useMemo(() => {
    if (maxPerWallet === undefined || mintedOfMe === undefined) return false;
    return (mintedOfMe as bigint) + BigInt(qty) > (maxPerWallet as bigint);
  }, [maxPerWallet, mintedOfMe, qty]);

  const guardReason = useMemo(() => {
    if (!mounted) return 'Loading…';
    if (!isConnected) return 'Connect wallet to continue';
    if (chainId !== CHAIN_ID) return 'Switch to Base mainnet';
    if (saleActive === false) return 'Sale is not active';
    if (remaining !== undefined && remaining === 0n) return 'Sold out';
    if (qty < 1 || qty > MAX_QTY_UI) return `Qty must be 1–${MAX_QTY_UI}`;
    if (walletOverLimit) return 'Exceeds wallet limit';
    return null;
  }, [mounted, isConnected, chainId, saleActive, remaining, qty, walletOverLimit]);

  // === Writes ===
  const { writeContract: write, data: txHash, isPending } = useWriteContract();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash: txHash });

  const approve = async () => {
    if (!requiredAmount) return;
    write({
      chainId: base.id,
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [CONTRACT_ADDRESS, requiredAmount],
    });
  };

  const mint = async () => {
    write({
      chainId: base.id,
      address: CONTRACT_ADDRESS,
      abi: COLLECTION_ABI,
      functionName: 'mint',
      args: [BigInt(qty)],
    });
  };

  // Share → Warpcast composer
  const share = () => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
    const text = `Mint your Raccoon on Base — 0.1 USDC. Max 5/wallet. Live now: ${appUrl}`;
    const u = new URL('https://warpcast.com/~/compose');
    u.searchParams.set('text', text);
    u.searchParams.append('embeds[]', appUrl);
    window.open(u.toString(), '_blank');
  };

  // UI helpers
  const fmt = (v?: bigint) => (v === undefined ? '—' : formatUnits(v, USDC_DECIMALS));
  const disabledMint = !!guardReason || !hasEnoughAllowance || isPending || isConfirming;
  const disabledApprove = !!guardReason || hasEnoughAllowance || isPending || isConfirming;

  useEffect(() => {
    if (remaining !== undefined) {
      const maxByRemaining = Number(remaining > BigInt(MAX_QTY_UI) ? MAX_QTY_UI : remaining);
      if (qty > maxByRemaining) setQty(Math.max(1, maxByRemaining));
    }
  }, [remaining]); // eslint-disable-line react-hooks/exhaustive-deps

  const mintedOfMeText =
    mounted && mintedOfMe !== undefined ? (mintedOfMe as bigint).toString() : '—'; // ✅ لا نعرض 0 قبل mount

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="flex items-center justify-between p-4 border-b border-neutral-800">
        <div className="text-lg font-semibold">RACCOON-MINT</div>
        <ConnectButton />
      </header>

      <section className="max-w-3xl mx-auto p-6 grid gap-6">
        {/* Compact Status: Circular progress */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 flex items-center gap-6">
          <ProgressRing percent={percent} label={`${minted.toString()}/${max.toString()} Minted`} />
          <div className="space-y-1">
            <div className="text-sm text-neutral-300">
              <span className="font-medium">Max 5</span> per wallet
            </div>
            <div className="text-sm text-neutral-300">
              You minted: <span className="font-mono text-white">{mintedOfMeText}</span>
            </div>
            <div className="text-sm text-neutral-300">
              Price: <span className="font-mono text-white">{fmt(priceUSDC as bigint)}</span> USDC
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="text-xl font-bold mb-4">Mint</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm text-neutral-300">Quantity</label>
            <input
              type="number"
              min={1}
              max={MAX_QTY_UI}
              value={qty}
              onChange={(e) =>
                setQty(Math.min(MAX_QTY_UI, Math.max(1, Number(e.target.value || 1))))
              }
              className="w-20 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 outline-none"
            />
            <div className="ml-auto text-sm text-neutral-400">
              Cost: <span className="text-white font-mono">{fmt(requiredAmount)}</span> USDC
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={approve}
              disabled={disabledApprove}
              className={`px-4 py-2 rounded-lg border ${
                disabledApprove ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              } border-cyan-300/30 bg-cyan-300/20`}
            >
              {isPending ? 'Pending…' : 'Approve USDC'}
            </button>
            <button
              onClick={mint}
              disabled={disabledMint}
              className={`px-4 py-2 rounded-lg border ${
                disabledMint ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              } border-emerald-300/30 bg-emerald-300/20`}
            >
              {isConfirming ? 'Confirming…' : 'Mint'}
            </button>
          </div>

          {/* زر Share أسفل قسم Mint */}
          <div className="mt-6">
            <button
              onClick={share}
              className="w-full rounded-lg border border-cyan-300/30 bg-cyan-300/20 px-4 py-2 text-sm hover:opacity-90"
            >
              Share on Warpcast
            </button>
          </div>

          {!hasEnoughAllowance && !guardReason && (
            <p className="mt-3 text-sm text-neutral-300">
              You need to approve <span className="font-mono">{fmt(requiredAmount)}</span> USDC
              before minting.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function ProgressRing({ percent, label }: { percent: number; label: string }) {
  const size = 112;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-neutral-800"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-cyan-300"
          fill="none"
          strokeDasharray={`${dash} ${c - dash}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-sm font-medium">
        {label}
      </div>
    </div>
  );
}
