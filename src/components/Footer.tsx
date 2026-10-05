import { ArrowUpRight, Camera, MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router'
import Brand from './Brand'
import { navigation, restaurant } from '../content'

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <Brand footer />
            <span className="handwritten" lang="it">
              A presto!
            </span>
            <div className="flex items-center gap-3">
              <a
                className="social-link"
                href={restaurant.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arancini στο Instagram (νέα καρτέλα)"
              >
                <Camera size={21} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                className="social-link facebook-link"
                href={restaurant.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arancini στο Facebook (νέα καρτέλα)"
              >
                f
              </a>
            </div>
          </div>
          <nav className="footer-navigation" aria-label="Πλοήγηση υποσέλιδου">
            {navigation.map(({ href, label }) => (
              <NavLink to={href} end key={href}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Arancini · Trattoria Siciliana</p>
            <a href={restaurant.maps} target="_blank" rel="noopener noreferrer">
              {restaurant.address}, Παλλήνη
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> (νέα καρτέλα)</span>
            </a>
            <a href="#top">Επιστροφή στην αρχή ↑</a>
          </div>
        </div>
      </footer>
      <nav className="mobile-actions" aria-label="Γρήγορη επικοινωνία">
        <a href={restaurant.telephone}>
          <Phone size={17} aria-hidden="true" />
          Καλέστε μας
        </a>
        <a href={restaurant.maps} target="_blank" rel="noopener noreferrer">
          <MapPin size={18} aria-hidden="true" />
          Οδηγίες<span className="sr-only"> (νέα καρτέλα)</span>
        </a>
      </nav>
    </>
  )
}
