import Reveal from './Reveal'
import { STATS } from '../data/content'

export default function StatBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-black/8 bg-ink">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="px-6 py-10 border-r border-black/8 last:border-r-0">
          <p className="font-display text-3xl md:text-4xl text-accent-light">{s.value}</p>
          <p className="mt-2 text-xs md:text-sm text-cream-dim">{s.label}</p>
        </Reveal>
      ))}
    </div>
  )
}
