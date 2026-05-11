import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  FaInstagram, FaYoutube, FaTiktok, FaFacebook,
  FaSpotify, FaApple, FaDeezer, FaAmazon, FaBars, FaTimes
} from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Música', href: '#musica' },
    { label: 'En Vivo', href: '#envivo' },
    { label: 'La Banda', href: '#banda' },
    { label: 'EPK', href: '/epk', external: false, route: true },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-[390px] md:max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-7 object-contain" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href, route }) =>
            route ? (
              <Link key={label} to={href} className="text-white/60 hover:text-white text-xs tracking-widest uppercase font-sans transition-colors">
                {label}
              </Link>
            ) : (
              <a key={label} href={href} className="text-white/60 hover:text-white text-xs tracking-widest uppercase font-sans transition-colors">
                {label}
              </a>
            )
          )}
          <a
            href="https://wa.me/593999400777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-Krankenhaus text-Krankenhaus text-xs font-bold font-sans rounded-full hover:bg-Krankenhaus hover:text-black transition-all"
          >
            Contrátanos
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menú">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(({ label, href, route }) =>
            route ? (
              <Link key={label} to={href} onClick={() => setOpen(false)} className="text-white/70 text-sm tracking-widest uppercase font-sans">
                {label}
              </Link>
            ) : (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-white/70 text-sm tracking-widest uppercase font-sans">
                {label}
              </a>
            )
          )}
          <a
            href="https://wa.me/593999400777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-Krankenhaus text-black text-sm font-bold font-sans rounded-full text-center"
          >
            Contrátanos
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/foto-portada-9.png"
        alt="Santamuerte"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 gap-5">
        <div className="flex flex-col items-center gap-[4px]">
          <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-10 md:h-14 object-contain" />
          <img src="/logo-kh.svg" alt="KRANKENHAUS" className="w-[170px] object-contain" />
        </div>
        <p className="text-white/80 text-sm md:text-base font-sans max-w-xs md:max-w-sm leading-relaxed">
          Punk Blues visceral desde Ecuador al mundo
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="#musica"
            className="px-8 py-3 bg-Krankenhaus text-black text-sm font-bold font-sans rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
          >
            Escuchar ahora
          </a>
          <a
            href="https://wa.me/593999400777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white text-white text-sm font-bold font-sans rounded-full hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center"
          >
            Contrátanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}

// ─── Press Bar ────────────────────────────────────────────────────────────────

function PressBar() {
  return (
    <div className="bg-Krankenhaus/10 border-y border-Krankenhaus/20 px-8 py-4 flex items-center justify-center">
      <img
        src="/logos-prensa.png"
        alt="Universal — The New York Times — Netflix"
        className="w-full max-w-xs md:max-w-sm object-contain opacity-70"
      />
    </div>
  )
}

// ─── Nuevo Álbum ─────────────────────────────────────────────────────────────

function NuevoAlbum() {
  return (
    <section id="musica" className="bg-black px-8 md:px-16 py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-Krankenhaus text-[10px] tracking-[0.3em] uppercase font-sans">Nuevo álbum — 2026</p>
        <h2 className="text-white text-3xl md:text-4xl font-germania text-center">Krankenhaus</h2>
        <p className="text-white/50 text-xs font-sans text-center max-w-xs md:max-w-md leading-relaxed">
          10 canciones nacidas del aislamiento absoluto. Punk Blues crudo, sin adornos, solo la urgencia de reventarnos los oídos. Producido por Daniel Alba.
        </p>
      </div>

      <div className="w-full md:max-w-2xl flex flex-col gap-3">
        <div className="w-full rounded-xl overflow-hidden">
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
          className="text-center text-Krankenhaus text-xs underline underline-offset-4 font-sans hover:text-white transition-colors"
        >
          Escuchar en otras plataformas
        </a>
      </div>
    </section>
  )
}

// ─── Logros ──────────────────────────────────────────────────────────────────

const LOGROS = [
  { brand: 'NETFLIX', desc: 'Soundtrack de la serie "Tex Mex Motors"' },
  { brand: 'THE NEW YORK TIMES', desc: '"The Fastest Girl In America" — NYT Opinion' },
  { brand: 'UNIVERSAL STUDIOS', desc: 'Halloween Horror Nights — Orlando' },
  { brand: 'RADIO 3 ESPAÑA', desc: 'Disco de la Semana 2015' },
]

