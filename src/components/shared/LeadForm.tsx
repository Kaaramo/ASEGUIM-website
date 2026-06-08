"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";

/** Mock lead/contact form (no backend — scope is visual emulation). */
export function LeadForm({
  submitLabel = "send message",
  withSubject = true,
}: {
  submitLabel?: string;
  withSubject?: boolean;
}) {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[2rem] bg-white p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="first" />
        <Field label="Last name" name="last" />
        <Field label="Email" name="email" type="email" className="sm:col-span-2" />
        {withSubject && <Field label="Subject" name="subject" className="sm:col-span-2" />}
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-semibold text-ink/70">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-ink outline-none focus:border-ink/30"
        />
      </label>
      <Pill href="#" variant="orange" size="lg" arrow className="mt-6 w-full" >
        {sent ? "thank you!" : submitLabel}
      </Pill>
      {sent && (
        <p className="mt-3 text-center text-sm text-green-700">
          Thanks — this is a demo form, so nothing was sent.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  className,
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-semibold text-ink/70">{label}</span>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-ink outline-none focus:border-ink/30"
      />
    </label>
  );
}
