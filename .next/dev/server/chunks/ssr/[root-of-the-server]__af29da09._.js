module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const CONTRACT_ADDRESS = '0xa31153705c9a205851e4bb983eaeac1a44d9575d'; // NEW
const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
const USDC_DECIMALS = 6;
const MAX_QTY_UI = 5;
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/ipfs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/erc721.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/abi/erc721.ts
__turbopack_context__.s([
    "ERC721_ENUMERABLE_METADATA_ABI",
    ()=>ERC721_ENUMERABLE_METADATA_ABI
]);
const ERC721_ENUMERABLE_METADATA_ABI = [
    // balances
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    // enumeration
    {
        type: 'function',
        name: 'tokenOfOwnerByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    // metadata
    {
        type: 'function',
        name: 'tokenURI',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'string'
            }
        ]
    }
];
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyNftsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/ipfs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc721$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/erc721.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function MyNftsPage() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const appUrl = undefined;
        const sameOrigin = undefined;
    }, []);
    const loadOwned = async ()=>{
        if (!isConnected || !address || !publicClient) return;
        setLoading(true);
        setErr(null);
        try {
            const balance = await publicClient.readContract({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc721$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERC721_ENUMERABLE_METADATA_ABI"],
                functionName: 'balanceOf',
                args: [
                    address
                ]
            });
            if (balance === 0n) {
                setItems([]);
                setLoading(false);
                return;
            }
            const calls = Array.from({
                length: Number(balance)
            }, (_, i)=>({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc721$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERC721_ENUMERABLE_METADATA_ABI"],
                    functionName: 'tokenOfOwnerByIndex',
                    args: [
                        address,
                        BigInt(i)
                    ]
                }));
            const tokenIds = (await publicClient.multicall({
                contracts: calls
            })).map((r)=>r.result);
            const uriCalls = tokenIds.map((tid)=>({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc721$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERC721_ENUMERABLE_METADATA_ABI"],
                    functionName: 'tokenURI',
                    args: [
                        tid
                    ]
                }));
            const uris = (await publicClient.multicall({
                contracts: uriCalls
            })).map((r)=>r.result);
            const meta = await Promise.all(tokenIds.map(async (tid, i)=>{
                const tokenUri = uris[i];
                const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ipfsToHttp"])(tokenUri);
                try {
                    const res = await fetch(url, {
                        cache: 'no-store'
                    });
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    const json = await res.json();
                    const img = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$ipfs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ipfsToHttp"])(json.image || json.image_url || '');
                    return {
                        tokenId: tid,
                        name: json.name,
                        imageUrl: img,
                        metaUrl: url
                    };
                } catch (e) {
                    return {
                        tokenId: tid,
                        metaUrl: url,
                        error: e?.message || String(e)
                    };
                }
            }));
            setItems(meta);
        } catch (e) {
            setErr(e?.message || String(e));
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadOwned();
    }, [
        isConnected,
        address
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    const ownedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>items.length.toString(), [
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-neutral-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between p-4 border-b border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: "RACCOON-MINT — My NFT"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-3xl mx-auto p-6 grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold",
                                        children: "Your Minted NFTs"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: loadOwned,
                                        className: "text-sm rounded-lg border border-neutral-700 px-3 py-1 hover:bg-neutral-800",
                                        disabled: loading,
                                        children: loading ? 'Refreshing…' : 'Refresh'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-neutral-300",
                                children: "Connect your wallet to see your NFTs."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-neutral-300",
                                children: [
                                    "Owned now: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-white",
                                        children: ownedCount
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-amber-300 text-sm",
                                children: [
                                    "⚠️ Error: ",
                                    err
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 127,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-300",
                            children: "Loading your NFTs…"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-300",
                            children: isConnected ? 'No NFTs owned at the moment.' : 'Connect wallet to view.'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                            children: items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square bg-neutral-800 flex items-center justify-center",
                                            children: it.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: it.imageUrl,
                                                alt: it.name ?? `#${it.tokenId.toString()}`,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-neutral-400 p-2 text-center",
                                                children: it.error ? it.error : 'No image'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono",
                                                    children: [
                                                        "#",
                                                        it.tokenId.toString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this),
                                                it.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-neutral-300",
                                                    children: it.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "inline-block mt-1 text-cyan-300 text-xs hover:underline",
                                                    href: `https://opensea.io/assets/base/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"]}/${it.tokenId.toString()}`,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Open in OpenSea →"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, it.tokenId.toString(), true, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__af29da09._.js.map