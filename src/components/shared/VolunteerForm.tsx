"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";

const INTERESTS = ["Field support", "Fundraising", "Mentoring", "Remote & skills-based"];

/** Volunteer application form (mock — visual emulation only). */
export function VolunteerForm() {
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
        <label>
          <Label>Name</Label>
          <input name="name" placeholder="First name" className="input-careloop" />
        </label>
        <label>
          <Label>Email</Label>
          <input type="email" name="email" placeholder="Enter your email" className="input-careloop" />
        </label>
        <label>
          <Label>Phone number</Label>
          <input type="tel" name="phone" placeholder="Phone number" className="input-careloop" />
        </label>
        <label>
          <Label>Area of interest</Label>
          <select name="interest" defaultValue="" className="input-careloop appearance-none">
            <option value="" disabled>
              Select an area
            </option>
            {INTERESTS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5">
        <Label>Message</Label>
        <textarea name="message" rows={3} placeholder="Type your message here" className="input-careloop resize-none" />
      </div>
      <Pill href="#" variant="orange" size="lg" arrow className="mt-6 w-full">
        {sent ? "thank you!" : "submit application"}
      </Pill>
      {sent && (
        <p className="mt-3 text-center text-sm text-green-700">
          Thanks — this is a demo form, so nothing was submitted.
        </p>
      )}
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}
