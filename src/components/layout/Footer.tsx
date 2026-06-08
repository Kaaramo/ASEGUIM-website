import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Pill } from "@/components/Pill";
import { FOOTER, CONTACT, RESEAUX, BUREAUX_REGIONAUX, SITE } from "@/data/aseguim";

type FLink = { label: string; href: string; external?: boolean };

function Column({ title, links }: { title: string; links: FLink[] }) {
  return (
    <div>
      <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-cream/60">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-cream/90 transition-colors hover:text-yellow"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIAL_PATHS: Record<string, string> = {
  Facebook: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z",
  Instagram:
    "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3 13a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v8zm-7-9a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.5-8.5a1 1 0 11-2 0 1 1 0 012 0z",
  LinkedIn:
    "M6.94 6a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.3 8.5h3.27V21H3.3V8.5zM9.1 8.5h3.13v1.7h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.92 2.18 3.92 5v6.5h-3.27v-5.76c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.21 1.5-2.21 3.04V21H9.1V8.5z",
  WhatsApp:
    "M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0112 4zm4.5 11c-.2.6-1.2 1.1-1.7 1.1-.4 0-1 .1-3.3-.9-2.4-1-3.9-3.5-4-3.7-.1-.2-1-1.3-1-2.4s.6-1.7.8-1.9c.2-.2.4-.3.6-.3h.4c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.5 0 1z",
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-careloop py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_auto_auto_auto]">
          <div className="max-w-sm">
            <span className="font-display text-2xl tracking-wide text-cream">{SITE.nom}</span>
            <p className="mt-3 text-sm text-cream/70">{SITE.nomComplet}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-yellow" />
                <Link href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">
                  {CONTACT.adresse}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-yellow" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-yellow">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-yellow" />
                <a href={CONTACT.telLink} className="hover:text-yellow">{CONTACT.telephone}</a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {RESEAUX.map((r) => (
                <Link
                  key={r.nom}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.nom}
                  className="grid size-10 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-orange"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <path d={SOCIAL_PATHS[r.nom]} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <Column title="Commissions" links={FOOTER.commissions} />
          <Column title="Liens utiles" links={FOOTER.liensUtiles} />
          <Column title="Agir" links={FOOTER.agir} />
        </div>

        {/* Bureaux régionaux */}
        <div className="mt-12 border-t border-cream/15 pt-8">
          <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-cream/60">Bureaux régionaux</h4>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {BUREAUX_REGIONAUX.map((b) => (
              <Link key={b.ville} href={b.href} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-yellow">
                {b.ville}
              </Link>
            ))}
          </div>
        </div>

        {/* Wordmark + copyright */}
        <div className="mt-12 border-t border-cream/15 pt-10">
          <p className="font-display text-[clamp(3rem,12vw,9rem)] leading-none text-cream/95">ASEGUIM</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-cream/60">
            <span>© 2026 ASEGUIM. Tous droits réservés.</span>
            <Pill href="/devenir-partenaire" variant="orange" size="sm">
              Devenir partenaire
            </Pill>
          </div>
        </div>
      </div>
    </footer>
  );
}
