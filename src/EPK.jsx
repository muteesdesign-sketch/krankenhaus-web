import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple, FaWhatsapp, FaEnvelope
} from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'

// ─── EPK Hero ─────────────────────────────────────────────────────────────────

function EPKHero() {
  return (
    <section className="bg-black flex flex-col items-center">
      {/* Concert photo with SVG logo overlay */}
      <div className="w-full relative">
        <img
          src="/foto-portada-9.png"
          alt="Santamuerte en vivo"
          className="w-full object-cover md:max-h-[520px] md:object-top"
        />
        {/* Dark gradient top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        {/* Back link top right */}
        <div className="absolute top-0 right-0 pt-6 pr-6">
          <Link
            to="/"
            className="text-white/60 text-xs hover:text-white transition-colors font-sans"
          >
            ← Volver
          </Link>
        </div>
      </div>

      {/* Info block below photo */}
      <div className="w-full flex flex-col items-center text-center px-8 md:px-16 pt-6 pb-8 gap-3 bg-black">
        {/* Band name as SVG */}
        <img
          src="/santamuerte-title.svg"
          alt="Santamuerte"
          className="w-full max-w-[260px] md:max-w-[340px] object-contain"
        />
        <p className="text-Krankenhaus text-sm md:text-base font-sans">
          Cuenca, Ecuador, desde 2013
        </p>
        <p className="text-white text-sm md:text-base font-sans italic leading-relaxed max-w-xs md:max-w-md">
          "Santamuerte es una banda que desafía el miedo a la muerte, tiene nombre de deidad y le rinde tributo a esa Señora con actitud de santa y cara de calavera"
        </p>
        <p className="text-white text-sm font-bold font-sans">— Radio Cocoa</p>
        <img
          src="/logos-prensa.png"
          alt="Universal — The New York Times — Netflix"
          className="w-full max-w-xs md:max-w-sm object-contain mt-2 opacity-80"
        />
      </div>
    </section>
  )
}

// ─── Bio ──────────────────────────────────────────────────────────────────────

function Bio() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-4">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Quiénes somos
      </h2>
      <p className="w-full text-white text-sm md:text-base font-normal font-sans leading-relaxed text-center">
        Santamuerte es un dúo de Punk Blues formado en Cuenca, Ecuador en 2013 por Juan F. Rojas y Sebastián Tamariz K.
        Con un formato crudo de guitarra y batería, han transformado el underground ecuatoriano en un proyecto de impacto global.
      </p>
      <p className="w-full text-white text-sm md:text-base font-normal font-sans leading-relaxed text-center">
        Su música ha alcanzado sincronizaciones en Netflix, Universal Studios y The New York Times.
        En 2026 presentan su tercer LP, <strong className="text-Krankenhaus">Krankenhaus</strong>, producido por Daniel Alba,
        un testimonio de introspección y catarsis que cobra vida en los escenarios a través de un ritual escénico
        inmersivo con sonido 360°, video mapping y visuales que desafían el miedo a la muerte.
      </p>
    </section>
  )
}

// ─── Cuentas Oficiales ────────────────────────────────────────────────────────

