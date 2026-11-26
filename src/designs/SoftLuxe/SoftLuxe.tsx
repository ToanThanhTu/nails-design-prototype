import type { LuxePage } from './content'
import { Layout } from './parts'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const pages: Record<LuxePage, () => JSX.Element> = { home: Home, about: About, services: Services, gallery: Gallery, contact: Contact }

function readPage(): LuxePage {
  const p = new URLSearchParams(window.location.search).get('page')
  return p && p in pages ? (p as LuxePage) : 'home'
}

/** Soft Luxe: a full multi-page site. Pages are chosen with ?design=luxe&page=about etc. */
export default function SoftLuxe() {
  const current = readPage()
  const Page = pages[current]
  return (
    <Layout current={current}>
      <Page />
    </Layout>
  )
}
