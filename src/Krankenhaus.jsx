import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple, FaDeezer, FaAmazon } from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'
import { useTranslation, LangSwitch } from './i18n'

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="bg-black flex flex-col items-center">
      <nav className="w-full grid grid-cols-3 items-center pt-6 pb-16 px-6 absolute z-10">
        <div />
        <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-10 md:h-14 object-contain mx-auto" />
        <div className="flex justify-end"><LangSwitch /></div>
      </nav>

      <div className="w-full relative mt-[50px]">
        <img
          src="/habitacion.png"
          alt="Krankenhaus"
          className="w-full object-cover md:max-h-[600px] md:object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div
        className="w-full flex flex-col items-center text-center px-8 md:px-16 pt-8 pb-5 gap-2 -mt-[100px] relative z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, black 30%)' }}
      >
        <img
          src="/logo-kh.svg"
          alt="KRANKENHAUS"
          className="w-[170px] object-contain"
        />
        <p className="text-white text-sm md:text-base max-w-xs md:max-w-md leading-relaxed">
          {t('kh.heroQuote')}{' '}
          <strong>— Radio Cocoa</strong>.
        </p>
        <img
          src="/logos-prensa.png"
          alt="Universal — The New York Times — Netflix"
          className="w-full max-w-xs md:max-w-sm object-contain mt-2"
        />
      </div>
    </section>
  )
}

// ─── Player ──────────────────────────────────────────────────────────────────

function MusicPlayer() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 pb-10 flex flex-col items-center gap-0">
      <div className="w-full md:max-w-2xl rounded-xl overflow-hidden">
        <iframe
          src="https://open.spotify.com/embed/album/5XesW7QJQmcQy6VNzazIyK?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Krankenhaus — Santamuerte"
          className="block"
        />
      </div>
      <a
        href="https://www.submithub.com/link/santamuerte-krankenhaus"
        target="_blank"
        rel="noopener noreferrer"
        className="text-Krankenhaus text-xs md:text-sm underline underline-offset-4 font-sans mt-3"
      >
        {t('common.listenOther')}
      </a>
    </section>
  )
}

// ─── Álbum ───────────────────────────────────────────────────────────────────

function Album() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-24 py-10 flex flex-col items-start gap-2.5">
      <img
        src="/foto-portada.png"
        alt="Krankenhaus (2026)"
        className="w-full object-cover rounded-lg"
      />
      <h2 className="w-full text-center text-Krankenhaus text-3xl md:text-4xl font-bold font-germania">
        {t('kh.albumTitle')}
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans leading-relaxed">
        {t('kh.albumQuote')}
      </p>
      <p className="w-full text-center text-white text-xs md:text-sm font-bold font-sans">
        {t('kh.albumCredit')}
      </p>
    </section>
  )
}

// ─── Carousels ───────────────────────────────────────────────────────────────

const BANDA_SLIDES = [
  '/foto-banda.png', '/banda-live.png',
  '/cara-01.png', '/cara-02.png', '/cara-03.png', '/cara-04.png',
  '/cara-05.png', '/cara-06.png', '/cara-07.png', '/cara-08.png',
  '/cara-09.png', '/cara-10.png',
]

const SLIDES = [
  '/lanzamiento-1.png', '/lanzamiento-2.png', '/lanzamiento-3.png',
  '/lanzamiento-4.png', '/lanzamiento-5.png', '/lanzamiento-6.png',
]

