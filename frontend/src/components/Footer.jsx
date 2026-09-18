import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'
import CortBadge from './CortBadge'
import { COMPANY, IMAGES } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative bg-navy overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center bg-ink rounded-xl px-3 py-2">
            <img src={IMAGES.logo} alt={COMPANY.name} className="h-10 w-auto" />
          </Link>
          <p className="mt-5 text-sm text-ink-dim leading-relaxed max-w-sm">
            {COMPANY.intro}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-ink-dim hover:bg-accent hover:text-ink transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={COMPANY.social.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-ink-dim hover:bg-accent hover:text-ink transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-ink-dim hover:bg-accent hover:text-ink transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
          <CortBadge className="mt-7" labelClassName="text-ink-dim" label="Backed by 80+ CORT Global Network partners worldwide." />
        </div>

        <div>
          <h4 className="font-display text-sm text-ink mb-4">Navigate</h4>
          <ul className="space-y-3 text-sm text-ink-dim">
            <li><Link to="/about" className="hover:text-accent-light transition-colors">About us</Link></li>
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-accent-light transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm text-ink mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-ink-dim">
            <li className="flex items-center gap-2"><Phone size={15} className="text-accent-light shrink-0" /> {COMPANY.phone}</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-accent-light shrink-0" /> {COMPANY.email}</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-accent-light shrink-0" /> {COMPANY.location}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-ink-dim/70">
          Copyright © 2012–{new Date().getFullYear()} Atlas NG. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
