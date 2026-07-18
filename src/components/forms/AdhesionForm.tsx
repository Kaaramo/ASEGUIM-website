"use client";

import { useState } from "react";
import { SubmitPill } from "@/components/ui/Pill";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input type={type} name={name} placeholder={placeholder} required={required} className="input-careloop" />
    </label>
  );
}

/** Formulaire d'adhésion ASEGUIM — enregistre la demande en base de données. */
export function AdhesionForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      prenom: form.get("prenom"),
      nom: form.get("nom"),
      email: form.get("email"),
      passeport: form.get("passeport"),
      statut: form.get("statut"),
      ecole: form.get("ecole"),
      filiere: form.get("filiere"),
      promotion: form.get("promotion"),
      ville: form.get("ville"),
      contactNom: form.get("contactNom"),
      contactTel: form.get("contactTel"),
    };

    try {
      const res = await fetch("/api/adhesion", {
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
      <h3 className="font-display text-2xl text-ink">Informations personnelles</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Prénom" name="prenom" placeholder="Ex : Mamadou" required />
        <Field label="Nom" name="nom" placeholder="Ex : DIALLO" required />
        <Field label="Email" name="email" type="email" placeholder="Ex : mamadou.diallo@gmail.com" required />
        <Field label="Numéro de passeport" name="passeport" placeholder="Ex : O00652356" />
      </div>

      <h3 className="mt-8 font-display text-2xl text-ink">Informations académiques</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <Label>Statut</Label>
          <select name="statut" defaultValue="" className="input-careloop appearance-none">
            <option value="" disabled>Choisir…</option>
            <option>Étudiant boursier</option>
            <option>Étudiant non boursier</option>
            <option>Stagiaire</option>
          </select>
        </label>
        <Field label="École / Université" name="ecole" placeholder="Ex : Université Mohammed V de Rabat" />
        <Field label="Filière" name="filiere" placeholder="Ex : Génie Informatique" />
        <Field label="Promotion" name="promotion" placeholder="Ex : 2024-2025" />
        <Field label="Ville d'études" name="ville" placeholder="Ex : Rabat" />
      </div>

      <h3 className="mt-8 font-display text-2xl text-ink">Contact d'urgence (en Guinée)</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Nom du contact" name="contactNom" placeholder="Ex : Fatou CAMARA" />
        <Field label="Numéro du contact" name="contactTel" placeholder="Ex : +224621123456" />
      </div>

      <SubmitPill variant="orange" size="lg" arrow disabled={status === "sending"} className="mt-8 w-full">
        {status === "sending" ? "Envoi en cours…" : status === "sent" ? "Demande envoyée !" : "Envoyer ma demande"}
      </SubmitPill>
      {status === "sent" && (
        <p className="mt-3 text-center text-xs text-green-600">
          Merci ! Votre demande d'adhésion a bien été enregistrée. Notre équipe vous contactera prochainement.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-xs text-red-600">
          Une erreur est survenue lors de l'envoi. Merci de réessayer.
        </p>
      )}
    </form>
  );
}
