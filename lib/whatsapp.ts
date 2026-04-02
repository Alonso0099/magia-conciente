type BuildWhatsAppMessageParams = {
  locale: "es" | "en";
  serviceName: string;
  date: string;
  time: string;
};

export function buildWhatsAppMessage({
  locale,
  serviceName,
  date,
  time,
}: BuildWhatsAppMessageParams) {
  const rawMessage =
    locale === "es"
      ? `Hola, quiero agendar una sesión con Magia Conciente.

Servicio: ${serviceName}
Fecha: ${date}
Hora: ${time}`
      : `Hello, I would like to book a session with Magia Conciente.

Service: ${serviceName}
Date: ${date}
Time: ${time}`;

  return encodeURIComponent(rawMessage);
}