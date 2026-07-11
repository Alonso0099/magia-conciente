import SectionIntro from "@/components/shared/SectionIntro";

export default function HomeSocials() {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Redes sociales"
        title="Conecta también a través de Instagram y Facebook"
        description="Explora contenido, novedades, publicaciones y presencia de marca en las plataformas sociales de Magia Consciente."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <a
          href="https://www.instagram.com/magia_consciente?igsh=d2dzNXZhaG1udHRn&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl border border-white/10 bg-[var(--card)] p-8 shadow-[0_0_40px_var(--glow)] transition hover:bg-[var(--card-strong)]"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
            Instagram
          </p>
          <h3 className="mt-3 text-4xl">
            @magia_consciente
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </h3>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Descubre publicaciones, historias y una presencia visual alineada con la esencia mística y elegante de la marca.
          </p>
        </a>

        <a
          href="https://www.facebook.com/share/1R7c15CiZo/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl border border-white/10 bg-[var(--card)] p-8 shadow-[0_0_40px_var(--glow)] transition hover:bg-[var(--card-strong)]"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
            Facebook
          </p>
          <h3 className="mt-3 text-4xl">
            Magia Consciente
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </h3>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Sigue la marca también en Facebook para conocer novedades, actualizaciones y contenido complementario.
          </p>
        </a>
      </div>
    </section>
  );
}
