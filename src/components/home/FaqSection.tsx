"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS } from "@/data/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-y">
      <div className="container-careloop grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          tag="FAQ"
          title="Questions and answers"
          text="Everything you need to know about how Careloop works and where your support goes."
        />
        <div className="divide-y divide-ink/10">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-ink">{faq.question}</span>
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-full bg-ink text-cream transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    <Plus className="size-5" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden text-green-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
