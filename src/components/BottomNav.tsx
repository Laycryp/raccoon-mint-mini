'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  const active = (href: string) =>
    pathname === href
      ? 'text-white border-cyan-400/60 bg-cyan-300/10'
      : 'text-neutral-300 border-neutral-800 hover:bg-neutral-900';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto max-w-3xl px-4 py-2 grid grid-cols-2 gap-3">
        <Link
          href="/"
          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2 ${active('/')}`}
        >
          <MintIcon />
          <span className="text-sm font-medium">Mint</span>
        </Link>
        <Link
          href="/my-nfts"
          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2 ${active('/my-nfts')}`}
        >
          <NftIcon />
          <span className="text-sm font-medium">My NFT</span>
        </Link>
      </div>
    </nav>
  );
}

function MintIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function NftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 15l3-3 2 2 3-3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
