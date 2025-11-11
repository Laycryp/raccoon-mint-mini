// src/lib/abi/collection.ts
export const COLLECTION_ABI = [
  { "type":"function","name":"remaining","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}] },
  { "type":"function","name":"totalSupply","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}] },
  { "type":"function","name":"maxSupply","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}] },
  { "type":"function","name":"priceUSDC","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}] },
  { "type":"function","name":"saleActive","stateMutability":"view","inputs":[],"outputs":[{"type":"bool"}] },
  { "type":"function","name":"maxPerWallet","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}] },
  { "type":"function","name":"mintedOf","stateMutability":"view","inputs":[{"name":"owner","type":"address"}],"outputs":[{"type":"uint256"}] },
  { "type":"function","name":"mint","stateMutability":"nonpayable","inputs":[{"name":"qty","type":"uint256"}],"outputs":[] }
] as const;
