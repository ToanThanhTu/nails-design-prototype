import { useState } from 'react'
import { studio } from '../../../shared/content'
import { categoryLabel, galleryFilters, pageHref, tones, works, type LuxeCategory } from '../content'
import { Arch, ArrowLink, CtaBand, PageHero } from '../parts'
import s from '../SoftLuxe.module.css'

const instaTones = [tones.nude, tones.mauve, tones.pearl, tones.rose, tones.champagne, tones.espresso]

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | LuxeCategory>('all')
  const visible = filter === 'all' ? works : works.filter((w) => w.category === filter)

  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title={<>Recent <em>work</em></>}
        lead="A selection of sets from the studio. Every design is made for the hands wearing it, so use these as a starting point."
      />

      <section className={s.sectionTight}>
        <div className={s.wrap}>
          <div role="group" aria-label="Filter gallery" className={s.chips}>
            {galleryFilters.map((f) => (
              <button key={f.id} type="button" aria-pressed={filter === f.id} className={s.chip} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className={s.galleryGrid}>
            {visible.map((w) => (
              <figure key={w.id} className={s.work}>
                <Arch tone={w.tone} image={w.image} className={s.workImg} />
                <figcaption>
                  <span className={s.workTitle}>{w.title}</span>
                  <span className={s.workTag}>{categoryLabel[w.category]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`}>
        <div className={`${s.wrap} ${s.insta}`}>
          <div className={s.instaText}>
            <p className={s.eyebrow}>Instagram</p>
            <h2 className={s.h2}>
              Follow along, <em>{studio.instagram}</em>
            </h2>
            <p className={s.body}>New sets, colour stories and the occasional behind-the-scenes from the studio.</p>
            <ArrowLink href={pageHref('contact')}>Follow on Instagram</ArrowLink>
          </div>
          <div className={s.instaGrid}>
            {instaTones.map((t, i) => (
              <Arch key={i} tone={t} shape="rect" className={s.instaTile} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
