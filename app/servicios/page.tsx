"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import TogglePill from "@/components/ui/TogglePill";
import { services } from "@/data/services";

type Locale = "es" | "en";
type Currency = "crc" | "usd";

export default function ServiciosPage() {
  const [locale, setLocale] = useState<Locale>("es");
  const [currency, setCurrency] = useState<Currency>("crc");

  const readings = useMemo(
    () => services.filter((service) => service.category === "reading"),
    []
  );

  const rituals = useMemo(
    () => services.filter((service) => service.category === "ritual"),
    []
  );

  const combos = useMemo(
    () => services.filter((service) => service.category === "combo"),
    []
  );

  const copy = {
    es: {
      eyebrow: "Servicios y precios",
      title: "Experiencias espirituales para cada intención",
      intro:
        "Cada servicio de Magia Consciente está pensado para brindar guía, claridad y acompañamiento espiritual desde una experiencia cuidada, intuitiva y profesional.",
      readingsTitle: "Lecturas",
      readingsText:
        "Espacios de orientación intuitiva para comprender mejor tu situación, energía y caminos posibles.",
      ritualsTitle: "Rituales",
      ritualsText:
        "Trabajos energéticos enfocados en intención, movimiento y armonización.",
      combosTitle: "Experiencia completa",
      combosText:
        "Una experiencia más profunda para quienes desean guía y acompañamiento energético en una sola sesión.",
      languageLabel: "Idioma",
      currencyLabel: "Moneda",
    },
    en: {
      eyebrow: "Services and pricing",
      title: "Spiritual experiences for every intention",
      intro:
        "Each Magia Consciente service is designed to offer guidance, clarity, and spiritual support through a thoughtful, intuitive, and professional experience.",
      readingsTitle: "Readings",
      readingsText:
        "Intuitive guidance spaces to better understand your situation, energy, and possible paths ahead.",
      ritualsTitle: "Rituals",
      ritualsText:
        "Energetic practices focused on intention, movement, and harmony.",
      combosTitle: "Complete experience",
      combosText:
        "A deeper experience for those seeking both spiritual guidance and energetic support in one session.",
      languageLabel: "Language",
      currencyLabel: "Currency",
    },
  }[locale];

  return (
    <section className="space-y-16">
      <PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro}>
        <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row">
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

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              {copy.currencyLabel}
            </span>
            <TogglePill
              value={currency}
              onChange={setCurrency}
              options={[
                { value: "crc", label: "CRC" },
                { value: "usd", label: "USD" },
              ]}
            />
          </div>
        </div>
      </PageHero>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl">{copy.readingsTitle}</h2>
          <p className="text-[var(--muted-soft)]">{copy.readingsText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {readings.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              currency={currency}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl">{copy.ritualsTitle}</h2>
          <p className="text-[var(--muted-soft)]">{copy.ritualsText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {rituals.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              currency={currency}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl">{copy.combosTitle}</h2>
          <p className="text-[var(--muted-soft)]">{copy.combosText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {combos.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              currency={currency}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
