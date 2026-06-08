"use client";

import { useState } from "react";
import { Pill } from "@/components/Pill";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs font-bold uppercase tracking-wide text-ink/60">{children}</span>;
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input type={type} name={name} placeholder={placeholder} className="input-careloop" />
    </label>
  );
}

/** Formulaire d'adhésion ASEGUIM (démo — réservé aux étudiants guinéens). */
export function AdhesionForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-[1.75rem] bg-white p-7 sm:p-9"
    >
      <h3 className="font-display text-2xl text-ink">Informations personnelles</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Prénom" name="prenom" placeholder="Ex : Mamadou" />
        <Field label="Nom" name="nom" placeholder="Ex : DIALLO" />
        <Field label="Email" name="email" type="email" placeholder="Ex : mamadou.diallo@gmail.com" />
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

      <Pill href="#" variant="orange" size="lg" arrow className="mt-8 w-full">
        {sent ? "Demande envoyée !" : "Envoyer ma demande"}
      </Pill>
      <p className="mt-3 text-center text-xs text-green-600">
        {sent
          ? "Merci ! Démo — votre demande n'a pas été réellement transmise."
          : "En soumettant ce formulaire, vous acceptez d'être contacté par l'ASEGUIM pour finaliser votre adhésion."}
      </p>
    </form>
  );
}
