import type { Metadata } from "next";
import { Bayon, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/data/aseguim";

const bayon = Bayon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bayon",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ASEGUIM — Association des Stagiaires et Étudiants Guinéens au Maroc",
  description:
    "L'ASEGUIM est le pont d'excellence entre la réussite académique et l'épanouissement culturel des étudiants guinéens au Maroc. Depuis 1981.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ASEGUIM",
    title: "ASEGUIM — Façonnons l'Avenir Ensemble",
    description: "La plateforme de référence des étudiants guinéens au Maroc.",
    images: ["/aseguim/images/logo.jpeg"],
  },
};

/** Données structurées : aide Google à associer le logo officiel au site. */
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASEGUIM",
  alternateName: "Association des Stagiaires et Étudiants Guinéens au Maroc",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  foundingDate: "1981",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${bayon.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
