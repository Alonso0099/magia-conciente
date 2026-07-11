import Link from "next/link";
import SectionIntro from "@/components/shared/SectionIntro";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function HomeTestimonialsPreview() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Testimonios"
        title="Experiencias compartidas por clientes"
        description="La confianza también se construye a través de la experiencia de quienes ya han vivido una sesión con Magia Consciente."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            locale="es"
          />
        ))}
      </div>

      <div>
        <Link
          href="/testimonios"
          className="inline-flex rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10"
        >
          Ver más testimonios
        </Link>
      </div>
    </section>
  );
}
