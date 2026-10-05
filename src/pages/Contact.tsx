import { ArrowUpRight, Clock3, MapPin, Phone, Plus } from 'lucide-react'
import Reveal from '../components/Reveal'
import { Breadcrumbs } from '../components/PageExtras'
import { questions, restaurant } from '../content'
import { assetUrl } from '../assets'

function Visit() {
  return (
    <section id="visit" className="visit-section" aria-labelledby="visit-title">
      <div className="shell">
        <Breadcrumbs current="Επικοινωνία" />
      </div>
      <div className="shell visit-grid">
        <Reveal className="visit-invitation">
          <span className="eyebrow">CI VEDIAMO PRESTO</span>
          <h1 id="visit-title" className="page-title">
            Τα λέμε
            <br />
            στο <em>Arancini.</em>
          </h1>
          <p>
            Η επόμενη όμορφη στιγμή
            <br />
            ξεκινά γύρω από ένα τραπέζι.
          </p>
          <a className="button button-cream mt-8" href={restaurant.telephone}>
            <Phone size={18} aria-hidden="true" />
            Καλέστε μας
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={0.1} className="visit-details">
          <div className="visit-detail">
            <MapPin size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <span className="detail-label">ΘΑ ΜΑΣ ΒΡΕΙΤΕ</span>
              <p>
                {restaurant.address}
                <br />
                {restaurant.city}
              </p>
              <a
                className="text-link"
                href={restaurant.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Οδηγίες πρόσβασης
                <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only"> (νέα καρτέλα)</span>
              </a>
            </div>
          </div>
          <div className="visit-detail">
            <Phone size={22} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <span className="detail-label">ΓΙΑ ΤΡΑΠΕΖΙ & ΠΛΗΡΟΦΟΡΙΕΣ</span>
              <a className="visit-phone" href={restaurant.telephone}>
                {restaurant.phone}
              </a>
            </div>
          </div>
          <div className="visit-detail">
            <Clock3 size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <span className="detail-label">ΠΡΙΝ ΤΗΝ ΕΠΙΣΚΕΨΗ</span>
              <p className="visit-small">
                Για το ωράριο και τη διαθεσιμότητα,
                <br />
                επικοινωνήστε μαζί μας.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <img
        className="visit-watermark"
        src={assetUrl('/images/brand-ring.jpg')}
        width="150"
        height="150"
        alt=""
        loading="lazy"
      />
    </section>
  )
}

function UsefulDetails() {
  return (
    <section
      className="useful-section section-space"
      aria-labelledby="useful-title"
    >
      <div className="shell useful-grid">
        <Reveal>
          <span className="eyebrow">BUONO A SAPERSI</span>
          <h2 id="useful-title">
            Καλό να
            <br />
            το <em>ξέρετε.</em>
          </h2>
          <p className="mt-6 max-w-sm text-muted">
            Η αγαπημένη σας ιταλική γεύση, και στο σπίτι σας.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="delivery-link"
              href={restaurant.wolt}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wolt
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (νέα καρτέλα)</span>
            </a>
            <a
              className="delivery-link"
              href={restaurant.efood}
              target="_blank"
              rel="noopener noreferrer"
            >
              efood
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (νέα καρτέλα)</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="faq-list">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <Visit />
      <UsefulDetails />
    </>
  )
}
