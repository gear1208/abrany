# Gestión Pensional Empresarial — prototipo

Next.js 15 · React 19 · Tailwind v4 · Framer Motion 13 · Lenis.

    npm install
    npm run dev

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Todos los textos (títulos, servicios, etapas, cifras, clientes) | `lib/content.ts` |
| Datos de contacto (correo y WhatsApp) — **reemplazar los de ejemplo** | `lib/content.ts` → `CONTACT` |
| Imágenes y video | `lib/assets.ts` |
| Colores | `app/globals.css` (bloque `@theme`) |

## Cambiar una imagen

1. Crea una carpeta `public/img` en el repositorio y sube tu archivo (por ejemplo `ojo-gpe.png`).
2. En `lib/assets.ts` cambia la línea correspondiente, por ejemplo:
   `brain: "/img/ojo-gpe.png",`
3. Haz commit; Vercel publica solo.

Imágenes actuales (de ejemplo, del prototipo): `brain` (imagen central del hero), `glow` (resplandor),
`ringOuter` / `ringInner` / `arc` (anillos y arco), `brainBadge` (insignia inferior derecha),
`chartLineA` / `chartLineB` (gráficas de las tarjetas), `VIDEO.film` y `VIDEO.poster` (video del hero).
