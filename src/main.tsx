import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './LanguageContext.tsx'
import { ModeContext } from './ModeContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ModeContext>
        <App />
      </ModeContext>
    </LanguageProvider>
  </StrictMode>,
)
