import Reveal from '../components/Reveal'
import { GALLERY } from '../data/content'

export default function Gallery() {
  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
              A look at the work.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} className="group relative aspect-[4/5] overflow-hidden rounded-3xl card-lift">
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-ink text-xs font-semibold">{g.tag}</span>
                <p className="mt-2 font-display text-lg text-ink">{g.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
