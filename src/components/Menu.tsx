import { useSearchParams } from 'react-router'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Leaf, Utensils } from 'lucide-react'
import { menuCategories, readMenuCategory, restaurant } from '../content'
import type { MenuCategoryId } from '../content'
import Reveal from './Reveal'
import { Breadcrumbs } from './PageExtras'
import { assetUrl } from '../assets'

export default function RestaurantMenu() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = readMenuCategory(searchParams.toString())
  const reducedMotion = useReducedMotion()
  const category =
    menuCategories.find(({ id }) => id === selected) ?? menuCategories[0]

  function selectCategory(id: MenuCategoryId) {
    const next = new URLSearchParams(searchParams)
    next.set('menu', id)
    setSearchParams(next, { replace: true, preventScrollReset: true })
  }

  return (
    <section
      id="menu"
      className="menu-section menu-page section-space"
      aria-labelledby="menu-title"
    >
      <div className="shell">
        <Breadcrumbs current="Μενού" />
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">IL MENÙ</span>
            <h1 id="menu-title" className="page-title">
              Βρείτε την <em>αδυναμία</em> σας.
            </h1>
          </div>
          <p>
            Από την πρώτη μπουκιά μέχρι την τελευταία πιρουνιά. Μια γεύση από το
            μενού μας.
          </p>
        </Reveal>
        <div
          className="menu-filters"
          role="group"
          aria-label="Κατηγορίες μενού"
        >
          {menuCategories.map(({ id, label }) => (
            <button
              key={id}
              className={`menu-filter ${selected === id ? 'is-selected' : ''}`}
              onClick={() => selectCategory(id)}
              aria-pressed={selected === id}
              aria-controls="menu-content"
            >
              {id === 'vegan' && <Leaf size={15} aria-hidden="true" />}
              {label}
            </button>
          ))}
        </div>
        <div
          id="menu-content"
          className="menu-content"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={category.id}
              className="menu-layout"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.22 }}
            >
              <div
                className={`menu-photo ${category.image ? '' : 'menu-illustration'}`}
              >
                {category.image ? (
                  <img
                    src={assetUrl(category.image)}
                    alt={category.alt}
                    width={category.id === 'pasta' ? 508 : 1200}
                    height={category.id === 'pasta' ? 640 : 674}
                    loading="lazy"
                  />
                ) : (
                  <div className="menu-art" aria-hidden="true">
                    {selected === 'vegan' ? (
                      <Leaf strokeWidth={0.75} />
                    ) : (
                      <Utensils strokeWidth={0.75} />
                    )}
                    <span>
                      {selected === 'vegan'
                        ? 'Verde, per favore.'
                        : 'Dolce vita.'}
                    </span>
                  </div>
                )}
                <span className="photo-note handwritten" lang="it">
                  {category.italian}
                </span>
              </div>
              <div className="menu-list">
                <span className="eyebrow">{category.label}</span>
                <h3>{category.title}</h3>
                <ul className="dish-list">
                  {category.dishes.map((dish) => (
                    <li key={dish.name}>
                      <h4 lang="it">{dish.name}</h4>
                      <p>{dish.description}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href={restaurant.wolt}
                  className="text-link mt-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Πλήρες μενού & τιμές στη Wolt
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only"> (νέα καρτέλα)</span>
                </a>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
        <p className="menu-footnote">
          Για τη διαθεσιμότητα των πιάτων και πληροφορίες για αλλεργιογόνα,
          ρωτήστε την ομάδα μας.
        </p>
      </div>
    </section>
  )
}
