import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/aseguim";

/**
 * ASEGUIM logo: round mark + wordmark. `tone="cream"` for dark backgrounds.
 * `wordmarkClassName` lets callers override the wordmark colour responsively
 * (e.g. cream over the mobile hero video, ink on desktop).
 */
export function Logo({
  className,
  tone = "ink",
  wordmarkClassName,
}: {
  className?: string;
  tone?: "ink" | "cream";
  wordmarkClassName?: string;
}) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="ASEGUIM — accueil">
      <span className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70">
        <Image src={SITE.logo} alt="ASEGUIM" fill className="object-cover" sizes="40px" priority />
      </span>
      <span
        className={cn(
          "font-display text-xl tracking-wide",
          tone === "cream" ? "text-cream" : "text-ink",
          wordmarkClassName,
        )}
      >
        ASEGUIM
      </span>
    </Link>
  );
}
