import SectionIntro from "@/components/shared/SectionIntro";
import ButtonLink from "@/components/ui/ButtonLink";
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
        <ButtonLink href="/testimonios" variant="secondary">
          Ver más testimonios
        </ButtonLink>
      </div>
    </section>
  );
}
