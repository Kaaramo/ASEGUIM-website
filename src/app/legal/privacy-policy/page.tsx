import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité — ASEGUIM" };

export default function PrivacyPolicy() {
  return (
    <LegalPage
      tag="Mentions légales"
      title="Politique de confidentialité"
      updated="Janvier 2026"
      sections={[
        { heading: "Aperçu", body: "Cette politique explique, en termes généraux, quelles informations l'ASEGUIM peut collecter et comment elles sont utilisées." },
        { heading: "Informations collectées", body: "Il s'agit notamment des nom, email et données fournies lors d'une adhésion, d'un don ou d'une demande de partenariat, ainsi que de statistiques d'usage du site." },
        { heading: "Utilisation des informations", body: "Les informations servent à traiter les adhésions, coordonner les activités, envoyer des communications auxquelles vous consentez et améliorer le site." },
        { heading: "Vos droits", body: "Vous pouvez demander l'accès, la rectification ou la suppression de vos données, et vous désinscrire des communications à tout moment." },
      ]}
    />
  );
}
