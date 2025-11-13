// src/app/my-nfts/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { useAccount } from 'wagmi';
import { base } from 'wagmi/chains';
import { createPublicClient, http } from 'viem';
import { CONTRACT_ADDRESS } from '@/lib/constants';

// Minimal ERC721 ABI for direct viem reads
const ERC721_MIN = [
  { type: 'function', name: 'balanceOf', stateMutability: 'view', inputs: [{ name: 'owner', type: 'address' }], outputs: [{ type: 'uint256' }] },
  { type: 'function', name: 'tokenOfOwnerByIndex', stateMutability: 'view', inputs: [{ name: 'owner', type: 'address' }, { name: 'index', type: 'uint256' }], outputs: [{ type: 'uint256' }] },
  { type: 'function', name: 'tokenURI', stateMutability: 'view', inputs: [{ name: 'tokenId', type: 'uint256' }], outputs: [{ type: 'string' }] },
] as const;

type Item = { tokenId: bigint; image?: string; name?: string };

export default function MyNftsPage() {
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => setMounted(true), []);

  // Farcaster ready (unconditional)
  useEffect(() => {
    const t = setTimeout(() => {
      try { sdk.actions.ready(); } catch (e) { console.error(e); }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const run = async () => {
      if (!mounted || !isConnected || !address) {
        setItems([]);
        return;
      }
      setLoading(true);
      setItems([]);
      try {
        const rpc = process.env.NEXT_PUBLIC_BASE_RPC;
        const client = createPublicClient({ chain: base, transport: http(rpc) });

        // balanceOf
        const balance = (await client.readContract({
          address: CONTRACT_ADDRESS,
          abi: ERC721_MIN,
          functionName: 'balanceOf',
          args: [address as `0x${string}`],
        })) as bigint;

        if (balance === 0n) {
          setItems([]);
          return;
        }

        // loop tokens
        for (let i = 0n; i < balance; i++) {
          const tokenId = (await client.readContract({
            address: CONTRACT_ADDRESS,
            abi: ERC721_MIN,
            functionName: 'tokenOfOwnerByIndex',
            args: [address as `0x${string}`, i],
          })) as bigint;

          const uri = (await client.readContract({
            address: CONTRACT_ADDRESS,
            abi: ERC721_MIN,
            functionName: 'tokenURI',
            args: [tokenId],
          })) as string;

          const httpUri = uri.startsWith('ipfs://')
            ? uri.replace('ipfs://', 'https://ipfs.io/ipfs/')
            : uri;

          try {
            const meta = await fetch(httpUri, { cache: 'no-store' }).then((r) => r.json());
            const img =
              typeof meta.image === 'string'
                ? meta.image.startsWith('ipfs://')
                  ? meta.image.replace('ipfs://', 'https://ipfs.io/ipfs/')
                  : meta.image
                : undefined;

            setItems((prev) => [...prev, { tokenId, image: img, name: meta.name }]);
          } catch {
            setItems((prev) => [...prev, { tokenId }]);
          }
        }
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [mounted, isConnected, address]);

  const openSeaLink = (id: bigint) =>
    `https://opensea.io/assets/base/${CONTRACT_ADDRESS}/${id.toString()}`;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="flex items-center justify-between p-4 border-b border-neutral-800">
        <div className="text-lg font-semibold">My NFT</div>
      </header>

      <section className="max-w-3xl mx-auto p-6">
        {!isConnected ? (
          <p className="text-neutral-300">Connect your wallet to view your NFTs.</p>
        ) : loading ? (
          <p className="text-neutral-300">Loading…</p>
        ) : items.length === 0 ? (
          <p className="text-neutral-300">No NFTs found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((it) => (
              <div
                key={it.tokenId.toString()}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden"
              >
                <div className="aspect-square grid place-items-center bg-neutral-900">
                  {it.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={it.image}
                      alt={it.name ?? `#${it.tokenId.toString()}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-neutral-400 text-sm">No image</div>
                  )}
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div className="text-sm">{it.name ?? `#${it.tokenId.toString()}`}</div>
                  <a
                    href={openSeaLink(it.tokenId)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-2 py-1 rounded border border-cyan-300/30 bg-cyan-300/20 hover:opacity-90"
                  >
                    View on OpenSea
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
