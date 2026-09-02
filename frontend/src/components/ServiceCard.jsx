import { Link } from 'react-router-dom'
import { Sofa, Warehouse, Route, ArrowUpRight } from 'lucide-react'

const ICONS = { sofa: Sofa, warehouse: Warehouse, route: Route }

export default function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] || Sofa

  return (
    <Link
      to={`/services#${service.slug}`}
      className="group relative flex flex-col justify-between p-8 min-h-[280px] border border-black/8 hover:border-accent/50 transition-colors duration-300"
    >
      <span className="absolute top-6 right-8 font-display text-xs text-cream-dim/40">
        0{index + 1}
      </span>

      <div>
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:text-ink transition-colors duration-300">
          <Icon size={22} />
        </div>
        <h3 className="mt-6 font-display text-xl text-cream">{service.title}</h3>
        <p className="mt-3 text-sm text-cream-dim leading-relaxed">{service.short}</p>
      </div>

      <span className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent-light">
        Learn more
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
