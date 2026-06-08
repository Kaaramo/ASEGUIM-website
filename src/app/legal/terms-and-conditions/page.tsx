import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = { title: "Terms of Service — Careloop" };

export default function TermsAndConditions() {
  return (
    <LegalPage
      tag="Legal"
      title="Terms of Service"
      updated="January 2026"
      sections={[
        { heading: "Acceptance of terms", body: "By using this demo website you agree, in general terms, to use it lawfully and respectfully. This is template copy for demonstration." },
        { heading: "Donations", body: "Donations described here are illustrative. In a real deployment, terms would describe processing, refunds and receipts for contributions." },
        { heading: "Content", body: "Text and images in this demo reproduce the layout of a template for technical purposes and should be replaced with your own content." },
        { heading: "Limitation of liability", body: "A real policy would set out the limits of the organization's liability and the governing law for any disputes." },
      ]}
    />
  );
}
