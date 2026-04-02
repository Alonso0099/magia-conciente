import SectionIntro from "@/components/shared/SectionIntro";

const steps = [
  {
    number: "01",
    title: "Elige tu servicio",
    text: "Selecciona la lectura o ritual que mejor se alinee con tu situación, intención o necesidad actual.",
  },
  {
    number: "02",
    title: "Escoge fecha y hora",
    text: "Reserva tu espacio dentro del horario disponible y envía tu solicitud directamente por WhatsApp.",
  },
  {
    number: "03",
    title: "Recibe tu experiencia",
    text: "La sesión se desarrolla de forma virtual, con una atención reservada, cuidada y enfocada en tu caso.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Cómo funciona"
        title="Una experiencia simple, cuidada y espiritual"
        description="Cada paso está pensado para que la reserva y el acompañamiento se sientan claros, fluidos y bien guiados."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)]"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              {step.number}
            </p>

            <h3 className="mt-3 text-3xl">{step.title}</h3>

            <p className="mt-4 leading-7 text-white/70">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}