import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import Reveal from '../components/Reveal'
import { Breadcrumbs, Invitation } from '../components/PageExtras'
import { assetUrl } from '../assets'

function ExperienceContent() {
  return (
    <section
      id="experience"
      className="experience experience-page section-space"
      aria-labelledby="experience-title"
    >
      <div className="shell experience-grid">
        <Reveal className="experience-visual">
          <div className="experience-image">
            <img
              src={assetUrl('/images/dining.jpg')}
              alt="Παρέες μοιράζονται πίτσα και ιταλικά πιάτα στον χώρο του Arancini στην Παλλήνη"
              width="640"
              height="427"
              loading="lazy"
            />
          </div>
          <div className="experience-note">
            <span className="handwritten" lang="it">
              Il bello di stare insieme.
            </span>
            <span>Η ομορφιά του να είμαστε μαζί.</span>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="experience-copy">
          <span className="eyebrow">BENVENUTI A CASA</span>
          <h1 id="experience-title" className="page-title">
            Η Ιταλία,
            <br />
            λίγο πιο <em>κοντά.</em>
          </h1>
          <p className="experience-lead">
            Στη μέση το φαγητό.
            <br />
            Γύρω του, οι άνθρωποί σας.
          </p>
          <p>
            Μια έξοδος για δύο, ένα τραπέζι με φίλους ή απλώς η επιθυμία για
            ιταλική γεύση. Στο Arancini, η αφορμή για να βρεθούμε είναι πάντα
            νόστιμη.
          </p>
          <p>
            Σας περιμένουμε στη Λεωφόρο Μαραθώνος 56, στην Παλλήνη. Εσείς φέρτε
            την παρέα.
          </p>
          <Link className="text-link mt-7" to="/contact">
            Πάμε Arancini
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <div className="experience-signoff">
            <img
              src={assetUrl('/images/brand-ring.jpg')}
              width="150"
              height="150"
              alt=""
            />
            <span className="handwritten" lang="it">
              Con amore, Arancini.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <>
      <div className="shell page-breadcrumbs">
        <Breadcrumbs current="Η εμπειρία" />
      </div>
      <ExperienceContent />
      <Invitation />
    </>
  )
}
