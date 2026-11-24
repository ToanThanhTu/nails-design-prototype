import { categoryLabel, galleryFilters, services, studio } from '../../shared/content'
import { useBookingForm, useGalleryFilter } from '../../shared/hooks'
import s from './CandyPop.module.css'

const tiles: Record<string, string> = {
  cherry: '#FF7AB6',
  nude: '#FFB98A',
  silver: '#D9DCE3',
  lineart: '#22102E',
  lilac: '#C9B8FF',
  rose: '#FFC2DC',
  florals: '#A8EFD0',
  pearl: '#FFFFFF',
}
const tilts = ['-2deg', '1.5deg', '-1deg', '2deg', '1deg', '-1.5deg', '2deg', '-2deg']
const cardColours = ['#FFFFFF', '#C9B8FF', '#FF7AB6', '#A8EFD0']

function Sparkle({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 1 L14.6 9.4 L23 12 L14.6 14.6 L12 23 L9.4 14.6 L1 12 L9.4 9.4 Z"
        fill="#FF7AB6" stroke="#22102E" strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>
  )
}

function NailsIllustration() {
  return (
    <svg viewBox="0 0 380 380" className={s.illustration} role="img"
      aria-label="Five painted nail shapes in pink, lilac, yellow, mint and chrome">
      <circle cx="190" cy="190" r="178" fill="#fff" stroke="#22102E" strokeWidth="3" />
      <rect x="58" y="120" width="44" height="120" rx="22" fill="#C9B8FF" stroke="#22102E" strokeWidth="3" transform="rotate(-18 80 180)" />
      <rect x="112" y="78" width="48" height="140" rx="24" fill="#FF7AB6" stroke="#22102E" strokeWidth="3" transform="rotate(-8 136 148)" />
      <rect x="168" y="62" width="50" height="150" rx="25" fill="#FFE27A" stroke="#22102E" strokeWidth="3" />
      <rect x="226" y="78" width="48" height="140" rx="24" fill="#A8EFD0" stroke="#22102E" strokeWidth="3" transform="rotate(8 250 148)" />
      <rect x="282" y="124" width="42" height="116" rx="21" fill="#D9DCE3" stroke="#22102E" strokeWidth="3" transform="rotate(18 303 182)" />
      <circle cx="193" cy="110" r="6" fill="#22102E" />
      <circle cx="136" cy="128" r="4" fill="#fff" />
      <circle cx="250" cy="130" r="4" fill="#22102E" />
      <path d="M120 290 Q190 330 260 290" fill="none" stroke="#22102E" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function CandyPop() {
  const { filter, setFilter, visible } = useGalleryFilter()
  const form = useBookingForm()

  return (
    <div id="top" className={s.page}>
      <div className={s.wrap}>
        <header className={s.header}>
          <a href="#top" className={s.logo}>
            <Sparkle /> lumi nails
          </a>
          <nav aria-label="Main">
            <ul className={s.nav}>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact" className={s.navCta}>Book me</a></li>
            </ul>
          </nav>
        </header>

        <section className={s.hero}>
          <div className={s.heroMain}>
            <p className={s.badge}>Private nail studio in {studio.city}</p>
            <h1 className={s.h1}>
              Tiny canvases.
              <br />
              Big moods.
            </h1>
            <p className={s.lead}>
              Hand-painted art, chrome, charms and the cleanest gel you've ever had, done one-on-one in my little studio.
            </p>
            <div className={s.row}>
              <a href="#contact" className={s.btnPrimary}>Book a set</a>
              <a href="#gallery" className={s.btnSecondary}>See my work</a>
            </div>
          </div>
          <div className={s.heroArt}>
            <NailsIllustration />
            <p className={s.sticker}>
              Now booking
              <br />
              [Month]
            </p>
          </div>
        </section>
      </div>

      <div className={s.marquee} aria-hidden="true">
        <div className={s.marqueeTrack}>
          {[0, 1].map((n) => (
            <span key={n}>Gel / BIAB / Hand-painted art / Chrome / 3D charms / French twists /&nbsp;</span>
          ))}
        </div>
      </div>

      <div className={s.wrap}>
        <section id="about" className={s.about}>
          <figure className={s.portrait}>
            <figcaption className={s.pill}>Photo: you, mid-paint</figcaption>
          </figure>
          <div className={s.aboutText}>
            <h2 className={s.h2}>Hey, I'm {studio.artist}!</h2>
            <p className={s.body}>
              I'm a freelance nail artist who thinks every set should feel like a tiny piece of you. I work alone, from a private
              studio, so it's just us, good music, and as much detail as you want.
            </p>
            <p className={s.body}>Show me your Pinterest board, your outfit, your cat. I'll turn it into ten little artworks.</p>
            <ul className={s.tags}>
              <li style={{ background: '#fff', transform: 'rotate(-2deg)' }}>One client at a time</li>
              <li style={{ background: '#A8EFD0', transform: 'rotate(1.5deg)' }}>Custom designs</li>
              <li style={{ background: '#FFE27A', transform: 'rotate(-1deg)' }}>Gentle on natural nails</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="menu-h" className={s.menu}>
          <h2 id="menu-h" className={s.h3}>The menu</h2>
          <div className={s.cards}>
            {services.map((svc, i) => (
              <div key={svc.id} className={s.card} style={{ background: cardColours[i % cardColours.length] }}>
                <p className={s.cardTitle}>{svc.name}</p>
                <p className={s.cardText}>{svc.blurb}</p>
                <p className={s.cardPrice}>
                  {svc.price} / {svc.duration}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className={s.gallery}>
          <div className={s.galleryHead}>
            <h2 className={s.h2}>
              Fresh off
              <br />
              the table
            </h2>
            <div role="group" aria-label="Filter gallery" className={s.chips}>
              {galleryFilters.map((f) => (
                <button key={f.id} type="button" aria-pressed={filter === f.id} className={s.chip} onClick={() => setFilter(f.id)}>
                  {f.id === 'all' ? 'Everything' : f.label}
                </button>
              ))}
            </div>
          </div>
          <div className={s.grid}>
            {visible.map((item, i) => (
              <figure
                key={item.id}
                className={s.tile}
                style={{
                  background: tiles[item.id],
                  transform: `rotate(${tilts[i % tilts.length]})`,
                  boxShadow: item.id === 'lineart' ? '6px 6px 0 #FF7AB6' : undefined,
                }}
              >
                {item.image && <img src={item.image} alt={item.title} className={s.img} />}
                <figcaption className={s.pill}>
                  {item.title}
                  <span className="sr-only"> ({categoryLabel[item.category]})</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className={s.contactWrap}>
          <div className={s.contact}>
            <div className={s.contactInfo}>
              <h2 className={s.h2}>Let's do your nails.</h2>
              <p className={s.body}>
                Tell me what you're dreaming of and when you're free. I'll get back to you within {studio.replyTime}.
              </p>
              <div className={s.links}>
                <a href="#contact" className={s.linkPill}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  {studio.instagram}
                </a>
                <a href="#contact" className={s.linkPill}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M3 7 L12 13 L21 7" />
                  </svg>
                  {studio.email}
                </a>
                <p className={s.where}>
                  {studio.neighbourhood}, {studio.city} / {studio.hours}
                </p>
              </div>
            </div>

            {form.sent ? (
              <div className={s.thanks} role="status">
                <p className={s.h3}>Yay, request sent!</p>
                <p className={s.body}>I'll slide into your inbox within {studio.replyTime}.</p>
                <button type="button" className={s.btnSecondary} onClick={form.reset}>Send another</button>
              </div>
            ) : (
              <form className={s.form} onSubmit={form.onSubmit}>
                <div className={s.field}>
                  <label htmlFor="b-name">Your name</label>
                  <input id="b-name" name="name" required autoComplete="name" value={form.values.name} onChange={form.onChange} />
                </div>
                <div className={s.field}>
                  <label htmlFor="b-contact">Email or phone</label>
                  <input id="b-contact" name="contact" required value={form.values.contact} onChange={form.onChange} />
                </div>
                <div className={s.field}>
                  <label htmlFor="b-service">What are we doing?</label>
                  <select id="b-service" name="service" value={form.values.service} onChange={form.onChange}>
                    {services.map((svc) => (
                      <option key={svc.id} value={svc.id}>{svc.name}</option>
                    ))}
                  </select>
                </div>
                <div className={s.field}>
                  <label htmlFor="b-date">Dream date</label>
                  <input id="b-date" name="date" type="date" value={form.values.date} onChange={form.onChange} />
                </div>
                <div className={`${s.field} ${s.full}`}>
                  <label htmlFor="b-msg">Describe the vibe</label>
                  <textarea id="b-msg" name="message" rows={4} placeholder="Colours, shapes, links to inspo..."
                    value={form.values.message} onChange={form.onChange} />
                </div>
                <div className={s.full}>
                  <button type="submit" className={s.btnPrimary}>Send it</button>
                </div>
              </form>
            )}
          </div>
        </section>

        <footer className={s.footer}>
          <span className={s.footerLogo}>lumi nails</span>
          <span>© 2026 / made with tiny brushes</span>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </div>
  )
}
