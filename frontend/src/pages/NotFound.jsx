import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-7xl text-accent-light">404</p>
      <p className="mt-4 text-cream-dim">This route doesn't exist.</p>
      <Link to="/" className="mt-8 px-6 py-3 rounded-full bg-accent text-ink text-sm font-semibold">
        Back home
      </Link>
    </div>
  )
}
