"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}

/** Formulaire de contact ASEGUIM (démo). */
export function MessageForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-[1.75rem] bg-white p-7 shadow-[0_10px_40px_rgba(17,42,32,0.06)] sm:p-9"
    >
      <label className="block">
        <Label>Nom</Label>
        <input name="nom" placeholder="Votre nom" className="input-careloop" />
      </label>
      <label className="mt-5 block">
        <Label>Email</Label>
        <input type="email" name="email" placeholder="votre@email.com" className="input-careloop" />
      </label>
      <label className="mt-5 block">
        <Label>Message</Label>
        <textarea name="message" rows={4} placeholder="Votre message…" className="input-careloop resize-none" />
      </label>
      <Pill href="#" variant="orange" size="lg" arrow className="mt-6 w-full">
        {sent ? "Message envoyé, merci !" : "Envoyer le message"}
      </Pill>
      {sent && <p className="mt-3 text-center text-sm text-green-700">Démo — votre message n'a pas été réellement transmis.</p>}
    </form>
  );
}
