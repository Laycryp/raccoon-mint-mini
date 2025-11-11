// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Providers from './providers';

const APP_NAME = 'RACCOON-MINT';
const APP_DESC = 'Mint a Raccoon on Base for 0.1 USDC';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://raccoon-mint.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: APP_NAME,
  description: APP_DESC,
  openGraph: {
    title: APP_NAME,
    description: APP_DESC,
    url: '/',
    siteName: APP_NAME,
    images: ['/og.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESC,
    images: ['/og.png']
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
