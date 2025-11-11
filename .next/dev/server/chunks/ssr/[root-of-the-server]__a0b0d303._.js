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
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/collection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/erc20.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/abi/erc20.ts
__turbopack_context__.s([
    "ERC20_ABI",
    ()=>ERC20_ABI
]);
const ERC20_ABI = [
    {
        "type": "function",
        "name": "decimals",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "type": "uint8"
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOf",
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
        "name": "allowance",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "spender",
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
        "name": "approve",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    }
];
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
"[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/viem/_esm/chains/definitions/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/node_modules/@farcaster/miniapp-sdk/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/collection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc20$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/abi/erc20.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Web3-Projects/quantum-mints-mini/src/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // ✅ يمنع اختلاف SSR/CSR
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Farcaster Mini App: Ready call
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const appUrl = undefined;
        const sameOrigin = undefined;
    }, []);
    const canRead = mounted && isConnected && chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAIN_ID"];
    // === Reads (لا تُفعّل قبل mount) ===
    const { data: remaining } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'remaining',
        query: {
            enabled: !!canRead
        }
    });
    const { data: totalSupply } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'totalSupply',
        query: {
            enabled: !!canRead
        }
    });
    const { data: maxSupply } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'maxSupply',
        query: {
            enabled: !!canRead
        }
    });
    const { data: priceUSDC } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'priceUSDC',
        query: {
            enabled: !!canRead
        }
    });
    const { data: saleActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'saleActive',
        query: {
            enabled: !!canRead
        }
    });
    const { data: maxPerWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'maxPerWallet',
        query: {
            enabled: !!canRead
        }
    });
    const { data: mintedOfMe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
        functionName: 'mintedOf',
        args: [
            address ?? '0x0000000000000000000000000000000000000000'
        ],
        query: {
            enabled: !!canRead && !!address
        }
    });
    const { data: allowance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USDC_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc20$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERC20_ABI"],
        functionName: 'allowance',
        args: [
            address ?? '0x0000000000000000000000000000000000000000',
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"]
        ],
        query: {
            enabled: !!canRead && !!address
        }
    });
    // === Derived ===
    const minted = totalSupply ?? 0n;
    const max = maxSupply ?? 333n;
    const percent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (max === 0n) return 0;
        const p = Number(minted * 100n / max);
        return Math.min(100, Math.max(0, p));
    }, [
        minted,
        max
    ]);
    const requiredAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(priceUSDC ?? 0n) * BigInt(qty), [
        priceUSDC,
        qty
    ]);
    const hasEnoughAllowance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (allowance === undefined) return false;
        return allowance >= requiredAmount;
    }, [
        allowance,
        requiredAmount
    ]);
    const walletOverLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (maxPerWallet === undefined || mintedOfMe === undefined) return false;
        return mintedOfMe + BigInt(qty) > maxPerWallet;
    }, [
        maxPerWallet,
        mintedOfMe,
        qty
    ]);
    const guardReason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!mounted) return 'Loading…';
        if (!isConnected) return 'Connect wallet to continue';
        if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAIN_ID"]) return 'Switch to Base mainnet';
        if (saleActive === false) return 'Sale is not active';
        if (remaining !== undefined && remaining === 0n) return 'Sold out';
        if (qty < 1 || qty > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_QTY_UI"]) return `Qty must be 1–${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_QTY_UI"]}`;
        if (walletOverLimit) return 'Exceeds wallet limit';
        return null;
    }, [
        mounted,
        isConnected,
        chainId,
        saleActive,
        remaining,
        qty,
        walletOverLimit
    ]);
    // === Writes ===
    const { writeContract: write, data: txHash, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: txHash
    });
    const approve = async ()=>{
        if (!requiredAmount) return;
        write({
            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base"].id,
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USDC_ADDRESS"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$erc20$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERC20_ABI"],
            functionName: 'approve',
            args: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
                requiredAmount
            ]
        });
    };
    const mint = async ()=>{
        write({
            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base"].id,
            address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$abi$2f$collection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ABI"],
            functionName: 'mint',
            args: [
                BigInt(qty)
            ]
        });
    };
    // Share → Warpcast composer
    const share = ()=>{
        const appUrl = ("TURBOPACK compile-time value", "https://clara-ralph-campbell-penalties.trycloudflare.com") || window.location.origin;
        const text = `Mint your Raccoon on Base — 0.1 USDC. Max 5/wallet. Live now: ${appUrl}`;
        const u = new URL('https://warpcast.com/~/compose');
        u.searchParams.set('text', text);
        u.searchParams.append('embeds[]', appUrl);
        window.open(u.toString(), '_blank');
    };
    // UI helpers
    const fmt = (v)=>v === undefined ? '—' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(v, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USDC_DECIMALS"]);
    const disabledMint = !!guardReason || !hasEnoughAllowance || isPending || isConfirming;
    const disabledApprove = !!guardReason || hasEnoughAllowance || isPending || isConfirming;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (remaining !== undefined) {
            const maxByRemaining = Number(remaining > BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_QTY_UI"]) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_QTY_UI"] : remaining);
            if (qty > maxByRemaining) setQty(Math.max(1, maxByRemaining));
        }
    }, [
        remaining
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    const mintedOfMeText = mounted && mintedOfMe !== undefined ? mintedOfMe.toString() : '—'; // ✅ لا نعرض 0 قبل mount
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-neutral-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between p-4 border-b border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: "RACCOON-MINT"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-3xl mx-auto p-6 grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressRing, {
                                percent: percent,
                                label: `${minted.toString()}/${max.toString()} Minted`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-neutral-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Max 5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            " per wallet"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-neutral-300",
                                        children: [
                                            "You minted: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-white",
                                                children: mintedOfMeText
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-neutral-300",
                                        children: [
                                            "Price: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-white",
                                                children: fmt(priceUSDC)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 22
                                            }, this),
                                            " USDC"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4",
                                children: "Mint"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-neutral-300",
                                        children: "Quantity"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        max: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_QTY_UI"],
                                        value: qty,
                                        onChange: (e)=>setQty(Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_QTY_UI"], Math.max(1, Number(e.target.value || 1)))),
                                        className: "w-20 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto text-sm text-neutral-400",
                                        children: [
                                            "Cost: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-mono",
                                                children: fmt(requiredAmount)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this),
                                            " USDC"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: approve,
                                        disabled: disabledApprove,
                                        className: `px-4 py-2 rounded-lg border ${disabledApprove ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} border-cyan-300/30 bg-cyan-300/20`,
                                        children: isPending ? 'Pending…' : 'Approve USDC'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: mint,
                                        disabled: disabledMint,
                                        className: `px-4 py-2 rounded-lg border ${disabledMint ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} border-emerald-300/30 bg-emerald-300/20`,
                                        children: isConfirming ? 'Confirming…' : 'Mint'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: share,
                                    className: "w-full rounded-lg border border-cyan-300/30 bg-cyan-300/20 px-4 py-2 text-sm hover:opacity-90",
                                    children: "Share on Warpcast"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            !hasEnoughAllowance && !guardReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-neutral-300",
                                children: [
                                    "You need to approve ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: fmt(requiredAmount)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 35
                                    }, this),
                                    " USDC before minting."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function ProgressRing({ percent, label }) {
    const size = 112;
    const stroke = 10;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const dash = percent / 100 * c;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        style: {
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: size / 2,
                        cy: size / 2,
                        r: r,
                        stroke: "currentColor",
                        strokeWidth: stroke,
                        className: "text-neutral-800",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: size / 2,
                        cy: size / 2,
                        r: r,
                        stroke: "currentColor",
                        strokeWidth: stroke,
                        className: "text-cyan-300",
                        fill: "none",
                        strokeDasharray: `${dash} ${c - dash}`,
                        strokeLinecap: "round",
                        transform: `rotate(-90 ${size / 2} ${size / 2})`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Web3$2d$Projects$2f$quantum$2d$mints$2d$mini$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 grid place-items-center text-sm font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Web3-Projects/quantum-mints-mini/src/app/page.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a0b0d303._.js.map