function CuentasOficiales() {
  const plataformas = [
    {
      icon: FaSpotify,
      label: 'Spotify',
      handle: 'santamuerte',
      href: 'https://open.spotify.com/artist/74NZthZThe5AOubJ3r0nGz',
      color: '#1DB954',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      handle: '@santamuerte.de',
      href: 'https://www.instagram.com/santamuerte.de/',
      color: '#E1306C',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      handle: 'santamuerte.de',
      href: 'https://www.facebook.com/santamuerte.de/',
      color: '#1877F2',
    },
    {
      icon: FaTiktok,
      label: 'TikTok',
      handle: '@santamuerte.de',
      href: 'https://www.tiktok.com/@santamuerte.de',
      color: '#ffffff',
    },
    {
      icon: FaYoutube,
      label: 'YouTube',
      handle: '@santamuertemusic',
      href: 'https://www.youtube.com/@santamuertemusic',
      color: '#FF0000',
    },
    {
      icon: FaApple,
      label: 'Apple Music',
      handle: 'santamuerte',
      href: 'https://music.apple.com/us/artist/santamuerte/1581960487',
      color: '#ffffff',
    },
    {
      icon: SiYoutubemusic,
      label: 'YouTube Music',
      handle: '@santamuertemusic',
      href: 'https://music.youtube.com/@santamuertemusic',
      color: '#FF0000',
    },
  ]

  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Cuentas Oficiales
      </h2>
      <div className="w-full grid grid-cols-1 gap-3">
        {plataformas.map(({ icon: Icon, label, handle, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-3.5 border border-white/10 rounded-xl hover:border-white/30 transition-colors bg-white/5"
          >
            <Icon size={22} style={{ color }} />
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold font-sans">{label}</span>
              <span className="text-white/50 text-xs font-sans">{handle}</span>
            </div>
            <span className="ml-auto text-white/30 text-sm">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Discografía ──────────────────────────────────────────────────────────────

const DISCOGRAFIA = [
  {
    titulo: 'Krankenhaus',
    año: '2026',
    desc: 'Tercer LP. 10 canciones producidas por Daniel Alba. Punk Blues crudo desde el aislamiento absoluto.',
    spotifyId: '5XesW7QJQmcQy6VNzazIyK',
  },
  {
    titulo: 'QuitoFest Live',
    año: '2023',
    desc: 'EP en vivo. Cierre de gira Meta More Fuzz en el festival más grande de Ecuador.',
    spotifyId: '1a3j6f7ZfIEo8gF08PcQht',
  },
  {
    titulo: 'Meta More Fuzz',
    año: '2022',
    desc: 'Segundo LP. La metamorfosis entre Alemania y Ecuador. El álbum que los llevó al mundo.',
    spotifyId: '4rJqHdsdaqONdDZarNQGiH',
  },
  {
    titulo: 'Letras de mi Muerte',
    año: '2015',
    desc: 'Primer LP. El origen: los bares, el caos y el vinilo. Disco de la Semana en Radio 3 España.',
    spotifyId: '70dngU4WETGLasnW66PLLP',
  },
]

function Discografia() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Discografía
      </h2>
      <div className="w-full grid grid-cols-1 gap-8">
        {DISCOGRAFIA.map(({ titulo, año, desc, spotifyId }) => (
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
            <div className="flex flex-col gap-0.5 px-1">
              <p className="text-white text-sm font-bold font-sans">
                {titulo} <span className="text-Krankenhaus font-normal">({año})</span>
              </p>
              <p className="text-white/60 text-xs font-sans leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Logros ──────────────────────────────────────────────────────────────────

const LOGROS_EPK = [
  {
    album: 'Letras de mi Muerte',
    items: [
      { brand: '"RADIO 3" ESPAÑA', desc: 'Disco de la Semana -2015-' },
      { brand: 'NETFLIX', desc: 'Soundtrack de la serie TEX MEX MOTORS -2023-' },
      { brand: '"UNIVERSAL STUDIOS" ORLANDO, EEUU', desc: 'Halloween Horror Nights -2022-' },
      { brand: 'NEW YORK TIMES', desc: '"I was the Fastest Girl In America, Until I Joined Nike / NYT Opinion" -2019-' },
      { brand: 'DUNKIN DONUTS', desc: 'Soundtrack en video comercial para EEUU -2019-' },
    ],
  },
  {
    album: 'Meta More Fuzz',
    items: [
      { brand: '"Initiative Musik gGmgH" ALEMANIA', desc: 'Ganadores de los fondos concursables -2021-' },
    ],
  },
]

function Logros() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Logros Destacados
      </h2>
      <div className="w-full flex flex-col gap-8">
        {LOGROS_EPK.map(({ album, items }) => (
          <div key={album} className="flex flex-col gap-4">
            <p className="text-white/50 text-[10px] tracking-widest uppercase font-sans border-b border-white/10 pb-2">
              {album}
            </p>
            <div className="flex flex-col gap-4">
              {items.map(({ brand, desc }) => (
                <div key={brand} className="flex flex-col gap-1">
                  <p className="text-white text-xs font-bold font-sans tracking-wider">{brand}</p>
                  <p className="text-white/60 text-xs font-sans leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center pt-2">
        <img
          src="/logos-prensa.png"
          alt="Universal — The New York Times — Netflix"
          className="w-full max-w-xs md:max-w-sm object-contain opacity-80"
        />
      </div>
    </section>
  )
}

// ─── En Vivo ─────────────────────────────────────────────────────────────────

const SHOWS = [
  { evento: 'RELEVANT MUSIC HALL', lugar: 'Bogotá, Colombia', año: '2025' },
  { evento: 'QUITOFEST', lugar: 'Quito, Ecuador', año: '2023' },
  { evento: 'UMSONST UND DRAUSSEN', lugar: 'Karlstadt, Alemania', año: '2018' },
  { evento: 'Blues Trash Festival', lugar: 'Berlin, Alemania', año: '2018' },
  { evento: 'LA FIESTA DE LA MÚSICA — Alianza Francesa', lugar: 'Cuenca, Ecuador', año: '2017' },
  { evento: 'MICHAEL GRAVES (Misfits) opening act', lugar: 'Quito, Ecuador', año: '2016' },
]

function EnVivo() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        En Vivo
      </h2>
      <div className="w-full flex flex-col gap-0">
        {SHOWS.map(({ evento, lugar, año }, i) => (
          <div
            key={evento}
            className={`flex items-center justify-between py-4 ${i < SHOWS.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <div className="flex flex-col gap-0.5">
              <p className="text-white text-sm font-bold font-sans">{evento}</p>
              <p className="text-white/50 text-xs font-sans">{lugar}</p>
            </div>
            <span className="text-Krankenhaus text-sm font-sans font-bold">{año}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


function Videografia() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Videografía
      </h2>
      <div className="relative w-full md:max-w-sm" style={{ aspectRatio: '9/16' }}>
        <iframe
          src="https://www.youtube.com/embed/p_7c2-zIHnE"
          title="Krankenhaus — Santamuerte"
          className="absolute inset-0 w-full h-full rounded"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}

// ─── Recursos ────────────────────────────────────────────────────────────────

const RECURSOS = [
  { label: 'Descargar Fotos Hi-Res', href: 'https://drive.google.com/drive/folders/1EJLrXF0Ynfi0MfDF5JJOKccTy3UUj87v' },
  { label: 'Descargar Logos Oficiales', href: 'https://drive.google.com/drive/folders/1EJLrXF0Ynfi0MfDF5JJOKccTy3UUj87v' },
  { label: 'Descargar Rider Técnico', href: 'https://drive.google.com/file/d/1lhACJW_vsqt0IS_-L7fBO8Plebe-2L2V/view?usp=sharing' },
  { label: 'Descargar Stage Plot', href: 'https://drive.google.com/file/d/1w9BSwLrGp2ftLDnCvYTJa6ClyODBQLwE/view?usp=sharing' },
  { label: 'Descargar Krankenhaus Press Release', href: 'https://drive.google.com/drive/folders/1QYWlJi7vZEzio0fTyZzFb9G2yxRCiwNU?usp=sharing' },
  { label: 'Descargar Singles (mp3 & wav)', href: 'https://drive.google.com/drive/folders/1tM2XT2512nKHYVqnBwijeBMLZXsvSNyz?usp=sharing' },
]

function Recursos() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Recursos para Prensa &amp; Promotores
      </h2>
      <div className="w-full flex flex-col gap-0 border border-white/10 rounded-xl overflow-hidden">
        {RECURSOS.map(({ label, href }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors ${i < RECURSOS.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <span className="text-white text-sm font-sans">{label}</span>
            <span className="text-Krankenhaus text-lg">↓</span>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Contactos ────────────────────────────────────────────────────────────────

function Contactos() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        Contactos
      </h2>
      <div className="w-full flex flex-col gap-0 border border-white/10 rounded-xl overflow-hidden">
        <p className="text-white/50 text-xs uppercase tracking-widest font-sans px-5 pt-5 pb-3 border-b border-white/10">
          Booking &amp; Management (Latinamerica &amp; USA)
        </p>
        <div className="flex flex-col gap-0">
          {[
            { icon: FaEnvelope, label: 'E-MAIL', value: 'vudusessions@gmail.com', href: 'mailto:vudusessions@gmail.com' },
            { icon: FaWhatsapp, label: 'EC', value: '+593 99 940 0777', href: 'https://wa.me/593999400777' },
            { icon: FaWhatsapp, label: 'EC', value: '+593 98 642 5412', href: 'https://wa.me/593986425412' },
            { icon: null, label: 'WEBSITE', value: 'www.linktree.com/santamuerte', href: 'https://linktr.ee/santamuerte' },
            { icon: null, label: 'MERCHANDISE', value: 'www.mutees.ec', href: 'https://www.mutees.ec' },
          ].map(({ icon: Icon, label, value, href }, i, arr) => (
            <a
              key={label + value}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-5 py-3.5 hover:bg-white/5 transition-colors ${i < arr.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              {Icon ? <Icon size={16} className="text-Krankenhaus shrink-0" /> : <span className="w-4 shrink-0" />}
              <span className="text-white/50 text-xs font-sans w-24 shrink-0">{label}:</span>
              <span className="text-white text-sm font-sans">{value}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 pt-2">
        <a
          href="https://linktr.ee/santamuerte"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-Krankenhaus rounded-[50px] text-black text-sm font-bold font-sans text-center hover:opacity-90 transition-opacity"
        >
          Linktree
        </a>
        <p className="text-white/30 text-xs font-sans">Diseño web: mutees.ec</p>
      </div>
    </section>
  )
}

// ─── EPK Footer ───────────────────────────────────────────────────────────────

function EPKFooter() {
  return (
    <footer className="bg-black px-8 md:px-16 pt-8 pb-12 flex flex-col items-center gap-6 border-t border-zinc-900">
      <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-7 object-contain opacity-60" />
      <p className="text-gray-700 text-[10px] tracking-widest text-center">
        © {new Date().getFullYear()} Santamuerte. Todos los derechos reservados.
        <br />
        Electronic Press Kit — Uso exclusivo para medios y promotores.
      </p>
    </footer>
  )
}

// ─── EPK Page ─────────────────────────────────────────────────────────────────

export default function EPK() {
  return (
    <div className="bg-black min-h-screen text-white antialiased max-w-[390px] md:max-w-3xl mx-auto">
      <EPKHero />
      <Bio />
      <CuentasOficiales />
      <Discografia />
      <Logros />
      <EnVivo />
      <Videografia />
      <Recursos />
      <Contactos />
      <EPKFooter />
    </div>
  )
}
