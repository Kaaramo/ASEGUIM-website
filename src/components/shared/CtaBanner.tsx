import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";

/** Decorative 8-petal "spark" flower used as a Framer-style accent. */
function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="currentColor">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx="50" cy="22" rx="11" ry="24" transform={`rotate(${i * 45} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="12" />
    </svg>
  );
}

/** Full-width call-to-action banner (cream with decorative sparks) reused across pages. */
export function CtaBanner({
  title = "Want to make a difference in your community?",
  text = "Creating meaningful change is a shared effort. Whether through time, skills or financial support — there's a place for you.",
  ctaLabel = "support us",
  ctaHref = "/donation",
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-careloop relative overflow-hidden rounded-[2rem] bg-white px-6 py-20 text-center sm:py-28">
        <Flower className="pointer-events-none absolute left-[8%] top-1/2 hidden size-12 -translate-y-1/2 text-orange sm:block" />
        <Flower className="pointer-events-none absolute right-[8%] top-1/2 hidden size-12 -translate-y-1/2 text-green-700 sm:block" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mx-auto font-display text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98] text-ink">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-green-600">{text}</p>
          </Reveal>
          <Reveal delay={180}>
            <Pill href={ctaHref} variant="orange" size="lg" arrow className="mt-8">
              {ctaLabel}
            </Pill>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
