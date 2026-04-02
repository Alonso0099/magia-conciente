export const bookingHours = [
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
];

export const businessHours = {
  es: "Lunes a domingo · 5:00 PM a 12:00 AM · Hora de Costa Rica",
  en: "Monday to Sunday · 5:00 PM to 12:00 AM · Costa Rica time",
};
/*
  Aquí puedes bloquear horas por fecha.
  Formato de fecha: YYYY-MM-DD
*/
export const bookedSlotsByDate: Record<string, string[]> = {
//   "2026-04-10": ["7:00 PM", "9:00 PM"],
//   "2026-04-12": ["5:00 PM", "10:00 PM"],
//   "2026-04-15": ["7:00 PM", "9:00 PM"]
};
export const whatsappNumber = "50661506254";