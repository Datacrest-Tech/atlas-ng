import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatBar from '../components/StatBar'
import { COMPANY, IMAGES } from '../data/content'

export default function About() {
  return (
    <div>
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-accent-light text-sm font-medium mb-4">About Atlas</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
              The preferred outsourcing partner for relocation in Nigeria.
            </h1>
            <p className="mt-6 text-cream-dim max-w-xl leading-relaxed">
              {COMPANY.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <StatBar />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden border border-black/8 bg-ink card-lift flex items-center justify-center p-8">
            <img
              src={IMAGES.cortCombined}
              alt="Atlas and CORT Global Network branding"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              kicker="Our network"
              title="A member of the CORT Global Network."
              description={COMPANY.network}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-black/8 card-lift">
          <Reveal className="bg-ink p-10 md:p-14">
            <p className="font-display text-2xl text-cream">Our vision</p>
            <p className="mt-4 text-cream-dim leading-relaxed">{COMPANY.vision}</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-ink p-10 md:p-14">
            <p className="font-display text-2xl text-cream">Our mission</p>
            <p className="mt-4 text-cream-dim leading-relaxed">{COMPANY.mission}</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
