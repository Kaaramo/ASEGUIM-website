"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Pill } from "@/components/Pill";
import { NAV } from "@/data/aseguim";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      {/* Bandeau d'annonce — reste en haut pendant le défilement */}
      <div className="fixed inset-x-0 top-0 z-50 bg-ink text-cream">
        <div className="container-careloop flex h-10 items-center justify-center gap-2 text-center text-[0.8rem] font-medium">
          <span className="truncate">La plateforme de référence des étudiants guinéens au Maroc</span>
          <Link href="/adhesion" className="shrink-0 underline underline-offset-2 hover:text-yellow">
            Adhérer
          </Link>
        </div>
      </div>

      {/* Navigation — défile avec la page (non fixe) */}
      <nav className="container-careloop mt-10 flex items-center justify-between py-4">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-[0.95rem] font-semibold text-ink/80 transition-colors hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Pill href="/don" variant="outline" size="sm">
            Faire un don
          </Pill>
          <Pill href="/adhesion" variant="orange" size="sm">
            Adhérer
          </Pill>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full bg-ink text-cream lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="container-careloop lg:hidden">
          <div className="rounded-3xl bg-cream p-6 shadow-[0_10px_30px_rgba(17,42,32,0.15)]">
            <ul className="flex flex-col gap-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="text-lg font-semibold text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <Pill href="/don" variant="outline" size="md" className="w-full">
                Faire un don
              </Pill>
              <Pill href="/adhesion" variant="orange" size="md" className="w-full">
                Adhérer
              </Pill>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
