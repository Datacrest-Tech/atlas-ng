import Reveal from './Reveal'
import { STATS } from '../data/content'

export default function StatBar() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 md:py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="card-lift bg-ink px-6 py-8 text-center md:text-left">
            <p className="font-display text-3xl md:text-4xl text-accent">{s.value}</p>
            <p className="mt-2 text-xs md:text-sm text-cream-dim">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
