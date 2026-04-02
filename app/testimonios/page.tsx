"use client";

import { useState } from "react";
import TogglePill from "@/components/ui/TogglePill";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

type Locale = "es" | "en";

export default function TestimoniosPage() {
  const [locale, setLocale] = useState<Locale>("es");

  const copy = {
    es: {
      eyebrow: "Testimonios",
      title: "Experiencias compartidas por quienes han confiado en Magia Conciente",
      intro:
        "Cada experiencia es distinta, pero todas nacen desde la intención de brindar claridad, acompañamiento y una atención espiritual cuidada.",
      languageLabel: "Idioma",
    },
    en: {
      eyebrow: "Testimonials",
      title: "Experiences shared by those who have trusted Magia Conciente",
      intro:
        "Each experience is different, but all are rooted in the intention to provide clarity, support, and a thoughtful spiritual experience.",
      languageLabel: "Language",
    },
  }[locale];

  return (
    <section className="space-y-12">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {copy.eyebrow}
        </p>

        <h1 className="text-5xl md:text-6xl">{copy.title}</h1>

        <p className="mx-auto max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          {copy.intro}
        </p>

        <div className="flex justify-center pt-2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
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
      </div>

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