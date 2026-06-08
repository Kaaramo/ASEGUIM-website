import { Reveal } from "@/components/Reveal";

/** Inner-page hero header: eyebrow tag + large Bayon title + optional subtitle. */
export function PageHeader({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="px-3 pt-3">
      <div className="overflow-hidden rounded-[2rem] bg-ink">
        <div className="container-careloop py-20 text-center sm:py-28">
          {tag && (
            <Reveal>
              <span className="inline-block rounded-full bg-cream/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cream">
                {tag}
              </span>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-cream text-[clamp(2.75rem,7vw,6rem)] leading-[0.96]">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={150}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">{subtitle}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
