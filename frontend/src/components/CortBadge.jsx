import { IMAGES } from '../data/content'

export default function CortBadge({ label, labelClassName = 'text-cream-dim', className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="w-24 aspect-[6/5] overflow-hidden rounded-lg bg-white shrink-0 ring-1 ring-black/5">
        <img
          src={IMAGES.cortCombined}
          alt="CORT Global Network"
          className="w-full h-full object-cover object-right"
          loading="lazy"
        />
      </div>
      {label && <span className={`text-xs leading-snug max-w-[10rem] ${labelClassName}`}>{label}</span>}
    </div>
  )
}
