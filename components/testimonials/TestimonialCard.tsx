import { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  locale?: "es" | "en";
};

export default function TestimonialCard({
  testimonial,
  locale = "es",
}: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)]">
      <div className="space-y-4">
        <p className="text-lg leading-8 text-white/75">
          “{testimonial.text[locale]}”
        </p>

        <div className="pt-2">
          <p className="text-base text-[var(--accent-soft)]">{testimonial.name}</p>
          <p className="text-sm uppercase tracking-[0.18em] text-white/45">
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}