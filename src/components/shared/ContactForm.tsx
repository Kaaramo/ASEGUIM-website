"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";

/** Contact form (mock — visual emulation only): name, email, phone, message. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[1.75rem] bg-white p-7 shadow-[0_10px_40px_rgba(17,42,32,0.06)] sm:p-9"
    >
      <label className="block">
        <Label>Name</Label>
        <input name="name" placeholder="First name" className="input-careloop" />
      </label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <Label>Email</Label>
          <input type="email" name="email" placeholder="Enter your email" className="input-careloop" />
        </label>
        <label className="block">
          <Label>Phone number</Label>
          <input type="tel" name="phone" placeholder="Phone number" className="input-careloop" />
        </label>
      </div>
      <label className="mt-5 block">
        <Label>Message</Label>
        <textarea name="message" rows={4} placeholder="Type your message here" className="input-careloop resize-none" />
      </label>
      <Pill href="#" variant="orange" size="lg" arrow className="mt-6 w-full">
        {sent ? "thank you!" : "send message"}
      </Pill>
      {sent && (
        <p className="mt-3 text-center text-sm text-green-700">
          Thanks — this is a demo form, so nothing was sent.
        </p>
      )}
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}
