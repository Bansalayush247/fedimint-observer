// Convert millisatoshis to Bitcoin with specified decimal places
export function asBitcoin(msats: number, decimals: number = 6): string {
  const btc = msats / 100_000_000_000;
  return `${btc.toFixed(decimals)} BTC`;
}

// Convert millisatoshis to Bitcoin number only (no BTC suffix)
export function toBitcoin(msats: number, decimals: number = 6): string {
  const btc = msats / 100_000_000_000;
  return btc.toFixed(decimals);
}

// Format numbers with thousand separators
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

// Calculate rating index for sorting
export function ratingIndex(count: number, avg: number | null): number {
  return (avg || 0) * Math.log10((count || 0) + 1);
}
