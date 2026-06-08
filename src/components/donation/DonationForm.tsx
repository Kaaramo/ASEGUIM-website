"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";
import { DONATION_TIERS } from "@/data/pages";
import { cn } from "@/lib/utils";

export function DonationForm() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");

  return (
    <div className="rounded-[2rem] bg-white p-8 sm:p-10">
      {/* Frequency toggle */}
      <div className="inline-flex rounded-full bg-cream p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-semibold capitalize transition-colors",
              frequency === f ? "bg-ink text-cream" : "text-ink/70",
            )}
          >
            {f === "once" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Tiers */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {DONATION_TIERS.map((tier) => (
          <button
            key={tier.amount}
            type="button"
            onClick={() => setAmount(tier.amount)}
            className={cn(
              "rounded-2xl border p-4 text-left transition-colors",
              amount === tier.amount ? "border-orange bg-orange/5" : "border-ink/10 hover:border-ink/30",
            )}
          >
            <span className="block font-display text-3xl text-ink">${tier.amount}</span>
            <span className="mt-1 block text-xs text-green-600">{tier.label}</span>
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <label className="mt-5 block">
        <span className="text-sm font-semibold text-ink/70">Custom amount</span>
        <div className="mt-2 flex items-center rounded-2xl border border-ink/10 px-4">
          <span className="font-display text-2xl text-ink">$</span>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            className="w-full bg-transparent px-3 py-3 text-lg font-semibold text-ink outline-none"
          />
        </div>
      </label>

      <Pill href="/donation" variant="orange" size="lg" arrow className="mt-6 w-full">
        donate {frequency === "monthly" ? `$${amount}/mo` : `$${amount}`}
      </Pill>
      <p className="mt-4 text-center text-xs text-green-600">
        Secure payment · cancel anytime · 100% goes to programs and partners.
      </p>
    </div>
  );
}
