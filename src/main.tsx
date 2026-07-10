import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Memory from './pages/Memory.tsx'
import Scan from './pages/Scan.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
