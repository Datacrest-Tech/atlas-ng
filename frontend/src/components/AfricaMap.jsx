import { useNavigate } from 'react-router-dom'
import { AFRICA_VIEWBOX, AFRICA_PATH, HUBS } from '../data/africaGeo'

const LAGOS = HUBS.find((h) => h.primary)

function routeD(a, b) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  // bow the line slightly away from the map's centre for a "route arc" feel
  const dx = b.x - a.x
  const dy = b.y - a.y
  const nx = -dy
  const ny = dx
  const len = Math.hypot(nx, ny) || 1
  const bow = 14
  const cx = mx + (nx / len) * bow
  const cy = my + (ny / len) * bow
  return `M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`
}

export default function AfricaMap({ className = '' }) {
  const navigate = useNavigate()
  const goToContact = (hub) => () => navigate('/contact', { state: { hub: hub.name } })

  return (
    <div className={className}>
      <svg viewBox={AFRICA_VIEWBOX} className="w-full h-full overflow-visible" aria-hidden="false">
        <path d={AFRICA_PATH} fill="var(--color-accent)" fillOpacity="0.06" stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1.2" />

        {HUBS.filter((h) => !h.primary).map((h) => (
          <path
            key={`route-${h.name}`}
            d={routeD(LAGOS, h)}
            fill="none"
            stroke="var(--color-accent-light)"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {HUBS.map((hub) => (
          <g
            key={hub.name}
            className="group cursor-pointer outline-none"
            onClick={goToContact(hub)}
            tabIndex={0}
            role="link"
            aria-label={`Get a quote for a move near ${hub.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') goToContact(hub)()
            }}
          >
            {/* generous invisible hit-area, centred on the dot, so the
               marker is easy to hover/tap and hit-testing isn't skewed by
               the (offset, often invisible) tooltip text below */}
            <circle cx={hub.x} cy={hub.y} r="12" fill="transparent" />

            {hub.primary && (
              <circle cx={hub.x} cy={hub.y} r="7" fill="var(--color-accent)" fillOpacity="0.35" className="animate-ping" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
            )}
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.primary ? 5.5 : 3.5}
              fill="var(--color-accent)"
              stroke="var(--color-ink)"
              strokeWidth={hub.primary ? 2 : 1.5}
              className="transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125"
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <text
              x={hub.x}
              y={hub.y - (hub.primary ? 14 : 10)}
              textAnchor="middle"
              className="font-display fill-accent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none"
              style={{ fontSize: 13, fontWeight: 600 }}
            >
              {hub.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
