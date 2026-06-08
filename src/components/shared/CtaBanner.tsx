import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";

/** Full-width call-to-action banner reused across pages. */
export function CtaBanner({
  title = "Want to make a difference in your community?",
  text = "Creating meaningful change is a shared effort. Join us and help build a brighter, safer future.",
  ctaLabel = "support us",
  ctaHref = "/donation",
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="px-3 py-3">
      <div className="overflow-hidden rounded-[2rem] bg-orange">
        <div className="container-careloop py-16 text-center text-white sm:py-20">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-white/85">{text}</p>
          </Reveal>
          <Reveal delay={180}>
            <Pill href={ctaHref} variant="dark" size="lg" arrow className="mt-8">
              {ctaLabel}
            </Pill>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
