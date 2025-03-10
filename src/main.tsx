import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import '@fontsource/space-mono';
import './index.css'
import App from './components/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
