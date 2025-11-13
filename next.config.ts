// next.config.ts
import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "frame-ancestors 'self' https://app.base.org https://*.base.org https://warpcast.com https://*.warpcast.com https://farcaster.xyz https://*.farcaster.xyz;",
  },
  // اترك X-Frame-Options غير مُضافة إطلاقًا
  { key: 'X-Content-Type-Options', value: 'nosniff' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
