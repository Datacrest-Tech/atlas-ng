import { Phone, Mail, MapPin } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { COMPANY } from '../data/content'

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${COMPANY.lat},${COMPANY.lng}&z=13&output=embed`
  const hub = useLocation().state?.hub

  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">
              {hub ? `Get in touch — ${hub}` : 'Get in touch'}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
              Tell us what you're moving, we'll take it from there.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1fr_1.3fr] gap-16">
          <Reveal>
            <div className="space-y-6">
              <ContactItem icon={Phone} label="Phone" value={COMPANY.phone} href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} />
              <ContactItem icon={Mail} label="Email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
              <ContactItem icon={MapPin} label="Head office" value={COMPANY.location} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm initialMessage={hub ? `I'm interested in relocation or storage services connected to your ${hub} hub.` : ''} />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="overflow-hidden rounded-3xl aspect-[16/7] card-lift">
            <iframe
              title="Atlas office location"
              src={mapSrc}
              className="w-full h-full"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 card-lift bg-ink p-6">
      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-ink shrink-0">
        <Icon size={17} />
      </div>
      <div>
        <p className="text-xs text-cream-dim">{label}</p>
        <p className="mt-1 text-cream font-medium">{value}</p>
      </div>
    </div>
  )
  return href ? <a href={href} className="block hover:-translate-y-0.5 transition-transform">{content}</a> : content
}
