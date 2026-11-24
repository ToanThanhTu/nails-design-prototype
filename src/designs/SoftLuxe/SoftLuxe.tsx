import { categoryLabel, galleryFilters, services, studio } from '../../shared/content'
import { useBookingForm, useGalleryFilter } from '../../shared/hooks'
import s from './SoftLuxe.module.css'

const tiles: Record<string, string> = {
  cherry: '#7A4A57',
  nude: '#D9BBA9',
  silver: '#E3D2B8',
  lineart: '#4A3530',
  lilac: '#E7C6C4',
  rose: '#C99A9E',
  florals: '#8A6458',
  pearl: '#EFE6DF',
}

// Spa-menu names for the shared services
const luxeNames: Record<string, string> = {
  gel: 'Signature gel manicure',
  biab: 'Structured gel (BIAB)',
  art: 'Bespoke nail art',
  removal: 'Gentle removal',
}

export default function SoftLuxe() {
  const { filter, setFilter, visible } = useGalleryFilter()
  const form = useBookingForm()

  return (
    <div id="top" className={s.page}>
      <div className={s.wrap}>
        <header className={s.header}>
          <nav aria-label="Main">
            <ul className={s.nav}>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <a href="#top" className={s.logo}>Lumi</a>
          <a href="#contact" className={s.reserve}>Reserve</a>
        </header>

        <section className={s.hero}>
          <p className={s.eyebrow}>Private nail atelier / {studio.city}</p>
          <h1 className={s.h1}>
            The quiet luxury
            <br />
            of a <em className={s.accentText}>perfect</em> set.
          </h1>
          <p className={s.lead}>
            Considered manicures and fine nail art, by appointment in a calm, private space. Take your time; I always do.
          </p>
          <a href="#contact" className={s.btn}>Book your appointment</a>
        </section>

        <div className={s.arches}>
          <figure className={s.arch} style={{ background: '#D9BBA9' }}>
            <figcaption>Photo: nude ombré</figcaption>
          </figure>
          <figure className={`${s.arch} ${s.archTall}`} style={{ background: '#7A4A57', color: '#fff' }}>
            <figcaption>Photo: hero hand shot</figcaption>
          </figure>
          <figure className={s.arch} style={{ background: '#E7C6C4' }}>
            <figcaption>Photo: pearl french</figcaption>
          </figure>
        </div>

        <section id="about" className={s.about}>
          <figure className={`${s.arch} ${s.portrait}`} style={{ background: '#EBDFD6' }}>
            <figcaption>Portrait: {studio.artist}</figcaption>
          </figure>
          <div className={s.aboutText}>
            <p className={s.eyebrow}>About the artist</p>
            <h2 className={s.h2}>
              I'm {studio.artist}, and I believe nails are the smallest <em>finishing touch</em>.
            </h2>
            <p className={s.body}>
              After {studio.yearsExperience} years in the industry I opened a private studio so each client could have an unhurried
              hour, quality products and my complete focus. I specialise in natural-nail health, structured gel and delicate
              hand-painted detail.
            </p>
            <div className={s.menu}>
              {services.map((svc) => (
                <div key={svc.id} className={s.menuRow}>
                  <span className={s.menuName}>{luxeNames[svc.id] ?? svc.name}</span>
                  <span className={s.menuMeta}>
                    {svc.duration} / {svc.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className={s.gallery}>
          <div className={s.galleryHead}>
            <p className={s.eyebrow}>Portfolio</p>
            <h2 className={s.h2Center}>
              Recent <em>work</em>
            </h2>
            <div role="group" aria-label="Filter gallery" className={s.chips}>
              {galleryFilters.map((f) => (
                <button key={f.id} type="button" aria-pressed={filter === f.id} className={s.chip} onClick={() => setFilter(f.id)}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className={s.grid}>
            {visible.map((item) => (
              <figure key={item.id} className={s.work}>
                <div className={s.workImg} style={{ background: tiles[item.id] }}>
                  {item.image && <img src={item.image} alt="" />}
                </div>
                <figcaption>
                  <span className={s.workTitle}>{item.title}</span>
                  <span className={s.workTag}>{categoryLabel[item.category]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className={s.insta}>
            Follow new work on Instagram, <a href="#contact">{studio.instagram}</a>
          </p>
        </section>
      </div>

      <section id="contact" className={s.contact}>
        <div className={s.contactInner}>
          <p className={s.eyebrow}>Appointments</p>
          <h2 className={s.h2Contact}>
            Reserve your <em>hour</em>
          </h2>
          <p className={s.lead}>Share a few details and I'll reply personally within {studio.replyTime} to confirm a time.</p>

          {form.sent ? (
            <div className={s.thanks} role="status">
              <p className={s.h2Center}>
                Thank you, <em>truly</em>.
              </p>
              <p className={s.lead}>Your request has arrived. I'll be in touch within {studio.replyTime}.</p>
              <button type="button" className={s.btn} onClick={form.reset}>Send another</button>
            </div>
          ) : (
            <form className={s.form} onSubmit={form.onSubmit}>
              <div className={s.field}>
                <label htmlFor="c-name">Full name</label>
                <input id="c-name" name="name" required autoComplete="name" value={form.values.name} onChange={form.onChange} />
              </div>
              <div className={s.field}>
                <label htmlFor="c-contact">Email or phone</label>
                <input id="c-contact" name="contact" required value={form.values.contact} onChange={form.onChange} />
              </div>
              <div className={s.field}>
                <label htmlFor="c-service">Treatment</label>
                <select id="c-service" name="service" value={form.values.service} onChange={form.onChange}>
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>{luxeNames[svc.id] ?? svc.name}</option>
                  ))}
                </select>
              </div>
              <div className={s.field}>
                <label htmlFor="c-date">Preferred date</label>
                <input id="c-date" name="date" type="date" value={form.values.date} onChange={form.onChange} />
              </div>
              <div className={`${s.field} ${s.full}`}>
                <label htmlFor="c-msg">Notes or inspiration</label>
                <textarea id="c-msg" name="message" rows={3} value={form.values.message} onChange={form.onChange} />
              </div>
              <div className={`${s.full} ${s.center}`}>
                <button type="submit" className={s.btn}>Send request</button>
              </div>
            </form>
          )}

          <dl className={s.info}>
            <div><dt>Studio</dt><dd>{studio.neighbourhood}, {studio.city}</dd></div>
            <div><dt>Hours</dt><dd>{studio.hours}</dd></div>
            <div><dt>Write</dt><dd><a href="#contact">{studio.email}</a></dd></div>
          </dl>
        </div>
        <footer className={s.footer}>
          <span>© 2026 Lumi Nail Atelier</span>
          <span className={s.footerLogo}>Lumi</span>
          <a href="#top">Back to top</a>
        </footer>
      </section>
    </div>
  )
}
