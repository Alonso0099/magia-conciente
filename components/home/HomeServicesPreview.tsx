import Link from "next/link";
import SectionIntro from "@/components/shared/SectionIntro";
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
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)]"
          >
            {service.featured && (
              <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                Servicio estrella
              </span>
            )}

            <h3 className="text-2xl leading-tight sm:text-3xl">{service.name.es}</h3>

            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/45">
              ₡{service.price.crc.toLocaleString("es-CR")} · {service.duration.min}-{service.duration.max} min
            </p>

            <p className="mt-4 leading-7 text-white/70">
              {service.shortDescription.es}
            </p>
          </article>
        ))}
      </div>

      <div>
        <Link
          href="/servicios"
          className="inline-flex rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10"
        >
          Ver todos los servicios
        </Link>
      </div>
    </section>
  );
}