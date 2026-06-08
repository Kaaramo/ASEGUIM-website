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
  metadataBase: new URL("https://careloop.example.com"),
  title: "Careloop — Non Profit Organization",
  description:
    "Careloop is a non-profit organization dedicated to creating lasting change through food security, healthcare access, education and disaster relief.",
  icons: { icon: "/seo/favicon-1.png" },
  openGraph: {
    title: "Careloop — Non Profit Organization",
    description: "Building brighter, safer futures through consistent community care.",
    images: ["/seo/og.png"],
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
        {/* Offset for fixed announcement bar (40px) + nav (~72px) */}
        <main className="pt-[7.5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
