"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Pill } from "@/components/Pill";

const MONTANTS = [100, 200, 500, 1000, 5000];

/** Formulaire de don ASEGUIM (démo) — montants en DH. */
export function DonForm() {
  const [montant, setMontant] = useState(200);
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-[1.75rem] bg-white p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Nom complet (facultatif)</span>
          <input name="nom" className="input-careloop" />
        </label>
        <label className="block">
          <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">Email (facultatif)</span>
          <input type="email" name="email" className="input-careloop" />
        </label>
      </div>

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

      <Pill href="#" variant="orange" size="lg" arrow className="mt-6 w-full">
        <span className="inline-flex items-center gap-2">
          <Heart className="size-4" /> {sent ? "Merci pour votre don !" : `Faire un don de ${montant} DH`}
        </span>
      </Pill>
      <p className="mt-3 text-center text-xs text-green-600">
        {sent ? "Démo — aucun paiement n'a été effectué." : "Votre don sera utilisé pour soutenir les activités de l'ASEGUIM."}
      </p>
    </form>
  );
}
