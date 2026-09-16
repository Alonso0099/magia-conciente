# Magia Consciente

Plataforma de acompañamiento espiritual que fusiona la sabiduría esotérica con
la estructura práctica: herramientas conscientes para identificar bloqueos,
sanar y manifestar una vida alineada.

## Estado

**En progreso, etapa temprana.**

El sitio público está maquetado y navegable (home, servicios, sobre,
testimonios, agenda y términos), pero todavía no hay reservas reales: no existe
backend, base de datos ni rutas de API. Todo el contenido sale de archivos
estáticos en `data/` y el contacto se resuelve por WhatsApp.

## Stack

- **Next.js** con App Router y **React**
- **TypeScript** en modo estricto
- **Tailwind CSS** a través de `@tailwindcss/postcss`
- **ESLint** con `eslint-config-next`

Sin base de datos ni servicios externos por ahora.

## Estructura

| Ruta | Qué contiene |
|---|---|
| `app/` | Rutas: home, `servicios`, `sobre`, `testimonios`, `agenda`, `terminos` |
| `components/` | `home/`, `layout/`, `services/`, `shared/`, `testimonials/`, `ui/` |
| `data/` | Contenido estático: `services.ts`, `testimonials.ts`, `booking.ts` |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Autor

Diseñado y dirigido por **Alonso**; construido con desarrollo asistido por IA.

## Próximos pasos

- Conectar la agenda a un sistema de reservas real
- Contenido definitivo de servicios y testimonios
- Branding e imágenes propias
