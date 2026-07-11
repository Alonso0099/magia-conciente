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
    <article className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_0_40px_var(--glow)]">
      <div className="space-y-4">
        <p className="text-lg leading-8 text-[var(--muted)]">
          &ldquo;{testimonial.text[locale]}&rdquo;
        </p>

        <div className="pt-2">
          <p className="text-base text-[var(--accent-soft)]">{testimonial.name}</p>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted-soft)]">
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}
