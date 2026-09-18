// Content sourced from atlas-ng.com (Atlas Furniture Rentals & Movers, Lagos, Nigeria)
// logo / cortCombined are Atlas's real branding, downloaded to /public/images.
// truckSunset and the GALLERY images below are AI-generated placeholders —
// swap them for real Atlas photography when it's available.

export const IMAGES = {
  logo: '/images/logo.png',
  cortCombined: '/images/cort-combined.jpg',
  truckSunset: '/images/truck-sunset.jpg',
}

export const COMPANY = {
  name: 'Atlas Furniture Rentals',
  short: 'Atlas',
  phone: '+234 706 372 5430',
  email: 'atlas@atlas-ng.com',
  location: 'Ikoyi, Lagos, Nigeria',
  lat: 6.457429,
  lng: 3.439189,
  social: {
    facebook: 'https://www.facebook.com/atlasfurniturerentals',
    twitter: 'https://www.twitter.com/atlasfrentals',
    instagram: 'https://www.instagram.com/atlasfurniturerentals',
  },
  tagline: 'Furniture, storage and move management across Africa, on your timeline.',
  intro:
    'Atlas Furniture Rentals is a leading furniture rental, storage and move management company. Headquartered in Nigeria, we provide services across continental Africa. The expertise of our workforce, our commitment to integrity and accountability, and our network of strategic partners let us deliver a one-stop relocation solution, anywhere, anytime.',
  vision: 'To be the market\u2019s first choice furniture rental service provider in Nigeria.',
  mission: 'To provide furniture and move management services to every client, professionally and on time.',
  network:
    'Atlas is a member of the CORT Global Network, more than 80 partners worldwide, focused on client satisfaction, responsive communication, and quality service delivery.',
}

export const SERVICES = [
  {
    slug: 'furniture-rentals',
    icon: 'sofa',
    title: 'Furniture Rentals & Supplies',
    short: 'Fully furnished homes and offices, delivered and installed fast.',
    description:
      'From single pieces to full apartment and office fit-outs, we supply quality rental furniture for short and long-term stays, ideal for relocating staff, diplomats, and corporate housing. Every package is delivered, assembled and styled by our own team.',
    points: ['Residential & office packages', 'Short and long-term terms', 'Delivery, setup & pickup included', 'Flexible upgrades as your needs change'],
  },
  {
    slug: 'storage-facility',
    icon: 'warehouse',
    title: 'Storage Facility',
    short: 'Secure, climate-aware storage for furniture, files and household goods.',
    description:
      'Our storage facility keeps your belongings safe between moves, whether you\u2019re between homes, downsizing an office, or archiving records. Inventoried, access-controlled, and available on flexible terms.',
    points: ['Inventoried & itemised storage', 'Access-controlled facility', 'Short & long-term plans', 'Easy retrieval scheduling'],
  },
  {
    slug: 'move-management',
    icon: 'route',
    title: 'Move Management',
    short: 'End-to-end relocation, local, national, or cross-border.',
    description:
      'We plan and execute the full move: packing, transport, customs coordination for cross-border relocations, and destination setup. Backed by the CORT Global Network of 80+ partners, we manage relocations anywhere our clients need to be.',
    points: ['Local, national & cross-border moves', 'Packing & careful handling', 'Destination services', 'Single point of contact throughout'],
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Tell us what you need',
    text: 'Share your move date, locations and the services you need: furniture, storage, or full move management.',
  },
  {
    step: '02',
    title: 'We plan the details',
    text: 'Our team scopes an inventoried plan with a single point of contact, whether the move is local or cross-border.',
  },
  {
    step: '03',
    title: 'Delivered & set up',
    text: 'Furniture is delivered, assembled and styled by our own team, with careful packing and handling on move day.',
  },
]

export const NETWORK_BENEFITS = [
  'More than 80 partners spanning every inhabited continent',
  'Consistent quality standards and pricing across every location',
  'A single point of contact, even for cross-border relocations',
  'Responsive communication from quote through delivery',
]

export const FAQS = [
  {
    q: 'Do you offer both short-term and long-term furniture rentals?',
    a: 'Yes. Furniture packages for homes and offices are available on short and long-term terms, delivered, assembled and styled by our own team.',
  },
  {
    q: 'Is delivery and setup included?',
    a: 'Every furniture package includes delivery, setup and pickup, so there is nothing left for you to assemble.',
  },
  {
    q: 'Can you manage a cross-border move?',
    a: 'Yes. We plan and execute local, national and cross-border relocations, including customs coordination, backed by the CORT Global Network of 80+ partners.',
  },
  {
    q: 'Is storage inventoried and secure?',
    a: 'Our storage facility is inventoried and access-controlled, with short and long-term plans and easy retrieval scheduling.',
  },
  {
    q: 'Where does Atlas operate?',
    a: 'We are headquartered in Ikoyi, Lagos, Nigeria, with services across continental Africa and, through the CORT Global Network, partners in 17 countries worldwide.',
  },
]

export const STATS = [
  { label: 'CORT network partners', value: '80+' },
  { label: 'Countries served', value: '17' },
  { label: 'Years in relocation', value: '12+' },
  { label: 'Client satisfaction focus', value: '100%' },
]

export const GALLERY = [
  { title: 'Furnished corporate apartment', tag: 'Furniture Rentals', image: '/images/gallery-1.jpg' },
  { title: 'Executive office fit-out', tag: 'Furniture Rentals', image: '/images/gallery-2.jpg' },
  { title: 'Inventoried storage bay', tag: 'Storage Facility', image: '/images/gallery-3.jpg' },
  { title: 'Cross-border relocation', tag: 'Move Management', image: '/images/gallery-4.jpg' },
  { title: 'Residential move-in day', tag: 'Move Management', image: '/images/gallery-5.jpg' },
  { title: 'Warehouse racking system', tag: 'Storage Facility', image: '/images/gallery-6.jpg' },
]
