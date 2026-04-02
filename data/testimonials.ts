export type Testimonial = {
  id: string;
  name: string;
  location: string;
  text: {
    es: string;
    en: string;
  };
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Andrea",
    location: "Costa Rica",
    text: {
      es: "La lectura fue muy clara y sentí que conectó muchísimo con lo que estaba viviendo. Me ayudó a ver mi situación desde otro lugar.",
      en: "The reading was very clear and felt deeply connected to what I was going through. It helped me see my situation from a different perspective.",
    },
  },
  {
    id: "t2",
    name: "Valeria",
    location: "San José",
    text: {
      es: "Me gustó mucho la forma en que se explicó todo. Se sintió profesional, sensible y muy bien guiado de principio a fin.",
      en: "I really loved the way everything was explained. It felt professional, sensitive, and very well guided from beginning to end.",
    },
  },
  {
    id: "t3",
    name: "Camila",
    location: "Estados Unidos",
    text: {
      es: "Fue una experiencia muy bonita. El mensaje llegó en el momento que más lo necesitaba y me dejó mucha tranquilidad.",
      en: "It was a beautiful experience. The message arrived at exactly the moment I needed it most and left me with a lot of peace.",
    },
  },
  {
    id: "t4",
    name: "Daniela",
    location: "Heredia",
    text: {
      es: "Sentí mucha dedicación en la lectura. No fue algo genérico, realmente parecía enfocado en mi caso y eso se agradece muchísimo.",
      en: "I felt a lot of care in the reading. It didn’t feel generic at all, it truly felt focused on my situation, and I appreciated that deeply.",
    },
  },
  {
    id: "t5",
    name: "María",
    location: "Alajuela",
    text: {
      es: "El ritual y la lectura juntos se sintieron como una experiencia muy completa. Me encantó el enfoque y la energía del servicio.",
      en: "The ritual and the reading together felt like a very complete experience. I loved the approach and the energy of the service.",
    },
  },
  {
    id: "t6",
    name: "Sofía",
    location: "Costa Rica",
    text: {
      es: "Todo se sintió muy respetuoso y bien cuidado. Me dio claridad sin hacerme sentir juzgada ni presionada.",
      en: "Everything felt very respectful and thoughtfully handled. It gave me clarity without making me feel judged or pressured.",
    },
  },
];