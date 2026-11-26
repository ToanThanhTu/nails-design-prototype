// Content specific to the Soft Luxe site. Studio basics (name, city, email...)
// come from ../../shared/content so they stay in sync with the other designs.

export type LuxePage = 'home' | 'about' | 'services' | 'gallery' | 'contact'

export const navItems: { id: LuxePage; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

/** Link to a Soft Luxe page; keeps the design switcher on "Soft Luxe". */
export const pageHref = (page: LuxePage) => (page === 'home' ? '?design=luxe' : `?design=luxe&page=${page}`)

export const tones = {
  nude: '#D9BBA9',
  mauve: '#7A4A57',
  blush: '#E7C6C4',
  pearl: '#EFE6DF',
  champagne: '#E3D2B8',
  espresso: '#4A3530',
  rose: '#C99A9E',
  mocha: '#8A6458',
  linen: '#EBDFD6',
  cocoa: '#6E4A40',
  shell: '#E8DCD3',
  clay: '#B88C82',
}

export const signatureTreatments = [
  {
    name: 'Signature gel manicure',
    text: 'Careful shaping, cuticle care and a flawless gel finish in the colour of your choice.',
    price: 'from [PRICE]',
    tone: tones.nude,
    caption: 'Photo: glossy nude gel',
  },
  {
    name: 'Structured gel (BIAB)',
    text: 'A strengthening overlay that protects natural nails while they grow long and healthy.',
    price: 'from [PRICE]',
    tone: tones.mauve,
    caption: 'Photo: mulberry BIAB',
  },
  {
    name: 'Bespoke nail art',
    text: 'Hand-painted detail designed with you, from barely-there lines to full statement sets.',
    price: 'from [PRICE]',
    tone: tones.blush,
    caption: 'Photo: fine florals',
  },
]

export const experienceSteps = [
  { numeral: 'I', title: 'Consult', text: 'We talk through your nails, your routine and the look you have in mind.' },
  { numeral: 'II', title: 'Prepare', text: 'Gentle prep and cuticle care, always kind to the natural nail.' },
  { numeral: 'III', title: 'Create', text: 'Unhurried application and detail work, with time to adjust as we go.' },
  { numeral: 'IV', title: 'Care', text: 'You leave with aftercare advice to keep your set beautiful for weeks.' },
]

export const testimonials = [
  { quote: '[A few words from a client about how their visit felt.]', name: '[Client name]' },
  { quote: '[A short line about the quality of the work and how long it lasted.]', name: '[Client name]' },
  { quote: '[A sentence about the studio, the care or the attention to detail.]', name: '[Client name]' },
]

export const values = [
  {
    numeral: 'I',
    title: 'Nail health first',
    text: 'Gentle prep, careful filing and soak-off removal. Beautiful nails start with healthy ones.',
  },
  {
    numeral: 'II',
    title: 'Unhurried by design',
    text: 'One client at a time, with generous appointment lengths so nothing ever feels rushed.',
  },
  {
    numeral: 'III',
    title: 'Detail, always',
    text: 'Clean cuticle lines, balanced shapes and finishes that look as good on day twenty as day one.',
  },
]

export const credentials = [
  { title: '[Certification name]', detail: '[Academy or brand], [Year]' },
  { title: '[Structured gel / BIAB certification]', detail: '[Academy or brand], [Year]' },
  { title: '[Nail art masterclass]', detail: '[Academy or educator], [Year]' },
]

export type MenuItem = { name: string; text?: string; duration: string; price: string }
export type MenuCategory = { id: string; title: string; intro: string; items: MenuItem[] }

export const menu: MenuCategory[] = [
  {
    id: 'manicures',
    title: 'Manicures',
    intro: 'Every manicure includes shaping, cuticle care and a hand massage.',
    items: [
      { name: 'Signature gel manicure', text: 'Long-wearing gel in a colour of your choice.', duration: '60 min', price: '[PRICE]' },
      { name: 'Natural care manicure', text: 'Shape, cuticle care and a strengthening finish, no colour.', duration: '45 min', price: '[PRICE]' },
    ],
  },
  {
    id: 'structured',
    title: 'Structured gel',
    intro: 'A protective overlay for strength and natural length.',
    items: [
      { name: 'BIAB new set', text: 'Builder gel overlay with colour or a sheer finish.', duration: '75 min', price: '[PRICE]' },
      { name: 'BIAB infill', text: 'Rebalance and refresh, every [3–4] weeks.', duration: '60 min', price: '[PRICE]' },
    ],
  },
  {
    id: 'art',
    title: 'Nail art',
    intro: 'Added to any manicure. Priced by detail; send a reference for an exact quote.',
    items: [
      { name: 'Minimal accents', text: 'Fine lines, dots or micro french.', duration: '+15 min', price: '+[PRICE]' },
      { name: 'Chrome or cat-eye finish', text: 'Pearl, glazed or velvet effects.', duration: '+10 min', price: '+[PRICE]' },
      { name: 'Bespoke hand-painted set', text: 'Fully designed with you, every nail its own detail.', duration: 'from 90 min', price: 'from [PRICE]' },
    ],
  },
  {
    id: 'extras',
    title: 'Removal & extras',
    intro: 'Gentle, soak-off removal only.',
    items: [
      { name: 'Gentle removal', text: 'Soak-off and tidy, with a nourishing finish.', duration: '30 min', price: '[PRICE]' },
      { name: 'Removal with a new set', duration: '+15 min', price: '[PRICE / included]' },
      { name: 'Single nail repair', duration: '10 min', price: '[PRICE]' },
    ],
  },
]

export const policies = [
  { title: 'Deposits', text: 'A deposit of [AMOUNT] secures your appointment and is taken off your final price.' },
  { title: 'Changes & cancellations', text: 'Please give at least [48 hours] notice to move your booking and keep your deposit.' },
  { title: 'Arriving late', text: 'Appointments are planned to the minute. After [15 minutes] the treatment may need to be shortened.' },
  { title: 'Aftercare', text: 'Use cuticle oil daily and gloves for cleaning. Small concerns within [7 days] are fixed free of charge.' },
]

export type LuxeCategory = 'minimal' | 'chrome' | 'art' | 'french'

export const galleryFilters: { id: 'all' | LuxeCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'french', label: 'French' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'art', label: 'Hand-painted' },
]

