'use client';

import { useEffect, useMemo, useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { sdk } from '@farcaster/miniapp-sdk';
import { CONTRACT_ADDRESS } from '@/lib/constants';
import { ipfsToHttp } from '@/lib/ipfs';
import { ERC721_ENUMERABLE_METADATA_ABI } from '@/lib/abi/erc721';

type Item = {
  tokenId: bigint;
  name?: string;
  imageUrl?: string;
  metaUrl: string;
  error?: string;
};

export default function MyNftsPage() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const sameOrigin = !appUrl || window.location.origin === appUrl;
    if (sameOrigin) sdk.actions.ready().catch(console.error);
  }, []);

  const loadOwned = async () => {
    if (!isConnected || !address || !publicClient) return;
    setLoading(true);
    setErr(null);
    try {
      const balance = (await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: ERC721_ENUMERABLE_METADATA_ABI,
        functionName: 'balanceOf',
        args: [address],
      })) as bigint;

      if (balance === 0n) {
        setItems([]);
        setLoading(false);
        return;
      }

      const calls = Array.from({ length: Number(balance) }, (_, i) => ({
        address: CONTRACT_ADDRESS,
        abi: ERC721_ENUMERABLE_METADATA_ABI,
        functionName: 'tokenOfOwnerByIndex' as const,
        args: [address, BigInt(i)],
      }));
      const tokenIds = (await publicClient.multicall({ contracts: calls })).map(
        (r) => r.result as bigint
      );

      const uriCalls = tokenIds.map((tid) => ({
        address: CONTRACT_ADDRESS,
        abi: ERC721_ENUMERABLE_METADATA_ABI,
        functionName: 'tokenURI' as const,
        args: [tid],
      }));
      const uris = (await publicClient.multicall({ contracts: uriCalls })).map(
        (r) => r.result as string
      );

      const meta: Item[] = await Promise.all(
        tokenIds.map(async (tid, i) => {
          const tokenUri = uris[i];
          const url = ipfsToHttp(tokenUri);
          try {
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            const img = ipfsToHttp(json.image || json.image_url || '');
            return { tokenId: tid, name: json.name, imageUrl: img, metaUrl: url };
          } catch (e: any) {
            return { tokenId: tid, metaUrl: url, error: e?.message || String(e) };
          }
        })
      );

      setItems(meta);
    } catch (e: any) {
      setErr(e?.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOwned();
  }, [isConnected, address]); // eslint-disable-line react-hooks/exhaustive-deps

  const ownedCount = useMemo(() => items.length.toString(), [items]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="flex items-center justify-between p-4 border-b border-neutral-800">
        <div className="text-lg font-semibold">RACCOON-MINT — My NFT</div>
        <ConnectButton />
      </header>

      <section className="max-w-3xl mx-auto p-6 grid gap-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Your Minted NFTs</h2>
            <button
              onClick={loadOwned}
              className="text-sm rounded-lg border border-neutral-700 px-3 py-1 hover:bg-neutral-800"
              disabled={loading}
            >
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>
          {!isConnected ? (
            <p className="mt-2 text-sm text-neutral-300">Connect your wallet to see your NFTs.</p>
          ) : (
            <p className="mt-2 text-sm text-neutral-300">
              Owned now: <span className="font-mono text-white">{ownedCount}</span>
            </p>
          )}
          {err && <p className="mt-2 text-amber-300 text-sm">⚠️ Error: {err}</p>}
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
          {loading ? (
            <p className="text-sm text-neutral-300">Loading your NFTs…</p>
          ) : items.length === 0 ? (
            <p className="text-sm text-neutral-300">
              {isConnected ? 'No NFTs owned at the moment.' : 'Connect wallet to view.'}
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((it) => (
                <article
                  key={it.tokenId.toString()}
                  className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
                >
                  <div className="aspect-square bg-neutral-800 flex items-center justify-center">
                    {it.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={it.imageUrl}
                        alt={it.name ?? `#${it.tokenId.toString()}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-neutral-400 p-2 text-center">
                        {it.error ? it.error : 'No image'}
                      </span>
                    )}
                  </div>
                  <div className="p-3 text-sm">
                    <div className="font-mono">#{it.tokenId.toString()}</div>
                    {it.name && <div className="text-neutral-300">{it.name}</div>}
                    <a
                      className="inline-block mt-1 text-cyan-300 text-xs hover:underline"
                      href={`https://opensea.io/assets/base/${CONTRACT_ADDRESS}/${it.tokenId.toString()}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in OpenSea →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
