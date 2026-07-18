"use client";

import { useState } from "react";
import { SubmitPill } from "@/components/ui/Pill";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}

/** Formulaire de partenariat ASEGUIM — enregistre la demande en base de données. */
export function PartenaireForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      entreprise: form.get("entreprise"),
      tel: form.get("tel"),
      email: form.get("email"),
      vision: form.get("vision"),
    };

    try {
      const res = await fetch("/api/partenariat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] bg-white p-7 sm:p-9">
      <label className="block">
        <Label>Nom de votre entreprise</Label>
        <input name="entreprise" placeholder="Le nom de votre entreprise" required className="input-careloop" />
      </label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <Label>Téléphone professionnel</Label>
          <input type="tel" name="tel" placeholder="+212XXXXXXXXX" className="input-careloop" />
        </label>
        <label className="block">
          <Label>Email professionnel</Label>
          <input type="email" name="email" placeholder="votre@email.com" required className="input-careloop" />
        </label>
      </div>
      <label className="mt-5 block">
        <Label>Votre vision du partenariat</Label>
        <textarea
          name="vision"
          rows={4}
          placeholder="Partagez avec nous votre vision et vos objectifs pour ce partenariat…"
          className="input-careloop resize-none"
        />
      </label>
      <SubmitPill variant="orange" size="lg" arrow disabled={status === "sending"} className="mt-6 w-full">
        {status === "sending" ? "Envoi en cours…" : status === "sent" ? "Demande reçue, merci !" : "Soumettre ma demande de partenariat"}
      </SubmitPill>
      {status === "sent" && (
        <p className="mt-3 text-center text-xs text-green-600">
          Votre demande a bien été enregistrée. Notre équipe reviendra vers vous rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-xs text-red-600">
          Une erreur est survenue lors de l'envoi. Merci de réessayer.
        </p>
      )}
      {status === "idle" && (
        <p className="mt-3 text-center text-xs text-green-600">
          Votre confidentialité est importante pour nous. Toutes les informations partagées seront traitées avec discrétion.
        </p>
      )}
    </form>
  );
}
