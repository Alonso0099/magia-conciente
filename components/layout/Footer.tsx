import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Magia Conciente. Todos los derechos reservados.</p>

        <div className="flex flex-wrap gap-4">
          <Link href="/terminos">Términos</Link>
          <a
            href="https://www.instagram.com/magia_consciente?igsh=d2dzNXZhaG1udHRn&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1R7c15CiZo/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}