import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LangProvider } from './i18n'
import App from './App'
import EPK from './EPK'
import Krankenhaus from './Krankenhaus'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <LangProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/epk" element={<EPK />} />
            <Route path="/krankenhaus" element={<Krankenhaus />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </HelmetProvider>
  </React.StrictMode>
)
