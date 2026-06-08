"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";
import { ALL_CAUSES } from "@/data/pages";

const QUICK = [20, 50, 100, 250];

/** Donation form (mock — visual emulation only): name, email, amount, cause, message. */
export function DonationForm() {
  const [amount, setAmount] = useState("100");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[1.75rem] bg-white p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Enter your full name" />
        <Field label="Email" name="email" type="email" placeholder="Enter your email" />
        <div>
          <Label>Donation amount</Label>
          <input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: $100"
            className="input-careloop"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setAmount(String(q))}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  amount === String(q) ? "bg-orange text-white" : "bg-cream text-ink/70 hover:bg-ink/10"
                }`}
              >
                ${q}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label>Select a cause</Label>
          <select name="cause" defaultValue="" className="input-careloop appearance-none">
            <option value="" disabled>
              Select a cause
            </option>
            {ALL_CAUSES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Label>Message</Label>
        <textarea name="message" rows={3} placeholder="Type your message here" className="input-careloop resize-none" />
      </div>

      <Pill href="#" variant="orange" size="lg" arrow className="mt-6 w-full">
        {sent ? "thank you!" : "donate now"}
      </Pill>
      {sent && (
        <p className="mt-3 text-center text-sm text-green-700">
          Thanks — this is a demo form, so nothing was charged.
        </p>
      )}
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label>
      <Label>{label}</Label>
      <input type={type} name={name} placeholder={placeholder} className="input-careloop" />
    </label>
  );
}
