"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/shared/PageHero";
import TogglePill from "@/components/ui/TogglePill";
import { services } from "@/data/services";
import {
  bookedSlotsByDate,
  bookingHours,
  businessHours,
  whatsappNumber,
} from "@/data/booking";
import { buildWhatsAppMessage } from "@/lib/whatsapp";

type Locale = "es" | "en";

export default function AgendaPage() {
    const [locale, setLocale] = useState<Locale>("es");
    const [selectedServiceId, setSelectedServiceId] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const selectedService = useMemo(
        () => services.find((service) => service.id === selectedServiceId),
        [selectedServiceId]
  );

  const bookedHoursForSelectedDate = selectedDate
    ? bookedSlotsByDate[selectedDate] || []
    : [];

  const copy = {
    es: {
      eyebrow: "Agenda tu sesión",
      title: "Reserva tu espacio de guía espiritual",
      intro:
        "Selecciona el servicio, la fecha y la hora que prefieras. Tu solicitud se enviará por WhatsApp para confirmar la reserva.",
      languageLabel: "Idioma",
      serviceLabel: "Servicio",
      servicePlaceholder: "Selecciona un servicio",
      dateLabel: "Fecha",
      timeLabel: "Hora",
      hoursTitle: "Horario de atención",
      reserveButton: "Reservar por WhatsApp",
      reserveDisabled: "Completa los datos para continuar",
      selectedSummary: "Resumen de tu solicitud",
      summaryService: "Servicio",
      summaryDate: "Fecha",
      summaryTime: "Hora",
      unavailable: "No disponible",
      unavailableHint:
        "Algunas horas pueden aparecer bloqueadas si ya fueron reservadas.",
    },
    en: {
      eyebrow: "Book your session",
      title: "Reserve your spiritual guidance session",
      intro:
        "Choose your service, date, and preferred time. Your request will be sent through WhatsApp to confirm the booking.",
      languageLabel: "Language",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service",
      dateLabel: "Date",
      timeLabel: "Time",
      hoursTitle: "Business hours",
      reserveButton: "Book via WhatsApp",
      reserveDisabled: "Complete the form to continue",
      selectedSummary: "Your booking summary",
      summaryService: "Service",
      summaryDate: "Date",
      summaryTime: "Time",
      unavailable: "Unavailable",
      unavailableHint:
        "Some time slots may appear blocked if they have already been reserved.",
    },
  }[locale];

  const whatsappHref = useMemo(() => {
    if (!selectedService || !selectedDate || !selectedTime) return "#";

    const serviceName = selectedService.name[locale];
    const message = buildWhatsAppMessage({
      locale,
      serviceName,
      date: selectedDate,
      time: selectedTime,
    });

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }, [locale, selectedService, selectedDate, selectedTime]);

  const isFormComplete = Boolean(selectedService && selectedDate && selectedTime);

  return (
    <section className="space-y-12">
      <PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro}>
        <div className="flex justify-center pt-2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              {copy.languageLabel}
            </span>
            <TogglePill
              value={locale}
              onChange={setLocale}
              options={[
                { value: "es", label: "ES" },
                { value: "en", label: "EN" },
              ]}
            />
          </div>
        </div>
      </PageHero>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_0_40px_var(--glow)] md:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="agenda-service"
                className="block text-sm uppercase tracking-[0.18em] text-[var(--muted-soft)]"
              >
                {copy.serviceLabel}
              </label>

              <select
                id="agenda-service"
                value={selectedServiceId}
                onChange={(event) => setSelectedServiceId(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]"
              >
                <option value="" className="bg-[var(--background-soft)]">
                  {copy.servicePlaceholder}
                </option>

                {services.map((service) => (
                  <option key={service.id} value={service.id} className="bg-[var(--background-soft)]">
                    {service.name[locale]}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
            <label
                htmlFor="agenda-date"
                className="block text-sm uppercase tracking-[0.18em] text-[var(--muted-soft)]"
            >
                {copy.dateLabel}
            </label>

            <div className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[var(--card-strong)] to-[var(--card)] px-4 py-3 transition hover:border-white/20 focus-within:border-[var(--accent)]">
                <span aria-hidden="true" className="block text-xs uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                {locale === "es" ? "Selecciona una fecha" : "Select a date"}
                </span>

                <span aria-hidden="true" className="mt-1 block text-white">
                {selectedDate
                    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
                        locale === "es" ? "es-CR" : "en-US",
                        {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        }
                    )
                    : locale === "es"
                    ? "Abrir calendario"
                    : "Open calendar"}
                </span>

                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-lg text-[var(--muted)]">
                📅
                </span>

                <input
                id="agenda-date"
                type="date"
                value={selectedDate}
                onChange={(event) => {
                    const newDate = event.target.value;
                    setSelectedDate(newDate);

                    const bookedHours = bookedSlotsByDate[newDate] || [];
                    if (bookedHours.includes(selectedTime)) {
                    setSelectedTime("");
                    }
                }}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
            </div>

            <p className="text-xs text-[var(--muted-soft)]">
                {locale === "es"
                ? "Haz clic en cualquier parte del campo para abrir el calendario."
                : "Click anywhere on the field to open the calendar."}
            </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <p className="block text-sm uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {copy.timeLabel}
                </p>

                <p className="text-xs text-[var(--muted-soft)]">
                  {copy.unavailableHint}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {bookingHours.map((hour) => {
                  const isSelected = selectedTime === hour;
                  const isBooked = bookedHoursForSelectedDate.includes(hour);

                  return (
                    <button
                      key={hour}
                      type="button"
                      onClick={() => {
                        if (!isBooked) {
                          setSelectedTime(hour);
                        }
                      }}
                      disabled={isBooked}
                      className={`rounded-2xl border px-4 py-3 text-sm transition ${
                        isBooked
                          ? "cursor-not-allowed border-white/5 bg-[var(--card)] text-[var(--muted-soft)] line-through decoration-white/30"
                          : isSelected
                          ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                          : "border-white/10 bg-white/5 text-[var(--muted)] hover:bg-white/10"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span>{hour}</span>
                        {isBooked && (
                          <span className="text-[10px] uppercase tracking-[0.16em]">
                            {copy.unavailable}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              <a
                href={isFormComplete ? whatsappHref : "#"}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm transition ${
                  isFormComplete
                    ? "bg-[var(--accent)] text-black hover:opacity-90"
                    : "cursor-not-allowed border border-white/10 bg-white/5 text-[var(--muted-soft)]"
                }`}
              >
                {isFormComplete ? copy.reserveButton : copy.reserveDisabled}
              </a>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_0_40px_var(--glow)]">
            <h2 className="text-3xl">{copy.hoursTitle}</h2>
            <p className="mt-3 text-[var(--muted)]">{businessHours[locale]}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_0_40px_var(--glow)]">
            <h2 className="text-3xl">{copy.selectedSummary}</h2>

            <div className="mt-5 space-y-4 text-[var(--muted)]">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {copy.summaryService}
                </p>
                <p className="mt-1">
                  {selectedService ? selectedService.name[locale] : "—"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {copy.summaryDate}
                </p>
                <p className="mt-1">{selectedDate || "—"}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {copy.summaryTime}
                </p>
                <p className="mt-1">{selectedTime || "—"}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
