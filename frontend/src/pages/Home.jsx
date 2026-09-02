import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AfricaMap from '../components/AfricaMap'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import StatBar from '../components/StatBar'
import { COMPANY, SERVICES, IMAGES } from '../data/content'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent-light text-sm font-medium mb-5"
            >
              Furniture rentals · Storage · Move management
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-cream"
            >
              Relocation, furnished — across Nigeria and the CORT global network.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-cream-dim leading-relaxed max-w-md"
            >
              {COMPANY.tagline} From a single rented sofa to a full cross-border office move,
              our team handles it, backed by 80+ partners worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-light transition-colors"
              >
                Request a free quote
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/15 text-cream text-sm font-semibold hover:border-black/40 transition-colors"
              >
                Explore services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[360px] sm:h-[440px] md:h-[500px]"
          >
            <AfricaMap className="absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
          </motion.div>
        </div>
      </section>

      <StatBar />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionHeading
              kicker="Who we are"
              title="A one-stop relocation partner, built on the CORT global network."
              description={COMPANY.intro}
            />
          </Reveal>
          <Reveal delay={0.1} className="border border-black/8 bg-ink card-lift p-8">
            <p className="font-display text-lg text-cream">Our vision</p>
            <p className="mt-3 text-sm text-cream-dim leading-relaxed">{COMPANY.vision}</p>
            <div className="my-6 h-px bg-black/8" />
            <p className="font-display text-lg text-cream">Our mission</p>
            <p className="mt-3 text-sm text-cream-dim leading-relaxed">{COMPANY.mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              kicker="What we do"
              title="Three services, one accountable team."
              description="Our aim is to deliver solutions that help clients with property search, relocation management, storage and furnishing — end to end."
            />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 card-lift">
            {SERVICES.map((s, i) => (
              <div key={s.slug} className="bg-ink">
                <Reveal delay={i * 0.1}>
                  <ServiceCard service={s} index={i} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network / image section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 md:order-1 relative aspect-[4/3] overflow-hidden border border-black/8 card-lift">
            <img
              src={IMAGES.truckSunset}
              alt="Atlas relocation truck on the road at sunset"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 md:order-2">
            <SectionHeading
              kicker="Global network"
              title="Part of the CORT Global Network."
              description={COMPANY.network}
            />
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:text-cream transition-colors"
            >
              More about Atlas
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="relative overflow-hidden border border-accent/30 bg-ink-soft card-lift px-8 py-16 md:px-16 md:py-20 text-center">
            <p className="text-accent-light text-sm font-medium mb-4">Ready when you are</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream max-w-xl mx-auto leading-tight">
              Tell us where you're moving. We'll handle the rest.
            </h2>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-light transition-colors"
            >
              Request a free quote
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
