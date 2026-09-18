import { Link } from 'react-router-dom'
import { Sofa, Warehouse, Route, ArrowUpRight } from 'lucide-react'

const ICONS = { sofa: Sofa, warehouse: Warehouse, route: Route }

export default function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] || Sofa

  return (
    <Link
      to={`/services#${service.slug}`}
      className="card-lift group relative flex flex-col justify-between p-8 min-h-[280px] bg-ink hover:-translate-y-1 transition-transform duration-300"
    >
      <span className="absolute top-6 right-8 font-display text-xs text-cream-dim/40">
        0{index + 1}
      </span>

      <div>
        <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-ink shadow-[0_8px_20px_-8px_rgba(184,71,31,0.6)] group-hover:scale-105 transition-transform duration-300">
          <Icon size={22} />
        </div>
        <h3 className="mt-6 font-display text-xl text-cream">{service.title}</h3>
        <p className="mt-3 text-sm text-cream-dim leading-relaxed">{service.short}</p>
      </div>

      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Learn more
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
