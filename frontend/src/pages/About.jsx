import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatBar from '../components/StatBar'
import { COMPANY, IMAGES, NETWORK_BENEFITS } from '../data/content'

export default function About() {
  return (
    <div>
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">About Atlas</p>
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
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink card-lift flex items-center justify-center p-8">
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
            <ul className="mt-8 space-y-4">
              {NETWORK_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-cream-dim leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="btn-glow mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-light transition-colors"
            >
              Request a free quote
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-5">
          <Reveal className="card-lift bg-ink p-10 md:p-14">
            <p className="font-display font-semibold text-2xl text-cream">Our vision</p>
            <p className="mt-4 text-cream-dim leading-relaxed">{COMPANY.vision}</p>
          </Reveal>
          <Reveal delay={0.1} className="card-lift bg-navy p-10 md:p-14">
            <p className="font-display font-semibold text-2xl text-ink">Our mission</p>
            <p className="mt-4 text-ink-dim leading-relaxed">{COMPANY.mission}</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
