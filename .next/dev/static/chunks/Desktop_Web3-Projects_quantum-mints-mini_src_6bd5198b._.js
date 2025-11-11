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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/collection.ts [app-client] (ecmascript)");
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
function MyNftsPage() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
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
    const { data: mintedOfMe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'mintedOf',
        args: [
            address ?? '0x0000000000000000000000000000000000000000'
        ]
    });
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
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-3xl mx-auto p-6 grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4",
                                children: "Your Minted NFTs"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-300",
                                children: "Connect your wallet to see your mints."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-300",
                                        children: [
                                            "You minted: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-white",
                                                children: mintedOfMe?.toString() ?? '0'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-cyan-300 hover:underline",
                                            href: `https://basescan.org/address/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"]}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "View contract on BaseScan →"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold mb-2",
                                children: "Coming soon"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-300",
                                children: "We’ll render your owned token metadata/images here once token IDs and metadata endpoint are available."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/my-nfts/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(MyNftsPage, "KHAGe0W5qtU8ztTU9P3soCMmxVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
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

//# sourceMappingURL=Desktop_Web3-Projects_quantum-mints-mini_src_6bd5198b._.js.map