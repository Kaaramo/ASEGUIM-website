"use client";

import { useCountUp } from "@/hooks/useCountUp";

/** Animated count-up stat shown on the dark impact panels. */
export function StatCounter({
  value,
  suffix = "+",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 text-center"
    >
      <div className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none text-cream">
        {current}
        {suffix}
      </div>
      <p className="mx-auto mt-4 max-w-[22ch] text-sm text-cream/70">{label}</p>
    </div>
  );
}
