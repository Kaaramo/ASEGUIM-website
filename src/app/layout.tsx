import type { Metadata } from "next";
import { Bayon, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  metadataBase: new URL("https://aseguim.org"),
  title: "ASEGUIM — Association des Stagiaires et Étudiants Guinéens au Maroc",
  description:
    "L'ASEGUIM est le pont d'excellence entre la réussite académique et l'épanouissement culturel des étudiants guinéens au Maroc. Depuis 1981.",
  icons: { icon: "/aseguim/logo.jpeg" },
  openGraph: {
    title: "ASEGUIM — Façonnons l'Avenir Ensemble",
    description: "La plateforme de référence des étudiants guinéens au Maroc.",
    images: ["/aseguim/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bayon.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
