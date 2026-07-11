import { Service } from "@/types/service";
import ButtonLink from "@/components/ui/ButtonLink";

type ServiceCardProps = {
  service: Service;
  locale?: "es" | "en";
  currency?: "crc" | "usd";
};

export default function ServiceCard({
  service,
  locale = "es",
  currency = "crc",
}: ServiceCardProps) {
  const price =
    currency === "crc"
      ? `₡${service.price.crc.toLocaleString("es-CR")}`
      : `$${service.price.usd}`;

  const duration = `${service.duration.min} - ${service.duration.max} min`;

  return (
    <article className="relative rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_0_40px_var(--glow)]">
      {service.featured && (
        <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent-soft)]">
          {locale === "es" ? "Servicio estrella" : "Featured Service"}
        </span>
      )}

      <div className="space-y-4">
        <div>
          <h3 className="text-3xl leading-tight">
            {service.name[locale]}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted-soft)]">
            {duration}
          </p>
        </div>

        <p className="text-base leading-7 text-[var(--muted)]">
          {service.shortDescription[locale]}
        </p>

        <p className="text-sm leading-7 text-[var(--muted-soft)]">
          {service.details[locale]}
        </p>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl text-[var(--accent-soft)]">
            {price}
          </p>

          <ButtonLink href="/agenda">
            {locale === "es" ? "Reservar" : "Book Now"}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
