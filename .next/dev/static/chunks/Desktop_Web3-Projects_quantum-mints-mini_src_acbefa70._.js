(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/constants.ts
__turbopack_context__.s([
    "CHAIN_ID",
    ()=>CHAIN_ID,
    "CONTRACT_ADDRESS",
    ()=>CONTRACT_ADDRESS,
    "MAX_QTY_UI",
    ()=>MAX_QTY_UI,
    "USDC_ADDRESS",
    ()=>USDC_ADDRESS,
    "USDC_DECIMALS",
    ()=>USDC_DECIMALS
]);
const CHAIN_ID = 8453; // Base mainnet
const CONTRACT_ADDRESS = '0x01abca5d698656428738f3b8e8c945fd9d717aab';
const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
const USDC_DECIMALS = 6;
const MAX_QTY_UI = 5;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/ipfs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/ipfs.ts
__turbopack_context__.s([
    "ipfsToHttp",
    ()=>ipfsToHttp
]);
function ipfsToHttp(uri) {
    if (!uri) return uri;
    if (uri.startsWith('ipfs://')) {
        return uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
    return uri;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyNftsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/ipfs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// حدث Transfer قياسي مختصر بدون ملف منفصل
const TransferEvent = {
    type: 'event',
    name: 'Transfer',
    inputs: [
        {
            indexed: true,
            name: 'from',
            type: 'address'
        },
        {
            indexed: true,
            name: 'to',
            type: 'address'
        },
        {
            indexed: true,
            name: 'tokenId',
            type: 'uint256'
        }
    ]
};
// baseURI من المعطيات التي زوّدتنا بها
const BASE_URI = 'ipfs://bafybeif4nhbmbypovzvr2wz5p2kfm2wy2simfbbxawmkk2j3cjp4guxsgy/';
function MyNftsPage() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    // Farcaster ready()
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyNftsPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const appUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_URL;
            const sameOrigin = !appUrl || window.location.origin === appUrl;
            if (sameOrigin) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.ready().catch(console.error);
        }
    }["MyNftsPage.useEffect"], []);
    const [tokenId, setTokenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metadataUrl, setMetadataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metadata, setMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // اجلب آخر NFT سكّيته (أحدث Transfer إلى محفظتك)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyNftsPage.useEffect": ()=>{
            let cancelled = false;
            async function run() {
                if (!isConnected || !address || !publicClient) return;
                setLoading(true);
                setErr(null);
                setTokenId(null);
                setImageUrl(null);
                setMetadata(null);
                try {
                    const logs = await publicClient.getLogs({
                        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                        // @ts-ignore
                        event: TransferEvent,
                        // حصر اللوجات إلى عنوانك كمستلم
                        // @ts-ignore
                        args: {
                            to: address
                        }
                    });
                    if (!logs.length) {
                        if (!cancelled) setErr('لا توجد عمليات Mint (Transfer) إلى محفظتك حتى الآن.');
                        return;
                    }
                    // اختر الأحدث بناءً على (blockNumber, logIndex)
                    const latest = logs.slice().sort({
                        "MyNftsPage.useEffect.run": (a, b)=>{
                            if (a.blockNumber === b.blockNumber) return Number(a.logIndex - b.logIndex);
                            return Number(a.blockNumber - b.blockNumber);
                        }
                    }["MyNftsPage.useEffect.run"])[logs.length - 1];
                    const tid = latest.args.tokenId;
                    const metaUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipfsToHttp"])(`${BASE_URI}${tid}.json`);
                    // اجلب الميتاداتا
                    const res = await fetch(metaUrl, {
                        cache: 'no-store'
                    });
                    if (!res.ok) throw new Error(`Metadata HTTP ${res.status}`);
                    const json = await res.json();
                    const img = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipfsToHttp"])(json.image || json.image_url || '');
                    if (!cancelled) {
                        setTokenId(tid);
                        setMetadataUrl(metaUrl);
                        setMetadata(json);
                        setImageUrl(img || null);
                    }
                } catch (e) {
                    if (!cancelled) setErr(e?.message || String(e));
                } finally{
                    if (!cancelled) setLoading(false);
                }
            }
            run();
            return ({
                "MyNftsPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["MyNftsPage.useEffect"];
        }
    }["MyNftsPage.useEffect"], [
        isConnected,
        address,
        publicClient
    ]);
    const prettyMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MyNftsPage.useMemo[prettyMeta]": ()=>{
            if (!metadata) return '';
            try {
                return JSON.stringify(metadata, null, 2);
            } catch  {
                return String(metadata);
            }
        }
    }["MyNftsPage.useMemo[prettyMeta]"], [
        metadata
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-neutral-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between p-4 border-b border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: "RACCOON-MINT — My NFT"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-xl mx-auto p-6 grid gap-6",
                children: !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-300",
                    children: "Connect your wallet to view your latest minted NFT."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this) : loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-300",
                    children: "Loading your latest minted NFT…"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this) : err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-amber-300",
                    children: [
                        "⚠️ ",
                        err
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this) : tokenId === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-300",
                    children: "No NFT found."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square bg-neutral-800 flex items-center justify-center",
                                    children: imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imageUrl,
                                        alt: metadata?.name ?? `#${tokenId.toString()}`,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-neutral-400 p-2 text-center",
                                        children: "No image in metadata"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-sm space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono",
                                            children: [
                                                "Token #",
                                                tokenId.toString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        metadataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-cyan-300 hover:underline",
                                            href: metadataUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Open metadata JSON →"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-2",
                                    children: "Metadata"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "text-xs text-neutral-200 overflow-auto whitespace-pre-wrap",
                                    children: prettyMeta
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(MyNftsPage, "URXhpoPP4un0Qag9ueEpz5i6WZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]
    ];
});
_c = MyNftsPage;
var _c;
__turbopack_context__.k.register(_c, "MyNftsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Web3-Projects_quantum-mints-mini_src_acbefa70._.js.map