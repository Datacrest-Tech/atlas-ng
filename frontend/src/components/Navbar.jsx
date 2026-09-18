import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY, IMAGES } from '../data/content'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md shadow-[0_1px_0_rgba(32,20,10,0.06),0_12px_30px_-20px_rgba(32,20,10,0.35)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img src={IMAGES.logo} alt={COMPANY.name} className="h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors pb-1 ${
                  isActive
                    ? 'text-accent after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent'
                    : 'text-cream-dim hover:text-cream'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm text-cream-dim hover:text-cream transition-colors"
          >
            <Phone size={15} />
            {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="btn-glow px-5 py-2.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-light transition-colors"
          >
            Get a quote
          </Link>
        </div>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-ink shadow-[0_12px_30px_-20px_rgba(32,20,10,0.35)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold ${isActive ? 'text-accent' : 'text-cream-dim'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-accent text-ink text-sm font-semibold text-center"
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
