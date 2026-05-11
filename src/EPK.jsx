import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple, FaWhatsapp, FaEnvelope
} from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'
import { useTranslation, LangSwitch } from './i18n'

// ─── EPK Hero ─────────────────────────────────────────────────────────────────

function EPKHero() {
  const { t } = useTranslation()
  return (
    <section className="bg-black flex flex-col items-center">
      <div className="w-full relative">
        <img
          src="/foto-portada-9.png"
          alt="Santamuerte en vivo"
          className="w-full object-cover md:max-h-[520px] md:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute top-0 right-0 pt-6 pr-6 flex items-center gap-4">
          <LangSwitch />
          <Link to="/" className="text-white/60 text-xs hover:text-white transition-colors font-sans">
            {t('epk.back')}
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-center px-8 md:px-16 pt-6 pb-8 gap-3 bg-black">
        <img
          src="/santamuerte-title.svg"
          alt="Santamuerte"
          className="w-full max-w-[260px] md:max-w-[340px] object-contain"
        />
        <p className="text-Krankenhaus text-sm md:text-base font-sans">
          {t('epk.heroSub')}
        </p>
        <p className="text-white text-sm md:text-base font-sans italic leading-relaxed max-w-xs md:max-w-md">
          {t('epk.heroQuote')}
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
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-4">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.bioTitle')}
      </h2>
      <p className="w-full text-white text-sm md:text-base font-normal font-sans leading-relaxed text-center">
        {t('epk.bio1')}
      </p>
      <p className="w-full text-white text-sm md:text-base font-normal font-sans leading-relaxed text-center">
        {t('epk.bio2').split('Krankenhaus').map((part, i, arr) =>
          i < arr.length - 1
            ? <React.Fragment key={i}>{part}<strong className="text-Krankenhaus">Krankenhaus</strong></React.Fragment>
            : part
        )}
      </p>
    </section>
  )
}

// ─── Cuentas Oficiales ────────────────────────────────────────────────────────

function CuentasOficiales() {
  const { t } = useTranslation()
  const plataformas = [
    { icon: FaSpotify, label: 'Spotify', handle: 'santamuerte', href: 'https://open.spotify.com/artist/74NZthZThe5AOubJ3r0nGz', color: '#1DB954' },
    { icon: FaInstagram, label: 'Instagram', handle: '@santamuerte.de', href: 'https://www.instagram.com/santamuerte.de/', color: '#E1306C' },
    { icon: FaFacebook, label: 'Facebook', handle: 'santamuerte.de', href: 'https://www.facebook.com/santamuerte.de/', color: '#1877F2' },
    { icon: FaTiktok, label: 'TikTok', handle: '@santamuerte.de', href: 'https://www.tiktok.com/@santamuerte.de', color: '#ffffff' },
    { icon: FaYoutube, label: 'YouTube', handle: '@santamuertemusic', href: 'https://www.youtube.com/@santamuertemusic', color: '#FF0000' },
    { icon: FaApple, label: 'Apple Music', handle: 'santamuerte', href: 'https://music.apple.com/us/artist/santamuerte/1581960487', color: '#ffffff' },
    { icon: SiYoutubemusic, label: 'YouTube Music', handle: '@santamuertemusic', href: 'https://music.youtube.com/@santamuertemusic', color: '#FF0000' },
  ]

  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.accountsTitle')}
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
  { titulo: 'Krankenhaus', año: '2026', descKey: 'epk.discDesc.kh', spotifyId: '5XesW7QJQmcQy6VNzazIyK' },
  { titulo: 'QuitoFest Live', año: '2023', descKey: 'epk.discDesc.qf', spotifyId: '1a3j6f7ZfIEo8gF08PcQht' },
  { titulo: 'Meta More Fuzz', año: '2022', descKey: 'epk.discDesc.mmf', spotifyId: '4rJqHdsdaqONdDZarNQGiH' },
  { titulo: 'Letras de mi Muerte', año: '2015', descKey: 'epk.discDesc.ldmm', spotifyId: '70dngU4WETGLasnW66PLLP' },
]

function Discografia() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.discTitle')}
      </h2>
      <div className="w-full grid grid-cols-1 gap-8">
        {DISCOGRAFIA.map(({ titulo, año, descKey, spotifyId }) => (
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
              <p className="text-white/60 text-xs font-sans leading-relaxed">{t(descKey)}</p>
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
      { brand: '"RADIO 3" ESPAÑA', descKey: 'epk.logros.radio3' },
      { brand: 'NETFLIX', descKey: 'epk.logros.netflix' },
      { brand: '"UNIVERSAL STUDIOS" ORLANDO, EEUU', descKey: 'epk.logros.universal' },
      { brand: 'NEW YORK TIMES', descKey: 'epk.logros.nyt' },
      { brand: 'DUNKIN DONUTS', descKey: 'epk.logros.dunkin' },
    ],
  },
  {
    album: 'Meta More Fuzz',
    items: [
      { brand: '"Initiative Musik gGmgH" ALEMANIA', descKey: 'epk.logros.initiative' },
    ],
  },
]

