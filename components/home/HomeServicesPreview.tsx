import SectionIntro from "@/components/shared/SectionIntro";
import ButtonLink from "@/components/ui/ButtonLink";
import { services } from "@/data/services";

export default function HomeServicesPreview() {
  const featuredServices = services.filter((service) => service.featured).slice(0, 1);
  const otherServices = services.filter((service) => !service.featured).slice(0, 3);

  const previewServices = [...featuredServices, ...otherServices];

  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Servicios destacados"
        title="Experiencias espirituales diseñadas con intención"
        description="Lecturas y rituales pensados para ofrecer claridad, dirección y acompañamiento desde una experiencia intuitiva, cuidada y profesional."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {previewServices.map((service) => (
          <article
            key={service.id}
            className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_0_40px_var(--glow)]"
          >
            {service.featured && (
              <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                Servicio estrella
              </span>
            )}

            <h3 className="text-2xl leading-tight sm:text-3xl">{service.name.es}</h3>

            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              ₡{service.price.crc.toLocaleString("es-CR")} · {service.duration.min}-{service.duration.max} min
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              {service.shortDescription.es}
            </p>
          </article>
        ))}
      </div>

      <div>
        <ButtonLink href="/servicios" variant="secondary">
          Ver todos los servicios
        </ButtonLink>
      </div>
    </section>
  );
}
