"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Pill } from "@/components/ui/Pill";
import { NAV, CONTACT } from "@/data/aseguim";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  // Sur l'accueil, la nav mobile est posée sur la vidéo de la bannière :
  // wordmark en cream sur mobile, ink dès qu'on repasse sur fond crème (≥ sm).
  const onHome = usePathname() === "/";

  return (
    <header className="relative z-40">
      {/* Bandeau de coordonnées — reste en haut pendant le défilement */}
      <div className="fixed inset-x-0 top-0 z-50 bg-ink text-cream">
        <div className="container-careloop flex h-9 items-center justify-center gap-3 overflow-hidden text-[0.7rem] font-medium sm:h-10 sm:gap-7 sm:text-[0.78rem]">
          <span className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="size-3.5 shrink-0" />
            <span>{CONTACT.adresse}</span>
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex min-w-0 items-center gap-1.5 hover:text-yellow"
          >
            <Mail className="size-3.5 shrink-0" />
            <span className="max-w-[38vw] truncate sm:max-w-none">{CONTACT.email}</span>
          </a>
          <a
            href={`tel:${CONTACT.telephone.replace(/[^+\d]/g, "")}`}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap hover:text-yellow"
          >
            <Phone className="size-3.5 shrink-0" />
            <span>{CONTACT.telephone}</span>
          </a>
        </div>
      </div>

      {/* Navigation — défile avec la page (non fixe) */}
      <nav className="container-careloop relative z-40 mt-9 flex items-center justify-between py-4 sm:mt-10">
        <Logo wordmarkClassName={onHome ? "text-cream sm:text-ink" : undefined} />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <li key={item.href} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[0.95rem] font-semibold text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <ul className="invisible absolute left-0 top-full min-w-[13rem] rounded-2xl bg-white p-2 opacity-0 shadow-[0_10px_30px_rgba(17,42,32,0.15)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-cream hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.95rem] font-semibold text-ink/80 transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ),
          )}
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
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileTeamOpen((v) => !v)}
                      className="flex w-full items-center justify-between text-lg font-semibold text-ink"
                    >
                      {item.label}
                      <ChevronDown className={`size-4 transition-transform ${mobileTeamOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileTeamOpen && (
                      <ul className="mt-3 flex flex-col gap-3 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="text-base font-semibold text-ink/70"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)} className="text-lg font-semibold text-ink">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
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
