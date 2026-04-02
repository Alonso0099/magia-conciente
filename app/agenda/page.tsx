"use client";

import { useMemo, useRef, useState } from "react";
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

    const dateInputRef = useRef<HTMLInputElement | null>(null);

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
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {copy.eyebrow}
        </p>

        <h1 className="text-5xl md:text-6xl">{copy.title}</h1>

        <p className="mx-auto max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          {copy.intro}
        </p>

        <div className="flex justify-center pt-2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
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
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)] md:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-white/55">
                {copy.serviceLabel}
              </label>

              <select
                value={selectedServiceId}
                onChange={(event) => setSelectedServiceId(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]"
              >
                <option value="" className="bg-[#120a22]">
                  {copy.servicePlaceholder}
                </option>

                {services.map((service) => (
                  <option key={service.id} value={service.id} className="bg-[#120a22]">
                    {service.name[locale]}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
            <label className="block text-sm uppercase tracking-[0.18em] text-white/55">
                {copy.dateLabel}
            </label>

            <button
                type="button"
                onClick={() => {
                if (dateInputRef.current) {
                    if (typeof dateInputRef.current.showPicker === "function") {
                    dateInputRef.current.showPicker();
                    } else {
                    dateInputRef.current.focus();
                    dateInputRef.current.click();
                    }
                }
                }}
                className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] px-4 py-3 text-left transition hover:border-white/20 focus:outline-none"
            >
                <span className="block text-xs uppercase tracking-[0.16em] text-white/40">
                {locale === "es" ? "Selecciona una fecha" : "Select a date"}
                </span>

                <span className="mt-1 block text-white">
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

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-lg text-white/70">
                📅
                </span>

                <input
                ref={dateInputRef}
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
                className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
                tabIndex={-1}
                aria-hidden="true"
                />
            </button>

            <p className="text-xs text-white/45">
                {locale === "es"
                ? "Haz clic en cualquier parte del campo para abrir el calendario."
                : "Click anywhere on the field to open the calendar."}
            </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <label className="block text-sm uppercase tracking-[0.18em] text-white/55">
                  {copy.timeLabel}
                </label>

                <p className="text-xs text-white/45">
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
                          ? "cursor-not-allowed border-white/5 bg-white/[0.03] text-white/25"
                          : isSelected
                          ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                          : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10"
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
                    : "cursor-not-allowed border border-white/10 bg-white/5 text-white/40"
                }`}
              >
                {isFormComplete ? copy.reserveButton : copy.reserveDisabled}
              </a>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)]">
            <h2 className="text-3xl">{copy.hoursTitle}</h2>
            <p className="mt-3 text-white/70">{businessHours[locale]}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(170,100,255,0.08)]">
            <h2 className="text-3xl">{copy.selectedSummary}</h2>

            <div className="mt-5 space-y-4 text-white/75">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {copy.summaryService}
                </p>
                <p className="mt-1">
                  {selectedService ? selectedService.name[locale] : "—"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {copy.summaryDate}
                </p>
                <p className="mt-1">{selectedDate || "—"}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
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