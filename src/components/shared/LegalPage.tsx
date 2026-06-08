import { PageHeader } from "@/components/shared/PageHeader";

type Section = { heading: string; body: string };

/** Generic legal/policy page layout with template placeholder copy. */
export function LegalPage({
  tag,
  title,
  updated,
  sections,
}: {
  tag: string;
  title: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHeader tag={tag} title={title} subtitle={`Dernière mise à jour : ${updated}`} />
      <section className="section-y">
        <div className="container-careloop max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-3xl text-ink">{s.heading}</h2>
              <p className="mt-4 leading-relaxed text-green-700">{s.body}</p>
            </div>
          ))}
          <p className="border-t border-ink/10 pt-8 text-sm text-green-600">
            Ce texte est fourni à titre indicatif et devra être validé par l&apos;ASEGUIM avant
            publication.
          </p>
        </div>
      </section>
    </>
  );
}
