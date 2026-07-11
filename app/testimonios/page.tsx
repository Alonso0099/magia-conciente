"use client";

import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import TogglePill from "@/components/ui/TogglePill";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

type Locale = "es" | "en";

export default function TestimoniosPage() {
  const [locale, setLocale] = useState<Locale>("es");

  const copy = {
    es: {
      eyebrow: "Testimonios",
      title: "Experiencias compartidas por quienes han confiado en Magia Consciente",
      intro:
        "Cada experiencia es distinta, pero todas nacen desde la intención de brindar claridad, acompañamiento y una atención espiritual cuidada.",
      languageLabel: "Idioma",
    },
    en: {
      eyebrow: "Testimonials",
      title: "Experiences shared by those who have trusted Magia Consciente",
      intro:
        "Each experience is different, but all are rooted in the intention to provide clarity, support, and a thoughtful spiritual experience.",
      languageLabel: "Language",
    },
  }[locale];

  return (
    <section className="space-y-12">
      <PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro}>
        <div className="flex justify-center pt-2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              {copy.languageLabel}
            </span>

            <TogglePill
              value={locale}
              onChange={setLocale}
              options={[
                { value: "es", label: "ES" },
                { value: "en", label: "EN" },
              ]}
            />
          </div>
        </div>
      </PageHero>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
