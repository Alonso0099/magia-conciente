import ButtonLink from "@/components/ui/ButtonLink";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-16 shadow-[0_0_60px_rgba(170,100,255,0.10)] sm:px-6 md:px-10 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,120,255,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
          Disponible a partir del 1 de abril
        </p>

        <h1 className="max-w-4xl text-4xl leading-none sm:text-5xl md:text-7xl">
          Magia Consciente
        </h1>

        <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base md:text-lg">
          Un espacio de guía espiritual, intuición y claridad para quienes buscan
          respuestas, conexión energética y una experiencia mística elegante.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/agenda">Agendar sesión</ButtonLink>
          <ButtonLink href="/servicios" variant="secondary">
            Explorar servicios
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}