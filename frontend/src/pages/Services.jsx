import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Sofa, Warehouse, Route, Check, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SERVICES } from '../data/content'

const ICONS = { sofa: Sofa, warehouse: Warehouse, route: Route }

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }
  }, [hash])

  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">What we do</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
              Three services, built to move you without friction.
            </h1>
          </Reveal>
        </div>
      </section>

      <div>
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon] || Sofa
          const reversed = i % 2 === 1
          return (
            <section id={s.slug} key={s.slug} className={`py-16 md:py-20 scroll-mt-24 ${i % 2 === 1 ? 'bg-ink-soft/50' : ''}`}>
              <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-center">
                <Reveal className={reversed ? 'md:order-2' : ''}>
                  <span className="font-display text-xs text-cream-dim/50">0{i + 1}</span>
                  <div className="mt-4 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-ink shadow-[0_8px_20px_-8px_rgba(47,95,136,0.5)]">
                    <Icon size={26} />
                  </div>
                  <h2 className="mt-6 font-display font-semibold text-3xl text-cream">{s.title}</h2>
                  <p className="mt-4 text-cream-dim leading-relaxed max-w-lg">{s.description}</p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-cream transition-colors"
                  >
                    Ask about this service
                    <ArrowRight size={15} />
                  </Link>
                </Reveal>
                <Reveal delay={0.1} className={reversed ? 'md:order-1' : ''}>
                  <ul className="space-y-4 card-lift bg-ink p-8">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-cream-dim">
                        <Check size={16} className="text-accent mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