function Logros() {
  return (
    <section className="bg-zinc-950 px-8 md:px-16 py-16 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-Krankenhaus text-[10px] tracking-[0.3em] uppercase font-sans">Presencia global</p>
        <h2 className="text-white text-2xl md:text-3xl font-germania text-center">Logros Destacados</h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {LOGROS.map(({ brand, desc }) => (
          <div key={brand} className="bg-zinc-950 px-6 py-6 flex flex-col gap-1">
            <p className="text-Krankenhaus text-xs font-bold font-sans tracking-widest">{brand}</p>
            <p className="text-white/60 text-sm font-sans leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── En Vivo ─────────────────────────────────────────────────────────────────

function EnVivo() {
  return (
    <section id="envivo" className="bg-black px-8 md:px-16 py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-Krankenhaus text-[10px] tracking-[0.3em] uppercase font-sans">Show de lanzamiento</p>
        <h2 className="text-white text-2xl md:text-3xl font-germania text-center">Krankenhaus 360°</h2>
        <p className="text-white/50 text-sm font-sans text-center max-w-xs md:max-w-md leading-relaxed">
          Un escenario central rodeado por el público. Sonido 360°, video mapping y visuales que desafían el miedo a la muerte.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 items-center">
        {/* Carousel fotos */}
        <div className="w-full md:w-1/2">
          <CarouselLanzamiento />
        </div>
        {/* Video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[220px]" style={{ aspectRatio: '9/16' }}>
            <iframe
              src="https://www.youtube.com/embed/U8c8pz2rgQc"
              title="Krankenhaus en Vivo — Santamuerte"
              className="absolute inset-0 w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Tour highlights */}
      <div className="w-full flex flex-col gap-0 border border-white/10 rounded-xl overflow-hidden mt-4">
        {[
          { show: 'Relevant Music Hall', lugar: 'Bogotá, Colombia', año: '2025' },
          { show: 'Quitofest', lugar: 'Quito, Ecuador', año: '2023' },
          { show: 'Blues Trash Festival', lugar: 'Berlin, Alemania', año: '2018' },
          { show: 'Umsonst und Draussen', lugar: 'Karlstadt, Alemania', año: '2018' },
        ].map(({ show, lugar, año }, i, arr) => (
          <div key={show} className={`flex items-center justify-between px-5 py-4 ${i < arr.length - 1 ? 'border-b border-white/10' : ''}`}>
            <div className="flex flex-col gap-0.5">
              <p className="text-white text-sm font-bold font-sans">{show}</p>
              <p className="text-white/40 text-xs font-sans">{lugar}</p>
            </div>
            <span className="text-Krankenhaus text-sm font-sans font-bold">{año}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Carousel Lanzamiento ────────────────────────────────────────────────────

const SLIDES = [
  '/lanzamiento-1.png', '/lanzamiento-2.png', '/lanzamiento-3.png',
  '/lanzamiento-4.png', '/lanzamiento-5.png', '/lanzamiento-6.png',
]

function CarouselLanzamiento() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((i) => (i === 0 ? SLIDES.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === SLIDES.length - 1 ? 0 : i + 1))

  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
      <img src={SLIDES[current]} alt={`Show ${current + 1}`} className="absolute inset-0 w-full h-full object-cover" />
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Anterior">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Siguiente">›</button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/30'}`} aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

// ─── Discografía ─────────────────────────────────────────────────────────────

const HISTORIA = [
  { titulo: 'Krankenhaus', año: '2026', desc: 'Tercer LP', spotifyId: '5XesW7QJQmcQy6VNzazIyK' },
  { titulo: 'QuitoFest Live', año: '2023', desc: 'EP en vivo', spotifyId: '1a3j6f7ZfIEo8gF08PcQht' },
  { titulo: 'Meta More Fuzz', año: '2022', desc: 'Segundo LP', spotifyId: '4rJqHdsdaqONdDZarNQGiH' },
  { titulo: 'Letras de mi Muerte', año: '2015', desc: 'Primer LP', spotifyId: '70dngU4WETGLasnW66PLLP' },
]

function Discografia() {
  return (
    <section className="bg-zinc-950 px-8 md:px-16 py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-Krankenhaus text-[10px] tracking-[0.3em] uppercase font-sans">13 años de música</p>
        <h2 className="text-white text-2xl md:text-3xl font-germania text-center">Discografía</h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-6">
        {HISTORIA.map(({ titulo, año, desc, spotifyId }) => (
          <div key={titulo} className="flex flex-col gap-2">
            <div className="w-full rounded-xl overflow-hidden">
              <iframe
                src={`https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={titulo}
                className="block"
              />
            </div>
            <p className="text-white/40 text-xs font-sans px-1">
              <span className="text-white font-bold">{titulo}</span> · {desc} · {año}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── La Banda ─────────────────────────────────────────────────────────────────

const BANDA_SLIDES = [
  '/foto-banda.png', '/banda-live.png',
  '/cara-01.png', '/cara-02.png', '/cara-03.png', '/cara-04.png',
  '/cara-05.png', '/cara-06.png', '/cara-07.png', '/cara-08.png',
  '/cara-09.png', '/cara-10.png',
]

function CarouselBanda() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((i) => (i === 0 ? BANDA_SLIDES.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === BANDA_SLIDES.length - 1 ? 0 : i + 1))

  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '1/1' }}>
      <img src={BANDA_SLIDES[current]} alt={`Banda ${current + 1}`} className="absolute inset-0 w-full h-full object-cover" />
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Anterior">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/80 transition-colors" aria-label="Siguiente">›</button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {BANDA_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/30'}`} aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

function LaBanda() {
  return (
    <section id="banda" className="bg-black px-8 md:px-16 py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-Krankenhaus text-[10px] tracking-[0.3em] uppercase font-sans">Cuenca, Ecuador — 2013</p>
        <h2 className="text-white text-2xl md:text-3xl font-germania text-center">La Banda</h2>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <CarouselBanda />
        <p className="text-white/60 text-sm font-sans leading-relaxed text-center max-w-xs md:max-w-md">
          Santamuerte es un dúo de Punk Blues formado por <strong className="text-white">Juan F. Rojas</strong> y <strong className="text-white">Sebastián Tamariz K.</strong> Con guitarra y batería han transformado el underground ecuatoriano en un proyecto de impacto global — sincronizaciones en Netflix, Universal Studios y reconocimiento en The New York Times.
        </p>
        <p className="text-white/40 text-xs font-sans italic text-center max-w-xs">
          "Santamuerte es una banda que desafía el miedo a la muerte" — <span className="text-white/60">Radio Cocoa</span>
        </p>
        <div className="flex flex-col items-center gap-3 w-full">
          <a
            href="https://wa.me/593999400777"
            className="px-10 py-3 bg-white rounded-full text-black text-sm font-bold font-sans text-center hover:bg-Krankenhaus transition-colors w-full max-w-xs"
          >
            Contrátanos 👈
          </a>
          <div className="flex items-center gap-4">
            <Link to="/epk" className="text-Krankenhaus text-xs underline underline-offset-4 hover:text-white transition-colors font-sans">
              Ver EPK
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <a
              href="https://drive.google.com/file/d/1lhACJW_vsqt0IS_-L7fBO8Plebe-2L2V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-Krankenhaus text-xs underline underline-offset-4 hover:text-white transition-colors font-sans"
            >
              Rider Técnico
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
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
    <footer className="bg-zinc-950 px-8 md:px-16 pt-12 pb-10 flex flex-col items-center gap-8 border-t border-white/5">
      <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-7 object-contain opacity-60" />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScD5Uiz06-EvYGdNOp2roNrXus5sPh1UHvoc2y2EzlEr3eWqg/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 border border-Krankenhaus rounded-full text-Krankenhaus text-sm font-bold font-sans hover:bg-Krankenhaus hover:text-black transition-all duration-200"
      >
        <span>💀</span>
        <span>Únete a la comunidad</span>
        <span>💀</span>
      </a>

      <div className="flex flex-col items-center gap-3">
        <p className="text-white/20 text-[10px] tracking-widest uppercase">Redes</p>
        <div className="flex items-center gap-6">
          {sociales.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/40 hover:text-white transition-colors">
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-white/20 text-[10px] tracking-widest uppercase">Escúchanos en</p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {streaming.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/40 hover:text-white transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 flex-wrap justify-center">
        <Link to="/epk" className="text-white/30 text-[10px] font-sans hover:text-white/60 transition-colors">EPK</Link>
        <span className="text-white/10 text-[10px]">·</span>
        <a href="https://drive.google.com/file/d/1lhACJW_vsqt0IS_-L7fBO8Plebe-2L2V/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white/30 text-[10px] font-sans hover:text-white/60 transition-colors">Rider Técnico</a>
        <span className="text-white/10 text-[10px]">·</span>
        <a href="https://www.mutees.ec" target="_blank" rel="noopener noreferrer" className="text-white/30 text-[10px] font-sans hover:text-white/60 transition-colors">Merch</a>
      </div>

      <p className="text-white/20 text-[10px] tracking-widest text-center">
        © {new Date().getFullYear()} Santamuerte. Todos los derechos reservados.
      </p>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white antialiased max-w-[390px] md:max-w-3xl mx-auto">
      <Helmet>
        <title>KRANKENHAUS — Santamuerte</title>
        <meta name="description" content="Santamuerte presenta KRANKENHAUS (2026), su tercer LP producido por Daniel Alba. Punk Blues visceral desde Ecuador al mundo." />
        <meta property="og:title" content="KRANKENHAUS — Santamuerte" />
        <meta property="og:description" content="Santamuerte presenta KRANKENHAUS (2026), su tercer LP producido por Daniel Alba. Punk Blues visceral desde Ecuador al mundo." />
        <meta property="og:url" content="https://santamuertemusic.com/" />
        <meta property="og:image" content="https://santamuertemusic.com/habitacion.png" />
        <meta name="twitter:title" content="KRANKENHAUS — Santamuerte" />
        <meta name="twitter:description" content="Santamuerte presenta KRANKENHAUS (2026), su tercer LP producido por Daniel Alba. Punk Blues visceral desde Ecuador al mundo." />
        <meta name="twitter:image" content="https://santamuertemusic.com/habitacion.png" />
        <link rel="canonical" href="https://santamuertemusic.com/" />
      </Helmet>
      <Navbar />
      <Hero />
      <PressBar />
      <NuevoAlbum />
      <Logros />
      <EnVivo />
      <Discografia />
      <LaBanda />
      <Footer />
    </div>
  )
}
