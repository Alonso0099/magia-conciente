import ButtonLink from "@/components/ui/ButtonLink";

export default function HomeFinalCta() {
  return (
   <section className="rounded-[2rem] border border-white/10 bg-[var(--card)] px-5 py-14 text-center shadow-[0_0_60px_rgba(170,100,255,0.10)] sm:px-6 md:px-10 md:py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl">
        Reserva tu experiencia espiritual
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
        Elige el servicio que mejor se alinee contigo y agenda tu sesión de forma rápida, clara y cuidada.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <ButtonLink href="/agenda">Agendar ahora</ButtonLink>
        <ButtonLink href="/servicios" variant="secondary">
          Ver servicios
        </ButtonLink>
      </div>
    </section>
  );
}
