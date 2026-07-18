"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { SubmitPill } from "@/components/ui/Pill";

const MONTANTS = [100, 200, 500, 1000, 5000];

/** Formulaire de don ASEGUIM — enregistre le don en base de données. */
export function DonForm() {
  const [montant, setMontant] = useState(200);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      nom: form.get("nom"),
      email: form.get("email"),
      montant,
      whatsapp: form.get("whatsapp"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/don", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("sent");
      e.currentTarget.reset();
      setMontant(200);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] bg-white p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Nom complet</span>
          <input name="nom" required className="input-careloop" />
        </label>
        <label className="block">
          <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Email</span>
          <input type="email" name="email" required className="input-careloop" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Numéro WhatsApp (facultatif)</span>
        <input type="tel" name="whatsapp" placeholder="Ex : +212XXXXXXXXX" className="input-careloop" />
      </label>

      <label className="mt-5 block">
        <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Message (facultatif)</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Un mot à nous partager…"
          className="input-careloop resize-none"
        />
      </label>

      <p className="mt-6 text-xs font-bold uppercase tracking-wide text-ink/60">Choisissez un montant</p>
      <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
        {MONTANTS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMontant(m)}
            className={`rounded-2xl border p-3 text-center font-bold transition-colors ${
              montant === m ? "border-orange bg-orange/5 text-ink" : "border-ink/10 text-ink/70 hover:border-ink/30"
            }`}
          >
            {m} DH
          </button>
        ))}
      </div>

      <label className="mt-5 block">
        <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Ou entrez un montant personnalisé</span>
        <div className="mt-2 flex items-center rounded-2xl border border-ink/10 px-4">
          <input
            type="number"
            min={1}
            value={montant}
            onChange={(e) => setMontant(Math.max(0, Number(e.target.value)))}
            className="w-full bg-transparent py-3 text-lg font-semibold text-ink outline-none"
          />
          <span className="font-display text-xl text-ink">DH</span>
        </div>
      </label>

      <SubmitPill variant="orange" size="lg" arrow disabled={status === "sending"} className="mt-6 w-full">
        <span className="inline-flex items-center gap-2">
          <Heart className="size-4" />
          {status === "sending" ? "Envoi en cours…" : status === "sent" ? "Merci pour votre don !" : `Faire un don de ${montant} DH`}
        </span>
      </SubmitPill>
      {status === "sent" && (
        <p className="mt-3 text-center text-xs text-green-600">
          Merci infiniment pour votre générosité ! Notre trésorier se fera le plaisir de prendre contact avec vous
          pour finaliser votre don.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-xs text-red-600">
          Une erreur est survenue lors de l'envoi. Merci de réessayer.
        </p>
      )}
      {status === "idle" && (
        <p className="mt-3 text-center text-xs text-green-600">
          Votre don sera utilisé pour soutenir les activités de l'ASEGUIM.
        </p>
      )}
    </form>
  );
}
