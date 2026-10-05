import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import Reveal from './Reveal'

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Διαδρομή σελίδας">
      <Link to="/">Αρχική</Link>
      <ChevronRight size={13} aria-hidden="true" />
      <span aria-current="page">{current}</span>
    </nav>
  )
}

export function Invitation() {
  return (
    <section className="invitation-strip" aria-labelledby="invitation-title">
      <Reveal className="shell invitation-inner">
        <div>
          <span className="eyebrow">CI VEDIAMO A TAVOLA</span>
          <h2 id="invitation-title">
            Εσείς φέρτε την <em>παρέα.</em>
          </h2>
        </div>
        <Link className="button" to="/contact">
          Ελάτε να μας βρείτε
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  )
}
