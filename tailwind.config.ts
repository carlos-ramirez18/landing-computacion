import type { Config } from 'tailwindcss';

// Los tokens de color/tipografía definitivos se definen en la Etapa 1
// (guía visual del negocio). Esto es un punto de partida neutro.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
