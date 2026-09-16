import type { Config } from 'tailwindcss';

// Guía visual del negocio — ver docs/design-system.md para el razonamiento
// completo detrás de esta paleta y tipografía.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // fontFamily va en el nivel superior (no en "extend") para reemplazar
    // por completo la pila "sans" por defecto de Tailwind, en vez de
    // mezclarse con ella.
    fontFamily: {
      sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        ink: '#13221D',
        paper: '#F4F5F0',
        copper: {
          DEFAULT: '#B8672E',
          dark: '#95511F',
          light: '#E0A66B',
        },
        steel: {
          DEFAULT: '#2F5871',
          dark: '#25455A',
          light: '#5C89A3',
        },
        signal: '#3F9169',
        line: '#D8D6CC',
      },
    },
  },
  plugins: [],
} satisfies Config;
