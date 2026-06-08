import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = { title: "Conditions d'utilisation — ASEGUIM" };

export default function TermsAndConditions() {
  return (
    <LegalPage
      tag="Mentions légales"
      title="Conditions d'utilisation"
      updated="Janvier 2026"
      sections={[
        { heading: "Acceptation des conditions", body: "En utilisant ce site, vous acceptez de l'utiliser de manière licite et respectueuse." },
        { heading: "Adhésions et dons", body: "Les adhésions et dons décrits sur ce site sont gérés par l'ASEGUIM. Les modalités de traitement et de reçu sont communiquées lors de la procédure." },
        { heading: "Contenu", body: "Les textes et visuels de ce site appartiennent à l'ASEGUIM et ne peuvent être réutilisés sans autorisation." },
        { heading: "Limitation de responsabilité", body: "L'ASEGUIM met tout en œuvre pour assurer l'exactitude des informations, sans garantie d'exhaustivité." },
      ]}
    />
  );
}
