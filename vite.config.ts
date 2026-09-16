import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Necesario para que Codespaces exponga el puerto correctamente
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