function CarouselBanda() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((i) => (i === 0 ? BANDA_SLIDES.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === BANDA_SLIDES.length - 1 ? 0 : i + 1))
  return (
    <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '1/1' }}>
      <img src={BANDA_SLIDES[current]} alt={`Banda ${current + 1}`} className="absolute inset-0 w-full h-full object-cover" />
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Anterior">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Siguiente">›</button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {BANDA_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`} aria-label={`Imagen ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

function Carousel() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((i) => (i === 0 ? SLIDES.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === SLIDES.length - 1 ? 0 : i + 1))
  return (
    <div className="relative w-full md:max-w-2xl overflow-hidden rounded-lg" style={{ aspectRatio: '16/9' }}>
      <img src={SLIDES[current]} alt={`Lanzamiento ${current + 1}`} className="absolute inset-0 w-full h-full object-cover" />
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Anterior">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Siguiente">›</button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`} aria-label={`Imagen ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

// ─── Video en vivo ───────────────────────────────────────────────────────────

function LiveVideo() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-6 flex flex-col items-center gap-4">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania">
        {t('kh.liveTitle')}
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans leading-relaxed">
        {t('kh.liveDesc')}
      </p>
      <Carousel />
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania mt-4">
        {t('kh.liveTitle2')}
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans leading-relaxed">
        {t('kh.liveDesc2')}
      </p>
      <div className="relative w-full md:max-w-sm" style={{ aspectRatio: '9/16' }}>
        <iframe
          src="https://www.youtube.com/embed/U8c8pz2rgQc"
          title="La Experiencia Krankenhaus — Santamuerte"
          className="absolute inset-0 w-full h-full rounded"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}

// ─── Tour Highlights ─────────────────────────────────────────────────────────

function TourHighlights() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-24 py-10 flex flex-col items-start gap-3">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania">
        {t('kh.tourTitle')}
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans leading-loose">
        Relevant Music Hall — Bogotá, Colombia (2025)<br />
        Quitofest — Quito, Ecuador (2023)<br />
        Umsonst und Draussen — Karlstadt, Alemania (2018)<br />
        Blues Trash Festival — Berlin, Alemania (2018)<br />
        Michale Graves (Misfits) Opening Act — Quito, Ecuador (2017)
      </p>
    </section>
  )
}

// ─── Logros ──────────────────────────────────────────────────────────────────

const LOGROS = [
  { nombre: 'NEW YORK TIMES', descKey: 'kh.logros.nyt' },
  { nombre: 'NETFLIX', descKey: 'kh.logros.netflix' },
  { nombre: 'UNIVERSAL STUDIOS', descKey: 'kh.logros.universal' },
  { nombre: 'RADIO 3 ESPAÑA', descKey: 'kh.logros.radio3' },
]

