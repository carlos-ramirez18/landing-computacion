# Sistema de diseño

Guía visual para el negocio de venta y servicio técnico de computación.
Definida en la Etapa 1 del roadmap; los tokens viven en
`tailwind.config.ts`, no acá — este documento explica el porqué.

## Concepto

La identidad sale de la placa de circuito: sustrato verde-negro,
soldaduras de cobre, chasis de acero. Es una referencia concreta al
producto real (componentes de PC), no una paleta corporativa genérica.

## Color

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#13221D` | Texto principal, fondos oscuros (header/footer a definir en Etapa 2) |
| `paper` | `#F4F5F0` | Fondo principal |
| `copper` / `copper-dark` / `copper-light` | `#B8672E` / `#95511F` / `#E0A66B` | Acento principal — CTAs, elementos que piden acción |
| `steel` / `steel-dark` / `steel-light` | `#2F5871` / `#25455A` / `#5C89A3` | Acento secundario — links, iconos, botones secundarios |
| `signal` | `#3F9169` | Uso puntual — disponibilidad, confirmaciones. No decorativo |
| `line` | `#D8D6CC` | Bordes y separadores sutiles sobre `paper` |

`copper` es el único acento "cálido" y se reserva para llamados a la
acción reales (WhatsApp, "Consultar", "Ver más"). Si todo el sitio usa
copper, deja de significar "acá pasa algo" — se usa con criterio.

## Tipografía

- **Títulos:** Space Grotesk (500/700) — geométrica, con carácter
  técnico sin caer en el cliché del monospace.
- **Texto:** IBM Plex Sans (400/500/600) — herencia de documentación
  técnica/de ingeniería, muy legible en párrafos largos.
- Self-hosted vía `@fontsource` (sin request externo a Google Fonts,
  mejor performance y sin dependencia de un tercero en cada carga).

## Layout

- Alineación a la izquierda por defecto (`SectionTitle` con
  `align="left"`); centrado solo cuando el contenido lo pide.
- Las cards no llevan sombra ni radio grande por defecto — borde fino
  de `line` y, cuando algo debe destacar, un borde izquierdo de
  `copper` (evocando un pin de conector) en vez de la sombra genérica
  de "kit SaaS".
- Sin eyebrows en mayúsculas ni numeración (01/02/03) por defecto —
  `SectionTitle` acepta un `kicker` opcional, pero solo tiene sentido
  cuando dos listados necesitan distinguirse, no como decoración fija.

## Componentes base (`src/components/ui/`)

- `Container` — ancho máximo consistente para toda sección.
- `Button` / `ButtonLink` — mismo look, `Button` para acciones de JS
  a futuro, `ButtonLink` para los CTA reales de este proyecto
  (`tel:`, `mailto:`, `wa.me`, anchors internos). Variantes:
  `primary` (copper), `secondary` (steel, outline), `ghost`.
- `Card` — con prop `accent` opcional para el borde de conector.
- `SectionTitle` — título de sección con `kicker` y `description`
  opcionales.

Estos componentes se usan tal cual en la Etapa 4 (Hero, Servicios,
Productos destacados, etc.) — no se vuelven a rediseñar ahí, solo se
combinan con contenido real.
