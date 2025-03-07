import '@/scss/globals.scss';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BootstrappedApp } from './BootstrappedApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BootstrappedApp />
  </StrictMode>,
)
