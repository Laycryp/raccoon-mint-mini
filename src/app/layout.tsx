import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Providers from './providers';

const APP_NAME = 'RACCOON-MINT';
const APP_DESC = 'Mint a Raccoon on Base for 0.1 USDC';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://quantum-mints-mini.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: APP_NAME,
  description: APP_DESC,
  openGraph: { title: APP_NAME, description: APP_DESC, url: '/', siteName: APP_NAME, images: ['/og.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: APP_NAME, description: APP_DESC, images: ['/og.png'] },
  icons: { icon: '/icon.png', apple: '/icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <Providers>
          <div className="pb-20">{children}</div>
          {/* ✅ Bottom Nav (ثابت) */}
          <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-neutral-800 bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
            <div className="max-w-3xl mx-auto flex items-center gap-3 p-3">
              <Link
                href="/"
                className="flex-1 text-center rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 hover:bg-neutral-700"
              >
                + Mint
              </Link>
              <Link
                href="/my-nfts"
                className="flex-1 text-center rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 hover:bg-neutral-700"
              >
                🧾 My NFT
              </Link>
            </div>
          </nav>
        </Providers>
      </body>
    </html>
  );
}
