// next.config.ts
import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "frame-ancestors 'self' https://warpcast.com https://*.warpcast.com https://farcaster.xyz https://*.farcaster.xyz https://base.org https://*.base.org;",
  },
  // أبقِ X-Frame-Options غير موجودة (لا تضفها إطلاقًا)
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
