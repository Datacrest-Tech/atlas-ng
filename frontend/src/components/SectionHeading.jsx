export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {kicker && <p className="text-accent-light text-sm font-medium mb-3">{kicker}</p>}
      <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight">{title}</h2>
      {description && <p className="mt-4 text-cream-dim leading-relaxed">{description}</p>}
    </div>
  )
}
