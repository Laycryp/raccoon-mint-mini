import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'RACCOON-MINT',
  description: 'RACCOON-MINT — Base Mini App for minting with USDC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <Providers>
          <div className="min-h-screen pb-20"> {/* مساحة أسفل للبار السفلي */}
            {children}
          </div>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
