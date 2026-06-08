"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TALENTS } from "@/data/aseguim";
import { cn } from "@/lib/utils";

const CATS = ["Tous", "Académique", "Scientifique", "Culturel"] as const;
const CAT_COLOR: Record<string, string> = {
  Académique: "bg-orange",
  Scientifique: "bg-green-700",
  Culturel: "bg-yellow text-ink",
};

export function TalentsGrid() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const list = cat === "Tous" ? TALENTS : TALENTS.filter((t) => t.categorie === cat);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              cat === c ? "bg-ink text-cream" : "bg-white text-ink/70 hover:bg-ink/10",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <Reveal key={t.nom} delay={(i % 3) * 70}>
            <article className="flex h-full flex-col rounded-3xl bg-white p-7">
              <div className="flex items-center justify-between">
                <span className={cn("rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white", CAT_COLOR[t.categorie] ?? "bg-ink")}>
                  {t.categorie}
                </span>
                <span className="text-sm font-semibold text-green-600">{t.annee}</span>
              </div>
              <span className="mt-6 grid size-12 place-items-center rounded-2xl bg-cream text-orange">
                <GraduationCap className="size-6" />
              </span>
              <h3 className="mt-4 font-sans text-lg font-bold text-ink">{t.nom}</h3>
              <p className="mt-2 flex-1 text-sm text-green-600">{t.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
