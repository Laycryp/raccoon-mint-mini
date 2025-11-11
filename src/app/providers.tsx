'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode, useMemo } from 'react';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { injected } from 'wagmi/connectors';

// ⛳️ نقرأ من ENV مع Fallback تلقائي
const ENV_RPC = process.env.NEXT_PUBLIC_BASE_RPC;
const ACTIVE_RPC = ENV_RPC && ENV_RPC.length > 0
  ? ENV_RPC
  : 'https://rpc.ankr.com/base';

if (typeof window !== 'undefined') {
  console.log('[RACCOON-MINT] Using RPC:', ACTIVE_RPC);
}

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(ACTIVE_RPC, {
      fetchOptions: { cache: 'no-store' },
      timeout: 20_000,
      batch: true,
      retryCount: 1,
    }),
  },
  connectors: [injected()],
  ssr: false, // نُبقيها متعطّلة لتفادي فروقات الخادم/المتصفح
});

type Props = { children: ReactNode };

export default function Providers({ children }: Props) {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#67e8f9',
            accentColorForeground: '#0b1220',
            borderRadius: 'large',
          })}
          coolMode
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
