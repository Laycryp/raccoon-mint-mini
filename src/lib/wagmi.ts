// src/lib/wagmi.ts
import { http, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';

export const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(), // يمكن وضع RPC مخصص لاحقًا
  },
  ssr: true,
});
