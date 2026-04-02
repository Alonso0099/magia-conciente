import { whatsappNumber } from "@/data/booking";

export default function WhatsAppFloat() {
  const message =
    "Hola, me gustaría recibir más información sobre los servicios de Magia Conciente.";
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[var(--accent)] text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:opacity-95"
    >
      <span className="text-xl">✦</span>
    </a>
  );
}