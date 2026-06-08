import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/aseguim";

/** ASEGUIM logo: round mark + wordmark. `tone="cream"` for dark backgrounds. */
export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="ASEGUIM — accueil">
      <span className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70">
        <Image src={SITE.logo} alt="ASEGUIM" fill className="object-cover" sizes="40px" priority />
      </span>
      <span className="leading-tight">
        <span className={cn("block font-display text-xl tracking-wide", tone === "cream" ? "text-cream" : "text-ink")}>
          ASEGUIM
        </span>
        <span className={cn("block text-[0.65rem] font-semibold uppercase tracking-wider", tone === "cream" ? "text-cream/60" : "text-green-700")}>
          Maroc
        </span>
      </span>
    </Link>
  );
}
