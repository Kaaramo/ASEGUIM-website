/** Formats a number as USD currency without decimals, e.g. 1280000 -> "$1,280,000". */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Returns the raised/goal ratio as a clamped percentage (0–100). */
export function progressPercent(raised: number, goal: number): number {
  if (goal <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((raised / goal) * 100)));
}
