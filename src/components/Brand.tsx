import { Link } from 'react-router'
import { assetUrl } from '../assets'

export default function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`brand ${footer ? 'brand-footer' : ''}`}
      to="/"
      aria-label="Arancini — Αρχική"
    >
      <img
        src={assetUrl('/images/brand-ring.jpg')}
        width="150"
        height="150"
        alt=""
        className="brand-ring"
      />
      <span className="brand-type" translate="no">
        <span className="brand-name">ARANCINI</span>
        <span className="brand-descriptor">TRATTORIA SICILIANA</span>
      </span>
    </Link>
  )
}
