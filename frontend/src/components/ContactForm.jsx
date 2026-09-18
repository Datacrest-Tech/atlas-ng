import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { SERVICES, COMPANY } from '../data/content'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }
const withMessage = (message) => ({ ...initialForm, message })

// Web3Forms is a free, no-backend form submission service: it emails
// submissions straight to COMPANY.email. Get a free access key (just an
// email address, no signup) at https://web3forms.com and set it as
// VITE_WEB3FORMS_KEY in a .env file (see .env.example).
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function ContactForm({ initialMessage = '' }) {
  const [form, setForm] = useState(withMessage(initialMessage))
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!WEB3FORMS_KEY) {
      setStatus('error')
      setErrorMsg(
        "Form isn't configured yet: add a free Web3Forms access key as VITE_WEB3FORMS_KEY in your .env file (see README)."
      )
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New quote request from ${form.name}`,
          from_name: 'Atlas Website',
          to: COMPANY.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Something went wrong. Please try again.')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-lift flex flex-col items-start gap-3 p-8 bg-accent/5"
      >
        <CheckCircle2 className="text-accent" size={28} />
        <h3 className="font-display font-semibold text-xl text-cream">Request received</h3>
        <p className="text-sm text-cream-dim">
          Thanks, a member of the Atlas team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-accent hover:text-cream transition-colors"
        >
          Send another request
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" required>
          <input
            required
            value={form.name}
            onChange={update('name')}
            type="text"
            placeholder="Your name"
            className="field"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            value={form.email}
            onChange={update('email')}
            type="email"
            placeholder="you@company.com"
            className="field"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={update('phone')}
            type="tel"
            placeholder="+234"
            className="field"
          />
        </Field>
        <Field label="Service">
          <select value={form.service} onChange={update('service')} className="field">
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" required>
        <textarea
          required
          value={form.message}
          onChange={update('message')}
          rows={5}
          placeholder="Tell us about your move or rental needs..."
          className="field resize-none"
        />
      </Field>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-sm text-red-600">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-light transition-colors disabled:opacity-60"
      >
        {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
        {status === 'loading' ? 'Sending…' : 'Request a free quote'}
      </button>

      <style>{`
        .field {
          width: 100%;
          background: var(--color-ink-soft);
          border: 1px solid transparent;
          border-radius: 0.9rem;
          color: var(--color-cream);
          padding: 0.85rem 1.1rem;
          font-size: 0.9rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .field::placeholder { color: var(--color-cream-dim); opacity: 0.6; }
        .field:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(47, 95, 136, 0.15); }
      `}</style>
    </form>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-cream-dim mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  )
}
