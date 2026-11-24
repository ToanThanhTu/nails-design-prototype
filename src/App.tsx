import { useEffect, useState } from 'react'
import GalleryMinimal from './designs/GalleryMinimal/GalleryMinimal'
import CandyPop from './designs/CandyPop/CandyPop'
import SoftLuxe from './designs/SoftLuxe/SoftLuxe'
import './App.css'

const designs = [
  { id: 'minimal', letter: 'A', label: 'Gallery Minimal', swatch: '#C8102E', Component: GalleryMinimal },
  { id: 'candy', letter: 'B', label: 'Candy Pop', swatch: '#FF7AB6', Component: CandyPop },
  { id: 'luxe', letter: 'C', label: 'Soft Luxe', swatch: '#7A4A57', Component: SoftLuxe },
] as const

type DesignId = (typeof designs)[number]['id']

function readDesignFromUrl(): DesignId {
  const param = new URLSearchParams(window.location.search).get('design')
  return designs.some((d) => d.id === param) ? (param as DesignId) : 'minimal'
}

export default function App() {
  const [active, setActive] = useState<DesignId>(readDesignFromUrl)

  // Keep the choice in the URL (?design=candy) so a specific design can be shared.
  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      url.searchParams.set('design', active)
      url.hash = ''
      window.history.replaceState(null, '', url)
    } catch {
      // Some embedded previews block history changes; switching still works.
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [active])

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
                onChange={() => setActive(d.id)}
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
