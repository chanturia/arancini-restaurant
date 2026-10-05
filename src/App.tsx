import { useEffect, useRef } from 'react'
import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
  useReducedMotion,
} from 'framer-motion'
import {
  createBrowserRouter,
  Link,
  Outlet,
  ScrollRestoration,
  useLocation,
} from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RestaurantMenu from './components/Menu'
import { Invitation } from './components/PageExtras'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { pageMetadata } from './content'

function Layout() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const metadata = pageMetadata[pathname.replace(/\/+$/, '') || '/'] ?? {
      title: 'Η σελίδα δεν βρέθηκε | Arancini',
      description: 'Επιστρέψτε στην αρχική σελίδα του Arancini στην Παλλήνη.',
    }
    document.title = metadata.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', metadata.description)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', metadata.title)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', metadata.description)

    if (previousPath.current !== pathname) {
      document.getElementById('main')?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <div id="top">
      <Header />
      <m.main
        id="main"
        tabIndex={-1}
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.22 }}
      >
        <Outlet />
      </m.main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

function MenuPage() {
  return (
    <>
      <RestaurantMenu />
      <Invitation />
    </>
  )
}

function NotFound() {
  return (
    <section className="shell not-found">
      <span className="eyebrow">404 · ΧΑΘΗΚΑΜΕ;</span>
      <h1 className="page-title">
        Αυτό το τραπέζι
        <br />
        δεν υπάρχει.
      </h1>
      <p>
        Η σελίδα που ζητήσατε δεν βρέθηκε. Η ιταλική γεύση είναι ένα κλικ
        μακριά.
      </p>
      <Link className="button" to="/">
        Επιστροφή στην αρχική
      </Link>
    </section>
  )
}

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/menu', element: <MenuPage /> },
        { path: '/experience', element: <Experience /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <RouterProvider router={router} />
      </LazyMotion>
    </MotionConfig>
  )
}
