import React, { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LangContext = createContext(null)

function detectLang() {
  const browserLang = navigator.language || navigator.userLanguage || 'es'
  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang)

  function t(path) {
    const keys = path.split('.')
    let val = translations[lang]
    for (const k of keys) val = val?.[k]
    return val ?? path
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LangContext)
}

export function LangSwitch({ className = '' }) {
  const { lang, setLang } = useTranslation()
  return (
    <div className={`flex items-center gap-1 font-bold font-sans tracking-widest text-[10px] ${className}`}>
      <button
        onClick={() => setLang('es')}
        className={`transition-colors ${lang === 'es' ? 'text-Krankenhaus' : 'text-white/30 hover:text-white/60'}`}
      >
        ES
      </button>
      <span className="text-white/20">|</span>
      <button
        onClick={() => setLang('en')}
        className={`transition-colors ${lang === 'en' ? 'text-Krankenhaus' : 'text-white/30 hover:text-white/60'}`}
      >
        EN
      </button>
    </div>
  )
}
