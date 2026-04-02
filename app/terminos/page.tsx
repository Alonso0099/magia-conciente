export default function TerminosPage() {
  const sections = [
    {
      title: "1. Naturaleza del servicio",
      content:
        "Los servicios ofrecidos por Magia Conciente, incluyendo lecturas de tarot, rituales y orientación espiritual, son de carácter interpretativo, energético y espiritual. No sustituyen asesoría médica, psicológica, legal o financiera. El cliente reconoce y acepta que es el único responsable de sus decisiones y acciones.",
    },
    {
      title: "2. Reservas y pagos",
      content:
        "Todos los servicios deben ser pagados por adelantado para confirmar la solicitud. No se realizarán lecturas ni rituales sin confirmación de pago. El tiempo de entrega puede variar según la demanda y disponibilidad.",
    },
    {
      title: "3. Política de reembolsos",
      content:
        "No se realizan reembolsos una vez que el servicio ha sido entregado. Sin embargo, Magia Conciente se reserva el derecho de rechazar o cancelar un servicio antes de su ejecución, en cuyo caso se procederá con un reembolso completo o reprogramación, según corresponda.",
    },
    {
      title: "4. Tiempos de respuesta",
      content:
        "Las respuestas a preguntas del servicio pueden tardar hasta 24 horas. En situaciones excepcionales, pueden presentarse retrasos, los cuales serán debidamente informados.",
    },
    {
      title: "5. Puntualidad y cancelación de citas",
      content:
        "Se solicita al cliente estar disponible y atento en el horario acordado para la sesión. Si el cliente no responde dentro de los 15 minutos posteriores a la hora programada, la cita será cancelada automáticamente. En este caso, el servicio se considerará prestado en su totalidad, sin derecho a reembolso, debido a que el espacio fue previamente reservado.",
    },
    {
      title: "6. Confidencialidad",
      content:
        "Toda la información compartida por el cliente será tratada de manera privada y confidencial. Magia Conciente no divulgará datos personales sin el consentimiento previo del cliente.",
    },
    {
      title: "7. Responsabilidad",
      content:
        "El servicio brindado es una herramienta de orientación espiritual. No se garantizan resultados específicos, decisiones de terceros ni cambios en situaciones personales. El cliente es responsable del uso e interpretación de la información recibida.",
    },
    {
      title: "8. Restricciones del servicio",
      content:
        "No se realizarán consultas relacionadas con salud grave o diagnósticos médicos, muerte o temas relacionados, actividades ilegales, ni situaciones que vulneren la ética profesional del servicio.",
    },
    {
      title: "9. Conducta del cliente",
      content:
        "Se espera en todo momento una comunicación respetuosa. Cualquier comportamiento inapropiado, ofensivo o agresivo podrá resultar en cancelación inmediata del servicio y bloqueo de comunicación.",
    },
    {
      title: "10. Identidad y privacidad",
      content:
        "La identidad personal de la practicante de Magia Conciente se mantiene de carácter privado y confidencial. No existe obligación de revelar nombre legal, información personal ni ubicación exacta. El servicio opera bajo una identidad profesional.",
    },
    {
      title: "11. Acoso o comportamiento indebido",
      content:
        "Cualquier intento de acoso, intimidación, presión para obtener información personal o faltas de respeto resultará en la cancelación inmediata del servicio. En casos graves, se tomarán las medidas correspondientes, incluyendo el reporte a las autoridades competentes.",
    },
    {
      title: "12. Modificaciones",
      content:
        "Magia Conciente se reserva el derecho de modificar estos términos en cualquier momento, sin previo aviso.",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="space-y-5 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          Términos y condiciones
        </p>

        <h1 className="text-5xl md:text-6xl">
          Condiciones de uso y servicio
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          Al solicitar y pagar cualquiera de los servicios de Magia Conciente,
          el cliente confirma que ha leído, comprendido y aceptado estos términos.
        </p>
      </div>

      <div className="space-y-5">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)] md:p-8"
          >
            <h2 className="text-3xl">{section.title}</h2>
            <p className="mt-4 leading-8 text-white/72">{section.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}