function Logros() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-start gap-3">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania">
        {t('kh.logrosTitle')}
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {LOGROS.map(({ nombre, descKey }) => (
          <div key={nombre} className="flex flex-col items-center gap-1">
            <p className="text-white text-sm md:text-base font-bold font-sans">{nombre}</p>
            <p className="text-white text-xs md:text-sm font-normal font-sans text-center">{t(descKey)}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center pt-4">
        <img src="/logos-prensa.png" alt="Universal — The New York Times — Netflix" className="w-full max-w-xs md:max-w-sm object-contain" />
      </div>
    </section>
  )
}

// ─── Historia ────────────────────────────────────────────────────────────────

const HISTORIA = [
  { titulo: 'Krankenhaus (2026)', descKey: 'kh.historia.kh', spotifyId: '5XesW7QJQmcQy6VNzazIyK' },
  { titulo: 'QuitoFest Live (2023)', descKey: 'kh.historia.qf', spotifyId: '1a3j6f7ZfIEo8gF08PcQht' },
  { titulo: 'Meta More Fuzz (2022)', descKey: 'kh.historia.mmf', spotifyId: '4rJqHdsdaqONdDZarNQGiH' },
  { titulo: 'Letras de mi Muerte (2015)', descKey: 'kh.historia.ldmm', spotifyId: '70dngU4WETGLasnW66PLLP' },
]

function Historia() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-start gap-3">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania">
        {t('kh.historiaTitle')}
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans">
        {t('kh.historiaSub')}
      </p>
      <div className="w-full grid grid-cols-1 gap-8 mt-2">
        {HISTORIA.map(({ titulo, descKey, spotifyId }) => (
          <div key={titulo} className="flex flex-col gap-1">
            <div className="w-full rounded-xl overflow-hidden">
              <iframe
                src={`https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator&theme=0`}
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title={titulo} className="block"
              />
            </div>
            <p className="w-full text-center text-sm font-sans mt-1">
              <strong className="text-white font-bold">{titulo}: </strong>
              <span className="text-white font-normal text-xs">{t(descKey)}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── La Banda ────────────────────────────────────────────────────────────────

function LaBanda() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-5">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania">
        {t('kh.bandaTitle')}
      </h2>
      <div className="w-full flex flex-col items-center gap-5">
        <CarouselBanda />
        <p className="w-full text-center text-white text-xs md:text-sm font-normal font-sans leading-relaxed">
          {t('kh.bandaBio1')}
        </p>
        <p className="w-full text-center text-white text-xs md:text-sm font-normal font-sans leading-relaxed">
          {t('kh.bandaBio2')}
        </p>
        <a
          href="https://wa.me/593999400777"
          className="px-10 py-3 bg-white rounded-[50px] text-black text-sm font-bold font-sans text-center"
        >
          {t('common.hireEmoji')}
        </a>
        <div className="flex flex-col items-center gap-2">
          <Link to="/epk" className="text-Krankenhaus text-xs underline underline-offset-4 hover:text-white transition-colors font-sans">
            {t('common.viewEpk')}
          </Link>
          <a
            href="https://drive.google.com/file/d/1lhACJW_vsqt0IS_-L7fBO8Plebe-2L2V/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className="text-Krankenhaus text-xs underline underline-offset-4 hover:text-white transition-colors font-sans"
          >
            {t('kh.downloadRider')}
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const { t } = useTranslation()
  const sociales = [
    { icon: FaInstagram, href: 'https://www.instagram.com/santamuerte.de/', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@santamuertemusic', label: 'YouTube' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@santamuerte.de', label: 'TikTok' },
    { icon: FaFacebook, href: 'https://www.facebook.com/santamuerte.de/', label: 'Facebook' },
  ]
  const streaming = [
    { icon: FaSpotify, href: 'https://open.spotify.com/artist/74NZthZThe5AOubJ3r0nGz?si=s2Xlx0u9Sda1QHJo9388Fg', label: 'Spotify' },
    { icon: FaApple, href: 'https://music.apple.com/us/artist/santamuerte/1581960487', label: 'Apple Music' },
    { icon: SiYoutubemusic, href: 'https://music.youtube.com/@santamuertemusic', label: 'YouTube Music' },
    { icon: FaAmazon, href: 'https://music.amazon.com/artists/B011DOW36U/santamuerte', label: 'Amazon Music' },
    { icon: FaDeezer, href: 'https://www.deezer.com/mx/artist/8442084', label: 'Deezer' },
  ]

  return (
    <footer className="bg-black px-8 md:px-16 pt-10 pb-12 flex flex-col items-center gap-8 border-t border-zinc-900">
      <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-8 object-contain opacity-80" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">{t('kh.footerSocials')}</p>
        <div className="flex items-center gap-6">
          {sociales.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/60 hover:text-white transition-colors duration-200">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">{t('common.listenOn')}</p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {streaming.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/60 hover:text-white transition-colors duration-200">
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScD5Uiz06-EvYGdNOp2roNrXus5sPh1UHvoc2y2EzlEr3eWqg/viewform?usp=header"
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 border border-Krankenhaus rounded-full text-Krankenhaus text-sm font-bold font-sans hover:bg-Krankenhaus hover:text-black transition-all duration-200"
      >
        <span>💀</span><span>{t('common.community')}</span><span>💀</span>
      </a>
      <p className="text-gray-700 text-[10px] tracking-widest">
        © {new Date().getFullYear()} Santamuerte. {t('common.rights')}
      </p>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Krankenhaus() {
  return (
    <div className="bg-black min-h-screen text-white antialiased max-w-[390px] md:max-w-3xl mx-auto">
      <Helmet>
        <title>KRANKENHAUS (2026) — Santamuerte</title>
        <meta name="description" content="KRANKENHAUS, el tercer LP de Santamuerte producido por Daniel Alba. 10 canciones de Punk Blues visceral desde Ecuador al mundo." />
        <meta property="og:title" content="KRANKENHAUS (2026) — Santamuerte" />
        <meta property="og:description" content="KRANKENHAUS, el tercer LP de Santamuerte producido por Daniel Alba. Punk Blues visceral desde Ecuador al mundo." />
        <meta property="og:url" content="https://santamuertemusic.com/krankenhaus" />
        <meta property="og:image" content="https://santamuertemusic.com/habitacion.png" />
        <link rel="canonical" href="https://santamuertemusic.com/krankenhaus" />
      </Helmet>
      <Hero />
      <MusicPlayer />
      <Album />
      <LiveVideo />
      <TourHighlights />
      <Logros />
      <Historia />
      <LaBanda />
      <Footer />
    </div>
  )
}
