"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/agenda", label: "Agenda" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/sobre", label: "Sobre" },
  { href: "/terminos", label: "Términos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl tracking-[0.18em]"
          onClick={() => setIsOpen(false)}
        >
          Magia Consciente
        </Link>

        <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? "Cerrar" : "Menú"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0b0714]/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm text-[var(--muted)]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-white/8 bg-[var(--card)] px-4 py-3 transition hover:bg-[var(--card-strong)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
