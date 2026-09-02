# Atlas Furniture Rentals — Website Revamp

A full redesign of atlas-ng.com for Atlas Furniture Rentals (furniture rental,
storage and move management, Lagos, Nigeria / CORT Global Network).

**Pure frontend, no backend to host.** React + Vite, Tailwind CSS v4, Framer
Motion, React Three Fiber (3D globe hero). The contact form submits directly
to [Web3Forms](https://web3forms.com), a free form-to-email service — so
there's no server for you to run, deploy, or maintain.

## Project structure

```
atlas-ng/
└── frontend/
    ├── src/
    │   ├── components/   Navbar, Footer, Globe3D, ContactForm, etc.
    │   ├── pages/         Home, About, Services, Gallery, Contact
    │   └── data/          content.js — all site copy & image URLs
    └── .env.example       VITE_WEB3FORMS_KEY
```

## Setup

You'll need Node.js 18+.

```bash
cd frontend
npm install
cp .env.example .env
```

**Get your contact form working (30 seconds, no account needed):**
1. Go to https://web3forms.com
2. Enter your email (`atlas@atlas-ng.com` or whichever inbox should receive
   quote requests) — they'll email you a free access key instantly.
3. Paste that key into `.env` as `VITE_WEB3FORMS_KEY=...`

Without this key, the form will show a friendly "not configured yet" message
instead of failing silently.

## Running locally

```bash
npm run dev       # http://localhost:5173
```

## Building & deploying

```bash
npm run build      # outputs to frontend/dist
```

`dist/` is a fully static site — deploy it anywhere that serves static
files: Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, Nginx, etc.
Just make sure `VITE_WEB3FORMS_KEY` is set as an environment variable in
your hosting provider's build settings (it gets baked into the build at
build time, not read at runtime).

## Notes & next steps

- **Images**: the site currently hotlinks the original images directly from
  `atlas-ng.com` / `saucestudiosng.com` (see `src/data/content.js`). Download
  these into `public/images/` and update the paths before going live — don't
  rely on hotlinking another host's assets long-term.
- **Contact form**: Web3Forms's free tier covers small-business volume and
  includes spam filtering. If you outgrow it or want submissions saved to a
  spreadsheet/CRM, swap the fetch call in `src/components/ContactForm.jsx`
  for Formspree, EmailJS, or a small serverless function — no other code
  changes needed.
- **Content**: copy was sourced from the current atlas-ng.com (About, Services,
  Vision/Mission, contact info). Swap in higher-resolution photography of
  actual Atlas properties/moves when available — the Gallery and service
  sections are built to drop in real project photos.
- The 3D globe hero (`src/components/Globe3D.jsx`) uses approximate hub
  coordinates (Lagos + a few illustrative global cities) to visualize the
  CORT Global Network — swap in the actual partner city list if you have it.
