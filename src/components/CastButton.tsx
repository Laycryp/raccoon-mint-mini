'use client';
import { sdk } from '@farcaster/miniapp-sdk';
import { MINIAPP_URL } from '@/lib/miniapp';

const TEXT =
  'i just Mint  my RACCOON, take your Raccoon on Base Max 5/wallet';
const LINK = MINIAPP_URL;

export default function CastButton() {
  const onCast = async () => {
    try {
      // نضع الرابط كـ embed لضمان المعاينة، بدون ظهوره في النص
      // متوافق مع واجهات SDK الشائعة
      // @ts-ignore
      if (sdk?.actions?.composeCast) {
        // @ts-ignore
        await sdk.actions.composeCast({ text: TEXT, embeds: [LINK] });
        return;
      }
      // @ts-ignore
      if (sdk?.actions?.openCastComposer) {
        // @ts-ignore
        await sdk.actions.openCastComposer({ text: TEXT, embeds: [LINK] });
        return;
      }
      // Fallback داخل Farcaster: افتح composer كـ URL داخل نفس الواجهة
      const q = new URLSearchParams({ text: TEXT });
      q.append('embeds[]', LINK);
      const target = `https://warpcast.com/~/compose?${q.toString()}`;
      // @ts-ignore
      if (sdk?.actions?.openUrl) {
        // @ts-ignore
        await sdk.actions.openUrl(target);
        return;
      }
      // آخر حل خارج Farcaster: افتح تبويب
      window.open(target, '_blank', 'noopener,noreferrer');
    } catch {
      const q = new URLSearchParams({ text: TEXT });
      q.append('embeds[]', LINK);
      const target = `https://warpcast.com/~/compose?${q.toString()}`;
      window.open(target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      className="w-full rounded-lg border border-cyan-300/30 bg-cyan-300/20 px-4 py-2 text-sm hover:opacity-90"
      onClick={onCast}
    >
      Share on Warpcast
    </button>
  );
}
