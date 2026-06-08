"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

/** Animated count-up stat. `tone="dark"` for dark panels, `tone="light"` for cream sections. */
export function StatCounter({
  value,
  suffix = "+",
  label,
  tone = "dark",
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const { ref, value: current } = useCountUp(value);
  const dark = tone === "dark";
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "text-center",
        dark && "rounded-3xl border border-cream/15 bg-cream/[0.04] p-8",
      )}
    >
      <div
        className={cn(
          "font-display leading-none",
          dark ? "text-[clamp(3.5rem,8vw,6rem)] text-cream" : "text-[clamp(3rem,7vw,5rem)] text-ink",
        )}
      >
        {current.toLocaleString("en-US")}
        {suffix}
      </div>
      <p className={cn("mx-auto mt-4 max-w-[22ch] text-sm", dark ? "text-cream/70" : "text-green-600")}>
        {label}
      </p>
    </div>
  );
}
