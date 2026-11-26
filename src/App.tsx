import { useEffect } from 'react'
import GalleryMinimal from './designs/GalleryMinimal/GalleryMinimal'
import CandyPop from './designs/CandyPop/CandyPop'
import SoftLuxe from './designs/SoftLuxe/SoftLuxe'
import { navigate, useLinkInterception, useUrl } from './navigation'
import './App.css'

const designs = [
  { id: 'minimal', letter: 'A', label: 'Gallery Minimal', swatch: '#C8102E', Component: GalleryMinimal },
  { id: 'candy', letter: 'B', label: 'Candy Pop', swatch: '#FF7AB6', Component: CandyPop },
  { id: 'luxe', letter: 'C', label: 'Soft Luxe', swatch: '#7A4A57', Component: SoftLuxe },
] as const

type DesignId = (typeof designs)[number]['id']

function readDesignFromUrl(search: string): DesignId {
  const param = new URLSearchParams(search).get('design')
  return designs.some((d) => d.id === param) ? (param as DesignId) : 'minimal'
}

export default function App() {
  // The URL is the single source of truth: ?design=luxe&page=about
  const { search } = useUrl()
  useLinkInterception()
  const active = readDesignFromUrl(search)

  // Make sure the URL always names the design, so any view can be shared.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('design') === active) return
    try {
      const url = new URL(window.location.href)
      url.searchParams.set('design', active)
      window.history.replaceState(null, '', url)
    } catch {
      // Some embedded previews block history changes; the app still works.
    }
  }, [active])

  // Switching designs opens that design's home page, at the top.
  const selectDesign = (id: DesignId) => navigate(`?design=${id}`)

  const current = designs.find((d) => d.id === active)!
  const Design = current.Component

  return (
    <>
      <div className="switcher">
        <p className="switcher__title">
          Lumi Nails <span className="switcher__muted">/ design prototypes</span>
        </p>
        <fieldset className="switcher__group">
          <legend className="sr-only">Choose a design</legend>
          {designs.map((d) => (
            <label key={d.id} className="switcher__option">
              <input
                type="radio"
                name="design"
                value={d.id}
                checked={active === d.id}
                onChange={() => selectDesign(d.id)}
              />
              <span className="switcher__pill">
                <span className="switcher__swatch" style={{ background: d.swatch }} aria-hidden="true" />
                <span className="switcher__letter">{d.letter}</span>
                <span className="switcher__label">{d.label}</span>
              </span>
            </label>
          ))}
        </fieldset>
      </div>
      <main key={active}>
        <Design />
      </main>
    </>
  )
}