export const categoryLabel: Record<LuxeCategory, string> = {
  minimal: 'Minimal',
  french: 'French',
  chrome: 'Chrome',
  art: 'Hand-painted',
}

export type LuxeWork = { id: string; title: string; category: LuxeCategory; tone: string; image?: string }

export const works: LuxeWork[] = [
  { id: 'ombre', title: 'Sheer nude ombré', category: 'minimal', tone: tones.nude },
  { id: 'mulberry', title: 'Mulberry velvet', category: 'chrome', tone: tones.mauve },
  { id: 'pearl', title: 'Pearl micro french', category: 'french', tone: tones.pearl },
  { id: 'foil', title: 'Champagne foil', category: 'art', tone: tones.champagne },
  { id: 'florals', title: 'Blush with fine florals', category: 'art', tone: tones.blush },
  { id: 'espresso', title: 'Espresso gloss', category: 'minimal', tone: tones.espresso },
  { id: 'quartz', title: 'Rose quartz chrome', category: 'chrome', tone: tones.rose },
  { id: 'negative', title: 'Mocha negative space', category: 'art', tone: tones.mocha },
  { id: 'milky', title: 'Milky BIAB, natural length', category: 'minimal', tone: tones.linen },
  { id: 'cocoa', title: 'Deep french in cocoa', category: 'french', tone: tones.cocoa },
  { id: 'glazed', title: 'Glazed pearl chrome', category: 'chrome', tone: tones.shell },
  { id: 'lines', title: 'Hand-painted line work', category: 'art', tone: tones.clay },
]

export const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Friday', time: '[10:00 – 19:00]' },
  { day: 'Saturday', time: '[09:00 – 16:00]' },
  { day: 'Sunday', time: 'Closed' },
]

export const bookingSteps = [
  { numeral: 'I', title: 'Send a request', text: 'Choose a treatment and a few dates that suit you.' },
  { numeral: 'II', title: 'Confirm & deposit', text: 'I reply within [24 hours] with a time and a deposit link.' },
  { numeral: 'III', title: 'Your hour', text: 'Arrival details and the studio address follow by email.' },
]

export const faqs = [
  {
    q: 'How long will my manicure last?',
    a: 'Gel and structured gel usually last [2–3 weeks], depending on your nails and routine. You will leave with aftercare tips to help it go the distance.',
  },
  {
    q: 'Is it gentle on my natural nails?',
    a: 'Yes. Nail health comes first: gentle prep, careful filing and soak-off removal only, never aggressive drilling of the natural nail.',
  },
  {
    q: 'Can I bring a design reference?',
    a: 'Please do. Attach photos to your request or bring them along, and we will adapt the idea to your nail shape and length.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Let me know at least [48 hours] ahead and your deposit moves to your new date. Later cancellations forfeit the deposit.',
  },
  {
    q: 'Where is the studio?',
    a: 'In [Neighbourhood], [Your City]. The exact address and arrival details are shared once your booking is confirmed.',
  },
]
