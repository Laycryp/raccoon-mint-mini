// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // إزالة أي ترويسة X-Frame-Options قادمة من طبقة أخرى
  res.headers.delete('x-frame-options');
  res.headers.delete('X-Frame-Options');
  return res;
}

// طبّق على كل المسارات
export const config = {
  matcher: '/:path*',
};
