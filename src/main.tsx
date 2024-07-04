import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ColorSchemeProvider } from './lib/ColorScheme/ColorSchemeProvider.tsx'

ReactDOM.createRoot(document.body).render(
  <ColorSchemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorSchemeProvider>
)