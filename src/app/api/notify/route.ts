import { NextRequest, NextResponse } from 'next/server';

/**
 * Forwards a minimal event to Neynar Mini Apps Events API.
 * Endpoint (provided by you):
 * https://api.neynar.com/f/app/ac9a59a9-fec9-4c1e-8cdf-a81a853db0e3/event
 *
 * No secret used per your request (public call).
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json().catch(() => ({}));
    // expected shape: { type: 'mint', qty, address, tx, contract }
    const neynarUrl =
      'https://api.neynar.com/f/app/ac9a59a9-fec9-4c1e-8cdf-a81a853db0e3/event';

    const res = await fetch(neynarUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        // Keep it tiny & generic for Neynar
        type: 'mini-app-event',
        event: 'mint',
        ...payload,
      }),
      // Avoid caching on Vercel edges
      cache: 'no-store',
    });

    const text = await res.text();
    return NextResponse.json(
      { ok: res.ok, status: res.status, body: safeJson(text) },
      { status: res.ok ? 200 : 502 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}

function safeJson(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}
