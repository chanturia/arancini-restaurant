import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { navigation, restaurant } from '../content'
import Brand from './Brand'

export default function Header() {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close()
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Μετάβαση στο περιεχόμενο
      </a>
      <header className="site-header">
        <div className="shell flex items-center justify-between gap-5">
          <Brand />
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Κύρια πλοήγηση"
          >
            {navigation.map(({ href, label }) => (
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-current' : ''}`
                }
                key={href}
                to={href}
                end={href === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="button button-small header-call"
              href={restaurant.telephone}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Καλέστε μας</span>
            </a>
            <button
              className="nav-trigger lg:hidden"
              onClick={() => dialog.current?.showModal()}
              aria-label="Άνοιγμα μενού πλοήγησης"
              aria-haspopup="dialog"
              aria-controls="mobile-navigation"
            >
              <span>Μενού</span>
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="nav-dialog"
        aria-labelledby="navigation-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <div className="nav-dialog-inner">
          <div className="flex items-center justify-between gap-4">
            <span id="navigation-title" className="eyebrow">
              ARANCINI · ΠΑΛΛΗΝΗ
            </span>
            <button
              className="icon-button"
              aria-label="Κλείσιμο πλοήγησης"
              onClick={() => dialog.current?.close()}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Πλοήγηση κινητού">
            {navigation.map(({ href, label }, index) => (
              <NavLink
                key={href}
                to={href}
                end={href === '/'}
                className={({ isActive }) => (isActive ? 'is-current' : '')}
                onClick={() => dialog.current?.close()}
              >
                <span className="mobile-nav-number">0{index + 1}</span>
                {label}
                <ArrowUpRight size={22} aria-hidden="true" />
              </NavLink>
            ))}
          </nav>
          <p className="handwritten text-terracotta">Ci vediamo a tavola.</p>
          <a className="button mt-6 w-full" href={restaurant.telephone}>
            <Phone size={17} aria-hidden="true" />
            {restaurant.phone}
          </a>
          <p className="mt-5 text-sm text-muted">
            {restaurant.address} · {restaurant.city}
          </p>
        </div>
      </dialog>
    </>
  )
}
