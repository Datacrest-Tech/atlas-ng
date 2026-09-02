import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'
import { COMPANY, IMAGES } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ink-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center">
            <img src={IMAGES.logo} alt={COMPANY.name} className="h-11 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-cream-dim leading-relaxed max-w-sm">
            {COMPANY.intro}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" className="text-cream-dim hover:text-accent-light transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={COMPANY.social.twitter} target="_blank" rel="noreferrer" className="text-cream-dim hover:text-accent-light transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" className="text-cream-dim hover:text-accent-light transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm text-cream mb-4">Navigate</h4>
          <ul className="space-y-3 text-sm text-cream-dim">
            <li><Link to="/about" className="hover:text-cream transition-colors">About us</Link></li>
            <li><Link to="/services" className="hover:text-cream transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-cream transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm text-cream mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-cream-dim">
            <li className="flex items-center gap-2"><Phone size={15} className="text-accent-light shrink-0" /> {COMPANY.phone}</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-accent-light shrink-0" /> {COMPANY.email}</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-accent-light shrink-0" /> {COMPANY.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-cream-dim/70">
          Copyright © 2012–{new Date().getFullYear()} Atlas NG. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
