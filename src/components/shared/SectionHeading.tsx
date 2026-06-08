import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Eyebrow tag + large Bayon heading, with optional supporting text. */
export function SectionHeading({
  tag,
  title,
  text,
  align = "left",
  className,
  tone = "ink",
}: {
  tag?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "ink" | "cream";
}) {
  const isCream = tone === "cream";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {tag && (
        <Reveal>
          <span
            className={cn(
              "inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider",
              isCream ? "bg-cream/15 text-cream" : "bg-ink/5 text-green-700",
            )}
          >
            {tag}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-5 font-display text-[clamp(2.25rem,5vw,5rem)] leading-[0.96]",
            isCream ? "text-cream" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={150}>
          <p className={cn("mt-5 text-lg", isCream ? "text-cream/80" : "text-green-600")}>{text}</p>
        </Reveal>
      )}
    </div>
  );
}
