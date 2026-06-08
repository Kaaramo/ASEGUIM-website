import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Careloop wordmark logo, links home. `variant="wordmark"` uses the large footer mark. */
export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "wordmark";
}) {
  const src = variant === "wordmark" ? "/images/logo-wordmark.svg" : "/images/logo.svg";
  const width = variant === "wordmark" ? 561 : 148;
  const height = variant === "wordmark" ? 93 : 24;
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="Careloop home">
      <Image src={src} alt="Careloop" width={width} height={height} priority className="h-auto w-full" />
    </Link>
  );
}
