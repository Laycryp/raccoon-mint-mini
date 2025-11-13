'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
import CastButton from '@/components/CastButton';

export default function Home() {
  const chainId = useChainId();
  const { address, isConnected } = useAccount();

  const [qty, setQty] = useState(1);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Farcaster ready
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sdk.actions.ready();
      } catch (e) {
        console.error(e);
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  // ==== Reads العامة ====
  const PUBLIC_READ = mounted;
  const { data: remaining } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'remaining',
    chainId: base.id,
    query: { enabled: PUBLIC_READ },
  });
  const { data: totalSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'totalSupply',
    chainId: base.id,
    query: { enabled: PUBLIC_READ },
  });
  const { data: maxSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'maxSupply',
    chainId: base.id,
    query: { enabled: PUBLIC_READ },
  });
  const { data: priceUSDC } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'priceUSDC',
    chainId: base.id,
    query: { enabled: PUBLIC_READ },
  });
  const { data: saleActive } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'saleActive',
    chainId: base.id,
    query: { enabled: PUBLIC_READ },
  });
  const { data: maxPerWallet } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'maxPerWallet',
    chainId: base.id,
    query: { enabled: PUBLIC_READ },
  });

  // ==== Reads الخاصة بالمستخدم ====
  const USER_READ = mounted && isConnected && chainId === CHAIN_ID;
  const { data: mintedOfMe } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: COLLECTION_ABI,
    functionName: 'mintedOf',
    args: [address ?? '0x0000000000000000000000000000000000000000'],
    chainId: base.id,
    query: { enabled: USER_READ },
  });
  const { data: allowance } = useReadContract({
    address: USDC_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: [address ?? '0x0000000000000000000000000000000000000000', CONTRACT_ADDRESS],
    chainId: base.id,
    query: { enabled: USER_READ },
  });

  // ==== Derived ====
  const minted = totalSupply ?? 0n;
  const max = maxSupply ?? 333n;
  const percent = useMemo(
    () => (max === 0n ? 0 : Math.min(100, Number((minted * 100n) / max))),
    [minted, max]
  );
  const requiredAmount = useMemo(
    () => (priceUSDC ?? 0n) * BigInt(qty),
    [priceUSDC, qty]
  );
  const hasEnoughAllowance = useMemo(
    () => allowance !== undefined && allowance >= requiredAmount,
    [allowance, requiredAmount]
  );
  const walletOverLimit = useMemo(() => {
    if (maxPerWallet === undefined || mintedOfMe === undefined) return false;
    return mintedOfMe + BigInt(qty) > maxPerWallet;
  }, [maxPerWallet, mintedOfMe, qty]);

  const guardReason = useMemo(() => {
    if (saleActive === false) return 'Sale is not active';
    if (remaining !== undefined && remaining === 0n) return 'Sold out';
    if (qty < 1 || qty > MAX_QTY_UI) return `Qty must be 1–${MAX_QTY_UI}`;
    if (USER_READ && walletOverLimit) return 'Exceeds wallet limit';
    return null;
  }, [saleActive, remaining, qty, USER_READ, walletOverLimit]);

  // ==== Writes ====
  const { writeContract: write, data: txHash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  // نحدّد نوع آخر عملية تم إرسالها (approve أو mint)
  const lastActionRef = useRef<'approve' | 'mint' | null>(null);

  const approve = () => {
    lastActionRef.current = 'approve';
    write({
      chainId: base.id,
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [CONTRACT_ADDRESS, requiredAmount],
    });
  };

  const mint = () => {
    lastActionRef.current = 'mint';
    write({
      chainId: base.id,
      address: CONTRACT_ADDRESS,
      abi: COLLECTION_ABI,
      functionName: 'mint',
      args: [BigInt(qty)],
    });
  };

  // يفتح محرّر الكاست فقط بعد نجاح mint
  const openCastComposer = async () => {
    const TEXT =
      'i just Mint  my RACCOON, take your Raccoon on Base Max 5/wallet';
    const LINK =
      'https://farcaster.xyz/miniapps/_5-bazKk7UUJ/raccoon-mint';
    try {
      // @ts-ignore
      if (sdk?.actions?.composeCast) {
        // @ts-ignore
        await sdk.actions.composeCast({ text: TEXT, embeds: [LINK] });
        return;
      }
      // @ts-ignore
      if (sdk?.actions?.openCastComposer) {
        // @ts-ignore
        await sdk.actions.openCastComposer({ text: TEXT, embeds: [LINK] });
        return;
      }
      const q = new URLSearchParams({ text: TEXT });
      q.append('embeds[]', LINK);
      const target = `https://warpcast.com/~/compose?${q.toString()}`;
      // @ts-ignore
      if (sdk?.actions?.openUrl) {
        // @ts-ignore
        await sdk.actions.openUrl(target);
        return;
      }
      if (typeof window !== 'undefined')
        window.open(target, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error(e);
    }
  };

  // افتح الكاست عندما تنجح معاملة mint فقط
  const castOpenedRef = useRef<string | null>(null);
  useEffect(() => {
    if (!txHash || !isSuccess) return;
    if (lastActionRef.current !== 'mint') return; // تجاهل نجاح approve
    if (castOpenedRef.current === txHash) return; // لا تكرر
    castOpenedRef.current = txHash;
    openCastComposer();
  }, [txHash, isSuccess]);

  // Hydration lock
  const HYDRATE_LOCK = !mounted;
  const uiDisabledApprove = HYDRATE_LOCK
    ? true
    : !!guardReason || !isConnected || hasEnoughAllowance || isPending || isConfirming;
  const uiDisabledMint = HYDRATE_LOCK
    ? true
    : !!guardReason || !isConnected || !hasEnoughAllowance || isPending || isConfirming;

  const fmt = (v?: bigint) =>
    v === undefined ? '—' : formatUnits(v, USDC_DECIMALS);

  useEffect(() => {
    if (remaining !== undefined) {
      const maxByRemaining = Number(
        remaining > BigInt(MAX_QTY_UI) ? MAX_QTY_UI : remaining
      );
      if (qty > maxByRemaining) setQty(Math.max(1, maxByRemaining));
    }
  }, [remaining]); // eslint-disable-line

  const mintedOfMeText =
    USER_READ && mintedOfMe !== undefined ? mintedOfMe.toString() : '—';

  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between p-4 border-b border-neutral-800">
        <div className="text-lg font-semibold">RACCOON-MINT</div>
        <ConnectButton />
      </header>

      <section className="max-w-3xl mx-auto p-6 grid gap-6">
        {/* Compact Status */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 flex items-center gap-6">
          <ProgressRing
            percent={percent}
            label={`${minted.toString()}/${max.toString()} Minted`}
          />
          <div className="space-y-1">
            <div className="text-sm text-neutral-300">
              <span className="font-medium">Max 5</span> per wallet
            </div>
            <div className="text-sm text-neutral-300">
              You minted:{' '}
              <span className="font-mono text-white">{mintedOfMeText}</span>
            </div>
            <div className="text-sm text-neutral-300">
              Price:{' '}
              <span className="font-mono text-white">
                {fmt(priceUSDC as bigint)}
              </span>{' '}
              USDC
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
                setQty(
                  Math.min(
                    MAX_QTY_UI,
                    Math.max(1, Number(e.target.value || 1))
                  )
                )
              }
              className="w-20 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 outline-none"
            />
            <div className="ml-auto text-sm text-neutral-400">
              Cost:{' '}
              <span className="text-white font-mono">
                {fmt(requiredAmount)}
              </span>{' '}
              USDC
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={approve}
              disabled={uiDisabledApprove}
              className={`px-4 py-2 rounded-lg border ${
                uiDisabledApprove
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:opacity-90'
              } border-cyan-300/30 bg-cyan-300/20`}
            >
              {isPending ? 'Pending…' : 'Approve USDC'}
            </button>
            <button
              onClick={mint}
              disabled={uiDisabledMint}
              className={`px-4 py-2 rounded-lg border ${
                uiDisabledMint
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:opacity-90'
              } border-emerald-300/30 bg-emerald-300/20`}
            >
              {isConfirming ? 'Confirming…' : 'Mint'}
            </button>
          </div>

          <div className="mt-6">
            {/* زر النشر اليدوي (متاح دائمًا) */}
            <CastButton />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProgressRing({ percent, label }: { percent: number; label: string }) {
  const size = 112,
    stroke = 10,
    r = (size - stroke) / 2,
    c = 2 * Math.PI * r;
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
