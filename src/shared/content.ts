// Single source of truth for the studio's content.
// All three designs read from here, so real details only need to be filled in once.

export const studio = {
  name: 'Lumi Nails',
  artist: '[Your Name]',
  city: '[Your City]',
  neighbourhood: '[Neighbourhood]',
  hours: '[Tue–Sat], by appointment',
  email: '[hello@yourdomain.com]',
  instagram: '@[yourhandle]',
  replyTime: '[24 hours]',
  deposit: '[AMOUNT]',
  yearsExperience: '[X]',
}

export type Service = {
  id: string
  name: string
  duration: string
  price: string
  blurb: string
}

export const services: Service[] = [
  { id: 'gel', name: 'Gel manicure', duration: '60 min', price: '[PRICE]', blurb: 'Shape, cuticle care, one colour that lasts.' },
  { id: 'biab', name: 'BIAB / structured gel', duration: '75 min', price: '[PRICE]', blurb: 'Strength for growing out your natural nails.' },
  { id: 'art', name: 'Hand-painted nail art', duration: 'from 90 min', price: '[PRICE]', blurb: 'Hand-painted, chrome, charms. Go wild.' },
  { id: 'removal', name: 'Removal and tidy-up', duration: '30 min', price: '[PRICE]', blurb: 'Safe soak-off and a tidy, nothing else.' },
]

export type GalleryCategory = 'minimal' | 'chrome' | 'art' | 'french'

export const galleryFilters: { id: 'all' | GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'art', label: 'Hand-painted' },
  { id: 'french', label: 'French' },
]

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  /** Replace with a real photo path (e.g. '/gallery/cherry.jpg') when available. */
  image?: string
}

export const gallery: GalleryItem[] = [
  { id: 'cherry', title: 'Cherry red, short square', category: 'minimal' },
  { id: 'nude', title: 'Milky nude BIAB', category: 'minimal' },
  { id: 'silver', title: 'Silver chrome almond', category: 'chrome' },
  { id: 'lineart', title: 'Black line art', category: 'art' },
  { id: 'lilac', title: 'Lilac micro french', category: 'french' },
  { id: 'rose', title: 'Rose quartz chrome', category: 'chrome' },
  { id: 'florals', title: 'Sage hand-painted florals', category: 'art' },
  { id: 'pearl', title: 'Pearl french tips', category: 'french' },
]

export const categoryLabel: Record<GalleryCategory, string> = {
  minimal: 'Minimal',
  chrome: 'Chrome',
  art: 'Hand-painted',
  french: 'French',
}
