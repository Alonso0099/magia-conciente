export default function SobrePage() {
  return (
    <section className="space-y-16">
      <div className="space-y-5 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          Sobre Magia Conciente
        </p>

        <h1 className="text-5xl md:text-6xl">
          Un espacio espiritual de guía, intuición y claridad
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          Magia Conciente nace como un espacio dedicado a la orientación espiritual,
          la reflexión intuitiva y el acompañamiento energético desde una experiencia
          cuidada, profesional y reservada.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_40px_rgba(170,100,255,0.08)]">
          <h2 className="text-4xl">La esencia de la marca</h2>
          <p className="mt-4 leading-8 text-white/72">
            Magia Conciente está pensada para quienes buscan una experiencia espiritual
            seria, estética y profundamente intuitiva. Cada lectura y cada ritual se
            trabajan con intención, cuidado y enfoque personalizado, manteniendo siempre
            una atmósfera de respeto, confidencialidad y sensibilidad energética.
          </p>
          <p className="mt-4 leading-8 text-white/72">
            La marca opera desde una identidad profesional y reservada, priorizando la
            conexión espiritual por encima de la exposición personal. El objetivo no es
            crear dependencia, sino ofrecer guía, claridad y herramientas simbólicas para
            acompañar procesos internos, emocionales y energéticos.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_40px_rgba(170,100,255,0.08)]">
          <h2 className="text-4xl">El tarot como herramienta</h2>
          <p className="mt-4 leading-8 text-white/72">
            El tarot ha sido utilizado a lo largo del tiempo como una herramienta simbólica
            de interpretación, introspección y orientación. Más allá de la predicción literal,
            sus imágenes, arquetipos y mensajes permiten observar situaciones desde otra
            perspectiva y abrir espacios de reflexión profunda.
          </p>
          <p className="mt-4 leading-8 text-white/72">
            En Magia Conciente, el tarot se integra como un canal intuitivo para explorar
            energías, bloqueos, emociones y caminos posibles, siempre desde un enfoque
            espiritual responsable y sin sustituir asesoría médica, psicológica, legal o
            financiera.
          </p>
        </article>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_40px_rgba(170,100,255,0.08)] md:p-10">
        <h2 className="text-4xl">Cómo se vive la experiencia</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              01
            </p>
            <h3 className="mt-3 text-2xl">Intención</h3>
            <p className="mt-3 leading-7 text-white/70">
              Cada servicio inicia con una intención clara, enfocada en tu situación,
              tu pregunta o el área de tu vida que deseas explorar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              02
            </p>
            <h3 className="mt-3 text-2xl">Interpretación</h3>
            <p className="mt-3 leading-7 text-white/70">
              Las lecturas y rituales se desarrollan desde una interpretación intuitiva,
              simbólica y energética, con atención cuidadosa a los matices de cada caso.
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              03
            </p>
            <h3 className="mt-3 text-2xl">Acompañamiento</h3>
            <p className="mt-3 leading-7 text-white/70">
              El resultado busca ofrecer claridad, dirección y contención espiritual,
              respetando siempre tu criterio personal y tu proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}