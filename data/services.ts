import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "love-reading",
    category: "reading",
    name: {
      es: "Lectura de amor",
      en: "Love Reading",
    },
    shortDescription: {
      es: "Descubre qué siente esa persona, la conexión entre ustedes y los caminos posibles.",
      en: "Discover what that person feels, the connection between you, and the possible paths ahead.",
    },
    details: {
      es: "Lectura enfocada en vínculos afectivos, emociones, energía compartida y posibilidades dentro de la conexión. Incluye uso de oráculo como apoyo intuitivo.",
      en: "A reading focused on emotional bonds, shared energy, and possible outcomes within the connection. Includes oracle support for deeper intuitive guidance.",
    },
    price: {
      crc: 7000,
      usd: 15,
    },
    duration: {
      min: 15,
      max: 25,
    },
  },
  {
    id: "general-reading",
    category: "reading",
    name: {
      es: "Lectura general",
      en: "General Reading",
    },
    shortDescription: {
      es: "Panorama completo de tu energía, bloqueos, situación actual y lo que viene.",
      en: "A complete overview of your energy, blockages, current situation, and what may be coming.",
    },
    details: {
      es: "Ideal para quienes buscan una visión amplia sobre diferentes áreas de su vida. Permite observar energía presente, retos y mensajes importantes.",
      en: "Ideal for those seeking a broader view of different areas of life. Helps reveal current energy, challenges, and important messages.",
    },
    price: {
      crc: 8000,
      usd: 17,
    },
    duration: {
      min: 20,
      max: 30,
    },
  },
  {
    id: "specific-question",
    category: "reading",
    name: {
      es: "Pregunta específica",
      en: "Specific Question",
    },
    shortDescription: {
      es: "Respuesta clara y enfocada a una sola pregunta puntual.",
      en: "A clear and focused answer to one specific question.",
    },
    details: {
      es: "Lectura breve para una duda concreta. También puede solicitarse en formato de dos preguntas.",
      en: "A short reading for one specific concern. It can also be requested as a two-question format.",
    },
    price: {
      crc: 3000,
      usd: 6,
    },
    duration: {
      min: 5,
      max: 10,
    },
  },
  {
    id: "intuitive-premium",
    category: "reading",
    featured: true,
    name: {
      es: "Lectura intuitiva personalizada premium",
      en: "Premium Personalized Intuitive Reading",
    },
    shortDescription: {
      es: "Conexión profunda con tu situación, mensajes del oráculo y orientación más detallada.",
      en: "A deeper connection to your situation with oracle messages and more detailed guidance.",
    },
    details: {
      es: "Servicio estrella de Magia Conciente. Diseñado para profundizar en tu caso de forma más intuitiva, personalizada y extensa, con enfoque espiritual y orientación clara.",
      en: "Magia Conciente’s signature service. Designed to explore your case in a deeper, more intuitive, personalized, and detailed way, with spiritual focus and clear guidance.",
    },
    price: {
      crc: 10000,
      usd: 22,
    },
    duration: {
      min: 30,
      max: 45,
    },
  },
  {
    id: "abundance-ritual",
    category: "ritual",
    name: {
      es: "Ritual de abundancia",
      en: "Abundance Ritual",
    },
    shortDescription: {
      es: "Enfocado en atraer dinero, oportunidades y apertura de caminos.",
      en: "Focused on attracting money, opportunities, and opening new paths.",
    },
    details: {
      es: "Trabajo energético orientado a desbloquear estancamientos relacionados con prosperidad, movimiento económico y expansión personal.",
      en: "An energetic practice designed to help release blockages around prosperity, financial movement, and personal expansion.",
    },
    price: {
      crc: 10000,
      usd: 22,
    },
    duration: {
      min: 20,
      max: 30,
    },
  },
  {
    id: "love-ritual",
    category: "ritual",
    name: {
      es: "Ritual de amor",
      en: "Love Ritual",
    },
    shortDescription: {
      es: "Enfocado en atraer amor, fortalecer amor propio o sanar relaciones.",
      en: "Focused on attracting love, strengthening self-love, or healing relationships.",
    },
    details: {
      es: "Ritual orientado a energía amorosa y armonización afectiva. No se realizan amarres ni prácticas que interfieran con el libre albedrío.",
      en: "A ritual centered on loving energy and emotional harmony. No bindings or practices that interfere with free will are performed.",
    },
    price: {
      crc: 10000,
      usd: 22,
    },
    duration: {
      min: 20,
      max: 30,
    },
  },
  {
    id: "healing-ritual",
    category: "ritual",
    name: {
      es: "Ritual de sanación personal",
      en: "Personal Healing Ritual",
    },
    shortDescription: {
      es: "Trabajo energético orientado a bienestar, equilibrio y sanación interior.",
      en: "Energetic work focused on well-being, balance, and inner healing.",
    },
    details: {
      es: "Pensado para quienes desean enfocarse en procesos de liberación, estabilidad emocional y reconexión personal desde una mirada espiritual.",
      en: "Created for those who wish to focus on release, emotional stability, and inner reconnection from a spiritual perspective.",
    },
    price: {
      crc: 10000,
      usd: 22,
    },
    duration: {
      min: 20,
      max: 30,
    },
  },
  {
    id: "reading-plus-ritual",
    category: "combo",
    name: {
      es: "Lectura + ritual",
      en: "Reading + Ritual",
    },
    shortDescription: {
      es: "Experiencia combinada con lectura personalizada y trabajo energético enfocado.",
      en: "A combined experience with a personalized reading and focused energetic work.",
    },
    details: {
      es: "Una opción más completa para quienes desean recibir guía espiritual y, además, acompañarla con un trabajo energético alineado a su situación.",
      en: "A more complete option for those who want spiritual guidance along with energetic work aligned to their situation.",
    },
    price: {
      crc: 18000,
      usd: 40,
    },
    duration: {
      min: 35,
      max: 45,
    },
  },
];