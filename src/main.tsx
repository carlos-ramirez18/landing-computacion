import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Pesos usados por la guía visual (ver docs/design-system.md).
// Self-hosted vía @fontsource: sin request externo a Google Fonts.
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
