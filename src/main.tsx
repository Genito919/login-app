import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/login.css'  // ✅ tu CSS real
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)