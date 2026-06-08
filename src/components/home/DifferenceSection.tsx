import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ICONS } from "@/components/icons";
import { CONTRIBUTIONS } from "@/data/site";

export function DifferenceSection() {
  return (
    <section className="section-y">
      <div className="container-careloop">
        <SectionHeading
          align="center"
          tag="Get involved"
          title="Ways you can make a difference"
          text="Creating meaningful change is a shared effort — there's a place for everyone."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTRIBUTIONS.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal key={c.title} delay={(i % 3) * 90}>
                <article className="h-full rounded-3xl bg-white p-8 shadow-[0_2px_20px_rgba(17,42,32,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid size-14 place-items-center rounded-2xl bg-cream text-orange">
                    {Icon ? <Icon className="size-7" /> : null}
                  </span>
                  <h3 className="mt-6 font-sans text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-3 text-green-600">{c.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
