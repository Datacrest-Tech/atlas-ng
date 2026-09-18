import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display font-bold text-8xl text-accent">404</p>
      <p className="mt-4 text-cream-dim">This route doesn't exist.</p>
      <Link to="/" className="btn-glow mt-8 px-6 py-3 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-light transition-colors">
        Back home
      </Link>
    </div>
  )
}
