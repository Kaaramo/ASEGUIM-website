import Link from "next/link";
import Image from "next/image";
import { Pill } from "@/components/Pill";
import { FOOTER } from "@/data/site";

const SOCIAL_PATHS: Record<string, string> = {
  Facebook: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z",
  Instagram:
    "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3 13a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v8zm-7-9a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.5-8.5a1 1 0 11-2 0 1 1 0 012 0z",
  X: "M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L4 21H1l7.5-8.6L0.6 3H7l4.6 5.6L17.5 3z",
  LinkedIn:
    "M6.94 6a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.3 8.5h3.27V21H3.3V8.5zM9.1 8.5h3.13v1.7h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.92 2.18 3.92 5v6.5h-3.27v-5.76c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.21 1.5-2.21 3.04V21H9.1V8.5z",
};

function SocialIcon({ name }: { name: keyof typeof SOCIAL_PATHS | string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d={SOCIAL_PATHS[name]} />
    </svg>
  );
}

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-cream/60">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-cream/90 transition-colors hover:text-yellow">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIALS = ["Facebook", "Instagram", "X", "LinkedIn"];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-careloop py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_auto_auto_auto]">
          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:contents">
            <Column title="Get Involved" links={FOOTER.getInvolved} />
            <Column title="Learn More" links={FOOTER.learnMore} />
            <Column title="Policies & Terms" links={FOOTER.policies} />
          </div>

          {/* Donation panel */}
          <div className="rounded-[1.75rem] bg-green-700 p-8 lg:w-[360px]">
            <h3 className="font-display text-3xl leading-tight text-cream">
              Make a donation, make a change!
            </h3>
            <p className="mt-3 text-sm text-cream/80">
              Donations start from $20. Choose a one-time gift or a monthly contribution.
            </p>
            <Pill href="/donation" variant="orange" size="md" arrow className="mt-6">
              donate now
            </Pill>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="text-sm font-bold uppercase tracking-wide text-cream/60">
            Follow us on social media
          </span>
          <div className="flex gap-3">
            {SOCIALS.map((label) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-orange"
              >
                <SocialIcon name={label} />
              </Link>
            ))}
          </div>
        </div>

        {/* Wordmark + copyright */}
        <div className="mt-14 border-t border-cream/15 pt-10">
          <Image
            src="/images/logo-wordmark.svg"
            alt="Careloop"
            width={561}
            height={93}
            className="h-auto w-full max-w-[760px] opacity-90 brightness-0 invert"
          />
          <p className="mt-8 text-sm text-cream/60">
            Copyright © 2026 Careloop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
