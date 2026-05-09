import React from 'react'

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-black flex flex-col items-center">
      {/* Nav */}
      <nav className="w-full flex justify-center pt-6 pb-16 px-6 absolute z-10">
        <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-10 md:h-14 object-contain" />
      </nav>

      {/* Imagen habitación */}
      <div className="w-full relative mt-[50px]">
        <img
          src="/habitacion.png"
          alt="Krankenhaus"
          className="w-full object-cover md:max-h-[600px] md:object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Contenido: título, quote, logos */}
      <div
        className="w-full flex flex-col items-center text-center px-8 md:px-16 pt-8 pb-5 gap-2 -mt-[100px] relative z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, black 30%)' }}
      >
        <img
          src="/logo-kh.svg"
          alt="KRANKENHAUS"
          className="w-full max-w-[220px] md:max-w-[320px] object-contain"
        />
        <p className="text-white text-sm md:text-base max-w-xs md:max-w-md leading-relaxed">
          "Santamuerte es una banda que desafía el miedo a la muerte..."{' '}
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
        href="https://linktr.ee/santamuerte"
        target="_blank"
        rel="noopener noreferrer"
        className="text-Krankenhaus text-xs md:text-sm underline underline-offset-4 font-sans mt-3"
      >
        Escuchar en otras plataformas
      </a>
    </section>
  )
}

// ─── Álbum ───────────────────────────────────────────────────────────────────

function Album() {
  return (
    <section className="bg-black px-8 md:px-24 py-10 flex flex-col items-start gap-2.5">
      <h2 className="w-full text-center text-Krankenhaus text-3xl md:text-4xl font-bold font-sans">
        Krankenhaus (2026)
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans leading-relaxed">
        "Testimonios de un viaje mental. 10 canciones nacidas del aislamiento absoluto y la
        introspección obligatoria. Es Punk Blues crudo; sin adornos, solo la urgencia de volver
        a la sala de ensayo a reventarnos los oídos."
      </p>
      <p className="w-full text-center text-white text-xs md:text-sm font-bold font-sans">
        Producido por Daniel Alba.
      </p>
    </section>
  )
}

// ─── Video en vivo ───────────────────────────────────────────────────────────

