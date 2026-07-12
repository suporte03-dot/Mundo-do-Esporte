import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Corrige URLs antigas com caminho duplicado (/Mundo-do-Esporte/EvoluaFit/ etc.)
const { pathname } = window.location
if (/\/EvoluaFit\/?/i.test(pathname)) {
  const base = import.meta.env.BASE_URL || '/'
  const hash = window.location.hash || ''
  const search = window.location.search || ''
  const target = `${window.location.origin}${base}${search}${hash}`.replace(/([^:]\/)\/+/g, '$1')
  window.location.replace(target)
} else if (import.meta.env.DEV && pathname.startsWith('/Mundo-do-Esporte')) {
  const hash = window.location.hash || ''
  const search = window.location.search || ''
  window.location.replace(`${window.location.origin}/${search}${hash}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
