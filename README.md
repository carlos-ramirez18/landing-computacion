# GP Computacion — Landing Page

Landing page profesional para un negocio de venta de productos
informáticos, accesorios, componentes de PC y servicio técnico.

Construida como la **primera etapa** de un proyecto pensado para
evolucionar hacia una plataforma con catálogo, e-commerce, panel de
administración y backend propio (ver "Arquitectura y roadmap" abajo).

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- ESLint + Prettier
- lucide-react (íconos)

## Cómo trabajar en este proyecto (GitHub Codespaces)

Este proyecto está pensado para desarrollarse **enteramente en
GitHub Codespaces**, sin necesidad de instalar Node, editores pesados
ni nada localmente.

### 1. Abrir el proyecto en un Codespace

1. En la página del repositorio en GitHub, hacé clic en el botón verde
   **"Code"**.
2. Elegí la pestaña **"Codespaces"**.
3. Hacé clic en **"Create codespace on main"**.
4. Esperá a que se construya el entorno (instala automáticamente las
   dependencias vía `postCreateCommand`). La primera vez tarda unos
   minutos.

### 2. Instalar dependencias (si hace falta a mano)

El devcontainer corre `npm install` automáticamente al crear el
Codespace. Si necesitás reinstalar manualmente:

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

Codespaces va a detectar el puerto `5173` y te va a ofrecer abrirlo en
una pestaña del navegador (o mirá la pestaña **"Ports"** en la parte
inferior de VS Code).

### 4. Otros comandos disponibles

```bash
npm run build         # build de producción
npm run preview       # sirve el build de producción localmente
npm run lint          # chequea errores de ESLint
npm run format        # formatea todo el proyecto con Prettier
npm run format:check  # solo verifica formato, sin modificar archivos
```

### 5. Variables de entorno

Copiá `.env.example` a `.env` y completá los valores que corresponda:

```bash
cp .env.example .env
```

El archivo `.env` nunca se commitea (está en `.gitignore`).

## Flujo de trabajo con Git

### Crear una rama para un cambio

```bash
git checkout -b feature/nombre-del-cambio
```

### Guardar cambios (commit)

```bash
git add .
git commit -m "Descripción breve del cambio"
```

### Subir la rama a GitHub (push)

```bash
git push origin feature/nombre-del-cambio
```

### Pull Request

1. Entrá al repositorio en GitHub.
2. Vas a ver un aviso para crear un Pull Request desde la rama que
   subiste — hacé clic en **"Compare & pull request"**.
3. Describí brevemente el cambio y creá el PR contra `main`.
4. El workflow de CI (`.github/workflows/ci.yml`) corre lint y build
   automáticamente sobre el PR.
5. Una vez revisado, se hace merge a `main`.

## Estructura del proyecto

```
src/
├── assets/              # imágenes/íconos propios importados desde el código
├── components/
│   ├── ui/              # piezas genéricas reutilizables (Button, Card...)
│   └── sections/        # secciones de la landing (Hero, Servicios...)
├── layouts/             # Header, Footer, layout general
├── data/                # mocks tipados (productos, servicios, contacto)
├── types/               # interfaces de TypeScript
├── services/            # capa de acceso a datos (hoy: mocks; mañana: API REST)
├── hooks/                # lógica reutilizable entre componentes
├── utils/               # funciones helper puras
└── styles/              # estilos globales (Tailwind)
```

Cada carpeta tiene su propio `README.md` explicando qué va ahí y en
qué etapa del roadmap se completa.

## Arquitectura y roadmap

Esta landing es la base de una futura plataforma completa:

```
React + TypeScript  →  API REST  →  Java + Spring Boot  →  PostgreSQL
```

La capa `src/services/` es la que absorbe ese cambio: hoy devuelve
datos de `src/data`, y cuando exista el backend solo se modifica esa
capa (sin tocar los componentes de UI) para que haga `fetch` contra
`VITE_API_URL`.

**Etapas de esta primera fase:**

- [x] Etapa 0 — Fundación del repo (devcontainer, scaffold, lint/format, CI)
- [x] Etapa 1 — Design system base (tokens de color/tipografía, componentes `ui/` — ver `docs/design-system.md`)
- [ ] Etapa 2 — Layout (Header responsive + Footer)
- [ ] Etapa 3 — Datos tipados (`types/`, `data/`, `services/`)
- [ ] Etapa 4 — Secciones (Hero, Categorías, Servicios, Por qué elegirnos, Productos destacados, Sobre nosotros, Contacto)
- [ ] Etapa 5 — SEO y performance
- [ ] Etapa 6 — Deploy (Vercel/Netlify) con CI/CD

**Etapas futuras (fuera del alcance de esta landing):** catálogo real,
carrito, checkout, registro/login, roles, panel de administración,
medios de pago, sistema de turnos para servicio técnico, backend en
Java + Spring Boot, base de datos PostgreSQL, API REST, autenticación
y notificaciones.

## Datos pendientes

Este proyecto usa placeholders para información real del negocio que
todavía no fue provista: nombre, dirección, teléfono, email, horarios,
precios, marcas, años de experiencia, garantías y certificaciones.
Buscá `[NOMBRE DEL NEGOCIO]`, `[WHATSAPP]`, `[EMAIL]`, `[DIRECCIÓN]`,
`[HORARIOS]` en el código para completarlos cuando estén disponibles.