function LiveVideo() {
  return (
    <section className="bg-black px-8 md:px-16 py-6 flex flex-col items-center gap-4">
      <h2 className="w-full text-center text-Krankenhaus text-xl md:text-2xl font-bold font-sans">
        El ritual: En vivo
      </h2>
      <img
        src="/foto-ritual.png"
        alt="El ritual en vivo"
        className="w-full md:max-w-2xl object-cover rounded"
      />
      <div className="relative w-full md:max-w-sm" style={{ aspectRatio: '9/16' }}>
        <iframe
          src="https://www.youtube.com/embed/U8c8pz2rgQc"
          title="El ritual: En vivo — Santamuerte"
          className="absolute inset-0 w-full h-full rounded"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}

// ─── Highlights de Gira ──────────────────────────────────────────────────────

function TourHighlights() {
  return (
    <section className="bg-black px-8 md:px-24 py-10 flex flex-col items-start gap-3">
      <h2 className="w-full text-center text-Krankenhaus text-xl md:text-2xl font-bold font-sans">
        Highlights de Gira
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans leading-loose">
        Relevant Music Hall — Bogotá, Colombia (2025)
        <br />
        Quitofest — Quito, Ecuador (2023)
        <br />
        Umsonst und Draussen — Karlstadt, Alemania (2018)
      </p>
    </section>
  )
}

// ─── Logros ──────────────────────────────────────────────────────────────────

const LOGROS = [
  { nombre: 'NEW YORK TIMES', desc: 'Música para el documental "The fastest girl alive - Nike".' },
  { nombre: 'NETFLIX', desc: 'Música para la serie "Tex Mex Motors".' },
  { nombre: 'UNIVERSAL STUDIOS', desc: 'Música para Halloween Horror Nights (Orlando).' },
  { nombre: 'RADIO 3 ESPAÑA', desc: 'Disco de la Semana 2016.' },
]

function Logros() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-start gap-3">
      <h2 className="w-full text-center text-Krankenhaus text-xl md:text-2xl font-bold font-sans">
        Logros destacados
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {LOGROS.map(({ nombre, desc }) => (
          <div key={nombre} className="flex flex-col items-center gap-1">
            <p className="text-white text-sm md:text-base font-bold font-sans">{nombre}</p>
            <p className="text-white text-xs md:text-sm font-normal font-sans text-center">{desc}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center pt-4">
        <img
          src="/logos-prensa.png"
          alt="Universal — The New York Times — Netflix"
          className="w-full max-w-xs md:max-w-sm object-contain"
        />
      </div>
    </section>
  )
}

// ─── La historia ─────────────────────────────────────────────────────────────

const HISTORIA = [
  {
    titulo: 'QuitoFest Live (2023)',
    desc: 'Fin de la gira Meta More Fuzz',
    spotifyId: '1a3j6f7ZfIEo8gF08PcQht',
  },
  {
    titulo: 'Meta More Fuzz (2022)',
    desc: 'La metamorfosis entre Alemania y Ecuador.',
    spotifyId: '4rJqHdsdaqONdDZarNQGiH',
  },
  {
    titulo: 'Letras de mi Muerte (2015)',
    desc: 'El origen en los bares, el caos y el vinilo.',
    spotifyId: '70dngU4WETGLasnW66PLLP',
  },
]

function Historia() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-start gap-3">
      <h2 className="w-full text-center text-Krankenhaus text-xl md:text-2xl font-bold font-sans">
        La historia
      </h2>
      <p className="w-full text-center text-white text-sm md:text-base font-normal font-sans">
        Un resumen rápido para dar contexto a los 13 años.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
        {HISTORIA.map(({ titulo, desc, spotifyId }) => (
          <div key={titulo} className="flex flex-col gap-1">
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
            <p className="w-full text-center text-sm font-sans mt-1">
              <strong className="text-white font-bold">{titulo}: </strong>
              <span className="text-white font-normal text-xs">{desc}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── La banda + CTA ──────────────────────────────────────────────────────────

function LaBanda() {
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-5">
      <h2 className="w-full text-center text-Krankenhaus text-xl md:text-2xl font-bold font-sans">
        La banda
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src="/foto-banda.png"
          alt="Santamuerte — La banda"
          className="w-full md:w-64 md:flex-shrink-0 object-cover rounded-lg"
        />
        <div className="flex flex-col items-center md:items-start gap-5">
          <p className="text-center md:text-left text-white text-xs md:text-sm font-normal font-sans leading-relaxed">
            Fundada en Ecuador en 2013, Santamuerte es un dúo de Punk Blues visceral conformado
            por Juan F. Rojas y Sebastián Tamariz K. Con un formato crudo de guitarra y batería,
            han transformado el underground ecuatoriano en un proyecto de impacto global,
            alcanzando sincronizaciones en Netflix y Universal Studios, además del reconocimiento
            de The New York Times.
            <br />
            <br />
            Actualmente, la banda presenta su tercer LP, Krankenhaus (2026) —producido por Daniel
            Alba—, un testimonio de introspección y catarsis que cobra vida en los escenarios a
            través de un ritual escénico inmersivo, donde un ataúd, y una descarga sonora y visual
            sin concesiones desafían el miedo a la muerte.
          </p>
          <a
            href="https://wa.me/593999400777"
            className="px-10 py-3 bg-white rounded-[50px] text-black text-sm font-bold font-sans text-center"
          >
            Contrátanos 👈
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white antialiased max-w-[390px] md:max-w-3xl mx-auto">
      <Hero />
      <MusicPlayer />
      <Album />
      <LiveVideo />
      <TourHighlights />
      <Logros />
      <Historia />
      <LaBanda />
    </div>
  )
}
