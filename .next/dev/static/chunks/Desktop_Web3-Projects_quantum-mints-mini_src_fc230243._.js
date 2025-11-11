(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/collection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/abi/collection.ts
__turbopack_context__.s([
    "COLLECTION_ABI",
    ()=>COLLECTION_ABI
]);
const COLLECTION_ABI = [
    {
        "type": "function",
        "name": "remaining",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxSupply",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "priceUSDC",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "saleActive",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxPerWallet",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "mintedOf",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "mint",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "qty",
                "type": "uint256"
            }
        ],
        "outputs": []
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/erc721Events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/abi/erc721Events.ts
__turbopack_context__.s([
    "ERC721_EVENTS",
    ()=>ERC721_EVENTS
]);
const ERC721_EVENTS = {
    Transfer: {
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
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/collection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc721Events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/erc721Events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const BASE_URI = 'ipfs://bafybeif4nhbmbypovzvr2wz5p2kfm2wy2simfbbxawmkk2j3cjp4guxsgy/';
// بوابات IPFS بديلة لفشل/ipfs.io
const IPFS_GATEWAYS = [
    (hash)=>`https://ipfs.io/ipfs/${hash}`,
    (hash)=>`https://cloudflare-ipfs.com/ipfs/${hash}`,
    (hash)=>`https://gateway.pinata.cloud/ipfs/${hash}`
];
async function fetchWithFallback(urls) {
    for (const u of urls){
        try {
            const res = await fetch(u, {
                cache: 'no-store'
            });
            if (res.ok) return await res.json();
        } catch  {}
    }
    throw new Error('All gateways failed');
}
function MyNftsPage() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    // Ready call لفاركاستر
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyNftsPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const appUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_URL;
            const sameOrigin = !appUrl || window.location.origin === appUrl;
            if (sameOrigin) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.ready().catch(console.error);
            }
        }
    }["MyNftsPage.useEffect"], []);
    // لعرض العدد الذي سككته (اختياري معلوماتي)
    const { data: mintedOfMe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'mintedOf',
        args: [
            address ?? '0x0000000000000000000000000000000000000000'
        ]
    });
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logError, setLogError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mintedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MyNftsPage.useMemo[mintedCount]": ()=>mintedOfMe?.toString() ?? (isConnected ? '0' : '—')
    }["MyNftsPage.useMemo[mintedCount]"], [
        mintedOfMe,
        isConnected
    ]);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MyNftsPage.useCallback[load]": async ()=>{
            if (!isConnected || !address || !publicClient) return;
            setLoading(true);
            setLogError(null);
            try {
                // fromBlock: خذه من env إن وُجد لتقليل المدى، وإلا ارجع للبداية
                const envBlock = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEPLOY_BLOCK;
                const fromBlock = envBlock ? BigInt(envBlock) : 0n;
                // 1) لوجات Transfer حيث to=address
                const logs = await publicClient.getLogs({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                    event: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc721Events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERC721_EVENTS"].Transfer,
                    // @ts-ignore viem يقبل args بالفلاتر المفهرسة
                    args: {
                        to: address
                    },
                    fromBlock,
                    toBlock: 'latest'
                });
                // 2) استخرج tokenIds الفريدة
                const tokenIds = Array.from(new Set(logs.map({
                    "MyNftsPage.useCallback[load].tokenIds": (l)=>l.args?.tokenId
                }["MyNftsPage.useCallback[load].tokenIds"]).filter(Boolean)));
                if (tokenIds.length === 0) {
                    setItems([]);
                    setLoading(false);
                    return;
                }
                // 3) رشّح بالملكية الحالية ownerOf == address (لتظهر فقط المملوكة الآن)
                const owners = await Promise.all(tokenIds.map({
                    "MyNftsPage.useCallback[load]": (tid)=>publicClient.readContract({
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                            abi: [
                                {
                                    type: 'function',
                                    name: 'ownerOf',
                                    stateMutability: 'view',
                                    inputs: [
                                        {
                                            name: 'tokenId',
                                            type: 'uint256'
                                        }
                                    ],
                                    outputs: [
                                        {
                                            type: 'address'
                                        }
                                    ]
                                }
                            ],
                            functionName: 'ownerOf',
                            args: [
                                tid
                            ]
                        }).catch({
                            "MyNftsPage.useCallback[load]": ()=>null
                        }["MyNftsPage.useCallback[load]"])
                }["MyNftsPage.useCallback[load]"]));
                const ownedNow = tokenIds.filter({
                    "MyNftsPage.useCallback[load].ownedNow": (_, i)=>owners[i]?.toLowerCase() === address.toLowerCase()
                }["MyNftsPage.useCallback[load].ownedNow"]);
                // 4) ابنِ روابط الميتاداتا والتحميل مع بوابات احتياطية
                const withMeta = await Promise.all(ownedNow.map({
                    "MyNftsPage.useCallback[load]": async (tid)=>{
                        const ipfsPath = `${BASE_URI.replace('ipfs://', '')}${tid}.json`;
                        const urls = IPFS_GATEWAYS.map({
                            "MyNftsPage.useCallback[load].urls": (fn)=>fn(ipfsPath)
                        }["MyNftsPage.useCallback[load].urls"]);
                        try {
                            const json = await fetchWithFallback(urls);
                            const imageIpfs = json.image || json.image_url || '';
                            const imageUrl = imageIpfs ? imageIpfs.startsWith('ipfs://') ? IPFS_GATEWAYS[0](imageIpfs.replace('ipfs://', '')) : imageIpfs : undefined;
                            return {
                                tokenId: tid,
                                metadataUrl: urls[0],
                                imageUrl,
                                name: json.name
                            };
                        } catch (e) {
                            return {
                                tokenId: tid,
                                metadataUrl: urls[0],
                                error: `Metadata failed: ${e?.message || e}`
                            };
                        }
                    }
                }["MyNftsPage.useCallback[load]"]));
                setItems(withMeta);
            } catch (e) {
                setLogError(e?.message || String(e));
            } finally{
                setLoading(false);
            }
        }
    }["MyNftsPage.useCallback[load]"], [
        isConnected,
        address,
        publicClient
    ]);
    // تحميل عند الدخول
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyNftsPage.useEffect": ()=>{
            load();
        }
    }["MyNftsPage.useEffect"], [
        load
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
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: load,
                                className: "text-sm rounded-lg border border-neutral-700 px-3 py-1 hover:bg-neutral-900",
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-3xl mx-auto p-6 grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-3",
                                children: "Your Minted NFTs (Owned now)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-300",
                                children: "Connect your wallet to see your NFTs."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-300",
                                children: [
                                    "Minted by you (lifetime): ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-white",
                                        children: mintedCount
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            logError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-amber-300 text-sm",
                                children: [
                                    "⚠️ ",
                                    logError
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 190,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-300",
                            children: "Loading your NFTs…"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-300",
                            children: isConnected ? 'No NFTs owned found for this wallet.' : 'Connect wallet to view.'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                            children: items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square bg-neutral-800 flex items-center justify-center",
                                            children: it.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: it.imageUrl,
                                                alt: it.name ?? `#${it.tokenId.toString()}`,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-neutral-400 p-2 text-center",
                                                children: it.error ? it.error : 'No image'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono",
                                                    children: [
                                                        "#",
                                                        it.tokenId.toString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                it.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-neutral-300",
                                                    children: it.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "text-cyan-300 text-xs hover:underline",
                                                    href: IPFS_GATEWAYS[0](`${BASE_URI.replace('ipfs://', '')}${it.tokenId}.json`),
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Metadata →"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, it.tokenId.toString(), true, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text-cyan-300 hover:underline",
                            href: `https://basescan.org/address/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"]}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "View contract on BaseScan →"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(MyNftsPage, "lPKzfyHRU04svm8zW8cAIacNvII=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
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

//# sourceMappingURL=Desktop_Web3-Projects_quantum-mints-mini_src_fc230243._.js.map