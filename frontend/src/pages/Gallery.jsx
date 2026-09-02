import Reveal from '../components/Reveal'
import { GALLERY } from '../data/content'

export default function Gallery() {
  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-accent-light text-sm font-medium mb-4">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
              A look at the work.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} className="group relative aspect-[4/5] overflow-hidden border border-black/8 card-lift">
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-accent-light font-medium">{g.tag}</p>
                <p className="mt-1 font-display text-lg text-cream">{g.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
