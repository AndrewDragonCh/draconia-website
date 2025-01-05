import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import { ColorSchemeProvider } from './lib/ColorScheme/ColorSchemeProvider.tsx'

const root = createRoot(document.body);

root.render(
  <ColorSchemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ColorSchemeProvider>
);