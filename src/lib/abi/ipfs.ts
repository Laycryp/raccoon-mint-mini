// src/lib/ipfs.ts
export function ipfsToHttp(uri: string) {
  if (!uri) return uri;
  if (uri.startsWith('ipfs://')) {
    return uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
  }
  return uri;
}
