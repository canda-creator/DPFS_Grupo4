import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Dreamie } from './dreamie'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dreamie />
  </StrictMode>,
)
