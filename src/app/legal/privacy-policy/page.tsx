import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy — Careloop" };

export default function PrivacyPolicy() {
  return (
    <LegalPage
      tag="Legal"
      title="Privacy Policy"
      updated="January 2026"
      sections={[
        { heading: "Overview", body: "This policy explains, in general terms, what information a non-profit organization like Careloop might collect and how it could be used. It is template copy for this demo." },
        { heading: "Information we collect", body: "Typical examples include the name, email and payment details you provide when donating or volunteering, plus basic analytics about how the site is used." },
        { heading: "How information is used", body: "Information would be used to process donations, coordinate volunteers, send updates you opt into, and improve the experience of the site." },
        { heading: "Your choices", body: "You would be able to request access to, correction of, or deletion of your data, and to unsubscribe from communications at any time." },
      ]}
    />
  );
}
