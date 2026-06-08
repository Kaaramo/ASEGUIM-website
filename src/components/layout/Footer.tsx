import Link from "next/link";
import Image from "next/image";
import { Pill } from "@/components/Pill";
import { FOOTER } from "@/data/site";

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

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-careloop py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-2xl font-semibold leading-snug">
              Building brighter, safer futures — together.
            </p>
            <Pill href="/donation" variant="orange" size="md" arrow className="mt-6">
              donate now
            </Pill>
          </div>
          <Column title="Get Involved" links={FOOTER.getInvolved} />
          <Column title="Learn More" links={FOOTER.learnMore} />
          <Column title="Policies & Terms" links={FOOTER.policies} />
        </div>

        <div className="mt-16 border-t border-cream/15 pt-10">
          <Image
            src="/images/logo-wordmark.svg"
            alt="Careloop"
            width={561}
            height={93}
            className="h-auto w-full max-w-[720px] opacity-95 invert"
          />
          <p className="mt-8 text-sm text-cream/60">
            Copyright © 2026 Careloop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
