import { categoryLabel, galleryFilters, services, studio } from '../../shared/content'
import { useBookingForm, useGalleryFilter } from '../../shared/hooks'
import s from './GalleryMinimal.module.css'

// Placeholder tile colours, one per gallery item (in content order).
const tiles: Record<string, { bg: string; fg: string }> = {
  cherry: { bg: '#C8102E', fg: '#ffffff' },
  nude: { bg: '#E8DDD3', fg: '#3A3A3A' },
  silver: { bg: '#A9ADB3', fg: '#111111' },
  lineart: { bg: '#111111', fg: '#ffffff' },
  lilac: { bg: '#D8C8E8', fg: '#2A2A2A' },
  rose: { bg: '#C99A9E', fg: '#111111' },
  florals: { bg: '#4F6145', fg: '#ffffff' },
  pearl: { bg: '#F1EDE8', fg: '#3A3A3A' },
}

export default function GalleryMinimal() {
  const { filter, setFilter, visible } = useGalleryFilter()
  const form = useBookingForm()

  return (
    <div id="top" className={s.page}>
      <div className={s.wrap}>
        <header className={s.header}>
          <a href="#top" className={s.logo}>
            {studio.name}
            <span className={s.accent}>.</span>
          </a>
          <nav aria-label="Main">
            <ul className={s.nav}>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className={s.btnDark}>Book an appointment</a>
        </header>

        <section className={s.hero}>
          <div className={s.heroMain}>
            <p className={s.mono}>Freelance nail artist / {studio.city}</p>
            <h1 className={s.h1}>
              Nails, hand-painted
              <br />
              one client at a time.
            </h1>
          </div>
          <div className={s.heroSide}>
            <p className={s.lead}>
              Gel, structured manicures and custom nail art from a private studio. No walk-ins, no rush, just you and your set.
            </p>
            <div className={s.row}>
              <a href="#contact" className={s.btnAccent}>Request a booking</a>
              <a href="#gallery" className={s.btnOutline}>See the work</a>
            </div>
          </div>
        </section>

        <div className={s.heroImages}>
          <figure className={s.tile} style={{ background: '#1A1A1A', color: '#fff', height: 460 }}>
            <figcaption className={s.caption}>Photo: black chrome almond</figcaption>
          </figure>
          <figure className={s.tile} style={{ background: '#C8102E', color: '#fff', height: 460 }}>
            <figcaption className={s.caption}>Photo: classic cherry, short square</figcaption>
          </figure>
          <figure className={s.tile} style={{ background: '#E8E2DC', color: '#3A3A3A', height: 460 }}>
            <figcaption className={s.caption}>Photo: milky nude BIAB</figcaption>
          </figure>
        </div>

        <div className={s.points}>
          {[
            ['01', 'By appointment only', 'One chair, one client. Your time is never shared.'],
            ['02', 'Private home studio', 'Address shared once your booking is confirmed.'],
            ['03', 'Designed with you', 'Bring a reference or a mood. We sketch it together.'],
          ].map(([n, title, text]) => (
            <div key={n} className={s.point}>
              <p className={s.pointNum}>{n}</p>
              <p className={s.pointTitle}>{title}</p>
              <p className={s.muted}>{text}</p>
            </div>
          ))}
        </div>

        <section id="about" className={s.about}>
          <figure className={`${s.tile} ${s.portrait}`} style={{ background: '#D9D4CF', color: '#3A3A3A' }}>
            <figcaption className={s.caption}>Portrait: you at your desk</figcaption>
          </figure>
          <div className={s.aboutText}>
            <p className={s.mono}>About</p>
            <h2 className={s.h2}>Hi, I'm {studio.artist}.</h2>
            <p className={s.body}>
              I've been doing nails for {studio.yearsExperience} years, first in salons, now on my own terms. Working privately means
              every appointment gets my full attention, from shaping and cuticle care to the last line of detail.
            </p>
            <p className={s.body}>
              I love a clean, minimal set as much as a maximal hand-painted one. Bring a photo, a colour, or just a feeling, and
              we'll design something that's yours.
            </p>
            <div className={s.services}>
              <p className={s.mono}>Services</p>
              {services.map((svc) => (
                <div key={svc.id} className={s.serviceRow}>
                  <span className={s.serviceName}>{svc.name}</span>
                  <span className={s.muted}>
                    {svc.duration} / {svc.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className={s.gallery}>
          <div className={s.galleryHead}>
            <div>
              <p className={s.mono}>Gallery</p>
              <h2 className={s.h2}>Recent sets</h2>
            </div>
            <div role="group" aria-label="Filter gallery" className={s.chips}>
              {galleryFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  className={s.chip}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className={s.grid}>
            {visible.map((item) => (
              <figure
                key={item.id}
                className={`${s.tile} ${s.square}`}
                style={{ background: tiles[item.id].bg, color: tiles[item.id].fg }}
              >
                {item.image && <img src={item.image} alt={item.title} className={s.img} />}
                <figcaption className={s.caption}>
                  {item.title}
                  <span className="sr-only"> ({categoryLabel[item.category]})</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className={s.insta}>
            More on Instagram: <a href="#contact">{studio.instagram}</a>
          </p>
        </section>
      </div>

      <section id="contact" className={s.contact}>
        <div className={s.contactInner}>
          <div className={s.contactInfo}>
            <p className={s.monoLight}>Contact</p>
            <h2 className={s.h2Contact}>Book a set.</h2>
            <p className={s.contactLead}>Send a request and I'll reply within {studio.replyTime} with available times.</p>
            <dl className={s.details}>
              {[
                ['Studio', `${studio.neighbourhood}, ${studio.city}`],
                ['Hours', studio.hours],
                ['Email', studio.email],
                ['Instagram', studio.instagram],
              ].map(([k, v]) => (
                <div key={k} className={s.detail}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {form.sent ? (
            <div className={s.thanks} role="status">
              <p className={s.h2Contact}>Thank you.</p>
              <p className={s.contactLead}>Your request is in. I'll be in touch within {studio.replyTime}.</p>
              <button type="button" className={s.btnOutlineLight} onClick={form.reset}>Send another</button>
            </div>
          ) : (
            <form className={s.form} onSubmit={form.onSubmit}>
              <div className={s.field}>
                <label htmlFor="a-name">Name</label>
                <input id="a-name" name="name" required autoComplete="name" value={form.values.name} onChange={form.onChange} />
              </div>
              <div className={s.field}>
                <label htmlFor="a-contact">Email or phone</label>
                <input id="a-contact" name="contact" required value={form.values.contact} onChange={form.onChange} />
              </div>
              <div className={s.field}>
                <label htmlFor="a-service">Service</label>
                <select id="a-service" name="service" value={form.values.service} onChange={form.onChange}>
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>{svc.name}</option>
                  ))}
                </select>
              </div>
              <div className={s.field}>
                <label htmlFor="a-date">Preferred date</label>
                <input id="a-date" name="date" type="date" value={form.values.date} onChange={form.onChange} />
              </div>
              <div className={`${s.field} ${s.full}`}>
                <label htmlFor="a-msg">Your idea (links to inspo welcome)</label>
                <textarea id="a-msg" name="message" rows={5} value={form.values.message} onChange={form.onChange} />
              </div>
              <div className={`${s.full} ${s.formFoot}`}>
                <p className={s.note}>A deposit of {studio.deposit} secures your slot.</p>
                <button type="submit" className={s.btnAccent}>Send request</button>
              </div>
            </form>
          )}
        </div>
        <footer className={s.footer}>
          <span>© 2026 {studio.name}</span>
          <a href="#top">Back to top</a>
        </footer>
      </section>
    </div>
  )
}
