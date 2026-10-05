import { m, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { Link, Navigate, useLocation } from 'react-router'
import Reveal from '../components/Reveal'
import { Invitation } from '../components/PageExtras'
import { legacyDestination, restaurant } from '../content'
import { assetUrl } from '../assets'

function OliveBranch() {
  return (
    <svg
      className="olive-branch"
      viewBox="0 0 180 280"
      fill="none"
      aria-hidden="true"
    >
      <path d="M24 276C47 212 88 168 102 107C110 71 128 37 161 8" />
      <path d="M48 222C15 212 4 185 8 157C32 166 50 187 48 222ZM66 195C100 195 128 177 138 150C105 151 76 169 66 195ZM81 162C51 145 47 118 48 97C72 110 84 134 81 162ZM96 127C124 126 153 109 164 80C135 85 106 102 96 127ZM109 89C86 72 90 44 97 29C111 49 116 69 109 89ZM129 47C150 46 171 29 176 8C155 13 137 27 129 47Z" />
      <path d="M48 222L15 171M66 195L125 158M81 162L53 111M96 127L151 92M109 89L98 44M129 47L166 17" />
    </svg>
  )
}

function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <m.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.05 }}
        >
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            ΜΙΑ ΓΕΥΣΗ ΙΤΑΛΙΑΣ ΣΤΗΝ ΠΑΛΛΗΝΗ
          </div>
          <h1 id="hero-title">
            Ιταλική γεύση,
            <br />
            <em>στην Παλλήνη.</em>
          </h1>
          <p className="hero-description">
            Μικρές ιταλικές απολαύσεις.
            <br />
            Μεγάλες στιγμές γύρω από το τραπέζι.
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-6">
            <a className="button" href={restaurant.telephone}>
              <Phone size={18} aria-hidden="true" />
              Καλέστε μας
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link className="text-link" to="/menu">
              Δείτε το μενού
              <ArrowDown size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-phone">
            <a href={restaurant.telephone}>{restaurant.phone}</a>
            <span>Ci vediamo a tavola.</span>
          </p>
        </m.div>
        <div className="hero-bottom">
          <span className="handwritten" lang="it">
            La vita è più buona <br />
            insieme.
          </span>
          <span className="hero-location">
            <MapPin size={15} aria-hidden="true" />
            Λεωφ. Μαραθώνος 56
          </span>
        </div>
        <OliveBranch />
      </div>
      <div className="hero-visual">
        <m.img
          className="hero-image"
          src={assetUrl('/images/arancini.jpg')}
          alt="Η πιατέλα arancini του εστιατορίου, με παρμεζάνα και πράσινα φύλλα"
          width="1200"
          height="674"
          fetchPriority="high"
          initial={{ scale: reducedMotion ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: reducedMotion ? 0 : 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <span className="hero-photo-note handwritten" lang="it">
          Piccoli piaceri,
          <br />
          grandi emozioni.
        </span>
        <div className="hero-image-caption">
          <span lang="it">I NOSTRI ARANCINI</span>
          <span>Μια μικρή γεύση Σικελίας.</span>
        </div>
        <a
          className="hero-scroll"
          href="#table"
          aria-label="Ανακαλύψτε τις γεύσεις μας"
        >
          <ArrowDown size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

const favourites = [
  {
    title: 'Arancini',
    subtitle: 'Η πρώτη μπουκιά που γίνεται αγαπημένη.',
    image: '/images/arancini.jpg',
    alt: 'Πιατέλα με arancini και παρμεζάνα',
    className: 'arancini-card',
    category: 'arancini',
  },
  {
    title: 'Πίτσα',
    subtitle: 'Ένα κομμάτι ακόμα. Πάντα.',
    image: '/images/pizza.jpg',
    alt: 'Φρεσκοψημένη πίτσα Margherita',
    className: 'pizza-card',
    category: 'pizza',
  },
  {
    title: 'Ζυμαρικά',
    subtitle: 'Ιταλικές γεύσεις, πιρουνιά με πιρουνιά.',
    image: '/images/pasta.jpg',
    alt: 'Κοντινή φωτογραφία ζυμαρικών στο πιρούνι',
    className: 'pasta-card',
    category: 'pasta',
  },
]

function Favourites() {
  return (
    <section
      id="table"
      className="favourites section-space"
      aria-labelledby="table-title"
    >
      <div className="shell">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">A TAVOLA</span>
            <h2 id="table-title">Στο τραπέζι.</h2>
          </div>
          <p>
            Λίγη Ιταλία, καλή παρέα.
            <br />
            Και οι γεύσεις που μας φέρνουν κοντά.
          </p>
        </Reveal>
        <div className="food-grid">
          {favourites.map((food, index) => (
            <Reveal key={food.title} delay={index * 0.09} className="food-card">
              <Link
                to={`/menu?menu=${food.category}`}
                className="food-card-link"
                aria-label={`${food.title} — δείτε το μενού`}
              >
                <div className={`food-photo ${food.className}`}>
                  <img
                    src={assetUrl(food.image)}
                    alt={food.alt}
                    width={food.title === 'Ζυμαρικά' ? 508 : 1200}
                    height={food.title === 'Ζυμαρικά' ? 640 : 674}
                    loading="lazy"
                  />
                  <span className="food-number">0{index + 1}</span>
                  <span className="food-arrow">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </span>
                </div>
                <div className="food-card-copy">
                  <h3>{food.title}</h3>
                  <p>{food.subtitle}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { search, hash } = useLocation()
  const legacy = legacyDestination(search, hash)
  if (legacy) return <Navigate to={legacy} replace />
  return (
    <>
      <Hero />
      <Favourites />
      <Invitation />
    </>
  )
}