function Logros() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.logrosTitle')}
      </h2>
      <div className="w-full flex flex-col gap-8">
        {LOGROS_EPK.map(({ album, items }) => (
          <div key={album} className="flex flex-col gap-4">
            <p className="text-white/50 text-[10px] tracking-widest uppercase font-sans border-b border-white/10 pb-2">
              {album}
            </p>
            <div className="flex flex-col gap-4">
              {items.map(({ brand, descKey }) => (
                <div key={brand} className="flex flex-col gap-1">
                  <p className="text-white text-xs font-bold font-sans tracking-wider">{brand}</p>
                  <p className="text-white/60 text-xs font-sans leading-relaxed">{t(descKey)}</p>
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
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.liveTitle')}
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
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.videoTitle')}
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
  { labelKey: 'epk.recursos.fotos', href: 'https://drive.google.com/drive/folders/1EJLrXF0Ynfi0MfDF5JJOKccTy3UUj87v' },
  { labelKey: 'epk.recursos.logos', href: 'https://drive.google.com/drive/folders/1mrcthjjK_mzGN72cRuPkkniG5mJoMR0C?usp=sharing' },
  { labelKey: 'epk.recursos.rider', href: 'https://drive.google.com/file/d/1lhACJW_vsqt0IS_-L7fBO8Plebe-2L2V/view?usp=sharing' },
  { labelKey: 'epk.recursos.stage', href: 'https://drive.google.com/file/d/1w9BSwLrGp2ftLDnCvYTJa6ClyODBQLwE/view?usp=sharing' },
  { labelKey: 'epk.recursos.press', href: 'https://drive.google.com/drive/folders/1QYWlJi7vZEzio0fTyZzFb9G2yxRCiwNU?usp=sharing' },
  { labelKey: 'epk.recursos.singles', href: 'https://drive.google.com/drive/folders/1tM2XT2512nKHYVqnBwijeBMLZXsvSNyz?usp=sharing' },
]

function Recursos() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.recursosTitle')}
      </h2>
      <div className="w-full flex flex-col gap-0 border border-white/10 rounded-xl overflow-hidden">
        {RECURSOS.map(({ labelKey, href }, i) => (
          <a
            key={labelKey}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors ${i < RECURSOS.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <span className="text-white text-sm font-sans">{t(labelKey)}</span>
            <span className="text-Krankenhaus text-lg">↓</span>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Contactos ────────────────────────────────────────────────────────────────

function Contactos() {
  const { t } = useTranslation()
  return (
    <section className="bg-black px-8 md:px-16 py-10 flex flex-col items-center gap-6">
      <h2 className="w-full text-center text-Krankenhaus text-2xl md:text-3xl font-bold font-germania uppercase tracking-wide">
        {t('epk.contactsTitle')}
      </h2>
      <div className="w-full flex flex-col gap-0 border border-white/10 rounded-xl overflow-hidden">
        <p className="text-white/50 text-xs uppercase tracking-widest font-sans px-5 pt-5 pb-3 border-b border-white/10">
          {t('epk.bookingLabel')}
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
          href="https://wa.me/593999400777"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 bg-white rounded-full text-black text-sm font-bold font-sans text-center hover:bg-Krankenhaus transition-colors"
        >
          {t('common.hireEmoji')}
        </a>
        <p className="text-white/30 text-xs font-sans">{t('epk.designCredit')}</p>
      </div>
    </section>
  )
}

// ─── EPK Footer ───────────────────────────────────────────────────────────────

function EPKFooter() {
  const { t } = useTranslation()
  return (
    <footer className="bg-black px-8 md:px-16 pt-8 pb-12 flex flex-col items-center gap-6 border-t border-zinc-900">
      <img src="/logo-santamuerte.svg" alt="Santamuerte" className="h-7 object-contain opacity-60" />
      <p className="text-gray-700 text-[10px] tracking-widest text-center">
        © {new Date().getFullYear()} Santamuerte. {t('common.rights')}
        <br />
        Electronic Press Kit — {t('epk.footerCopy')}
      </p>
    </footer>
  )
}

// ─── EPK Page ─────────────────────────────────────────────────────────────────

export default function EPK() {
  return (
    <div className="bg-black min-h-screen text-white antialiased max-w-[390px] md:max-w-3xl mx-auto">
      <Helmet>
        <title>EPK — Santamuerte | Punk Blues desde Ecuador</title>
        <meta name="description" content="Electronic Press Kit oficial de Santamuerte. Dúo de Punk Blues de Cuenca, Ecuador. Discografía, logros, shows en vivo, videos y contacto para booking." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="EPK — Santamuerte | Punk Blues desde Ecuador" />
        <meta property="og:description" content="Electronic Press Kit oficial de Santamuerte. Sincronizaciones en Netflix, Universal Studios y The New York Times. Booking y prensa." />
        <meta property="og:url" content="https://santamuertemusic.com/epk" />
        <meta property="og:image" content="https://santamuertemusic.com/foto-portada-9.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EPK — Santamuerte | Punk Blues desde Ecuador" />
        <meta name="twitter:description" content="Electronic Press Kit oficial de Santamuerte. Booking, prensa y recursos para promotores." />
        <meta name="twitter:image" content="https://santamuertemusic.com/foto-portada-9.png" />
        <link rel="canonical" href="https://santamuertemusic.com/epk" />
      </Helmet>
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
