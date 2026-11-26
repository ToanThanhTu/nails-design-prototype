import { services, studio } from '../../../shared/content'
import { bookingSteps, faqs, hours, menu, pageHref, tones } from '../content'
import { Arch, PageHero, SectionHead } from '../parts'
import s from '../SoftLuxe.module.css'

const treatmentOptions = menu.flatMap((cat) => cat.items.map((item) => item.name))

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Appointments"
        title={<>Reserve your <em>hour</em></>}
        lead={`Share a few details and I'll reply personally within ${studio.replyTime} to confirm a time.`}
      />

      <section className={s.sectionTight}>
        <div className={`${s.wrap} ${s.contactLayout}`}>
          {/* Visual only: connect to a form service later to receive requests */}
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <div className={s.field}>
              <label htmlFor="c-name">Full name</label>
              <input id="c-name" name="name" autoComplete="name" />
            </div>
            <div className={s.field}>
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" />
            </div>
            <div className={s.field}>
              <label htmlFor="c-phone">Phone (optional)</label>
              <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className={s.field}>
              <label htmlFor="c-service">Treatment</label>
              <select id="c-service" name="service" defaultValue={treatmentOptions[0] ?? services[0].name}>
                {treatmentOptions.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className={s.field}>
              <label htmlFor="c-date">Preferred date</label>
              <input id="c-date" name="date" type="date" />
            </div>
            <div className={s.field}>
              <label htmlFor="c-time">Preferred time</label>
              <select id="c-time" name="time" defaultValue="Any time">
                <option>Any time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            <div className={`${s.field} ${s.full}`}>
              <label htmlFor="c-msg">Notes or inspiration</label>
              <textarea id="c-msg" name="message" rows={4} placeholder="Colours, shapes, links to reference photos..." />
            </div>
            <div className={`${s.full} ${s.formFoot}`}>
              <p className={s.meta}>A deposit of {studio.deposit} secures your appointment.</p>
              <button type="submit" className={s.btn}>Send request</button>
            </div>
          </form>

          <aside className={s.infoCard} aria-label="Studio details">
            <Arch tone={tones.champagne} caption={`Map: ${studio.neighbourhood}`} shape="rect" className={s.map} />
            <div className={s.infoBlock}>
              <p className={s.infoHead}>Studio</p>
              <p className={s.infoText}>{studio.neighbourhood}, {studio.city}</p>
              <p className={s.meta}>Exact address shared once your booking is confirmed.</p>
            </div>
            <div className={s.infoBlock}>
              <p className={s.infoHead}>Hours</p>
              <dl className={s.hours}>
                {hours.map((h) => (
                  <div key={h.day}>
                    <dt>{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={s.infoBlock}>
              <p className={s.infoHead}>Get in touch</p>
              <p className={s.infoText}><a href={pageHref('contact')}>{studio.email}</a></p>
              <p className={s.infoText}><a href={pageHref('contact')}>Instagram {studio.instagram}</a></p>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`}>
        <div className={s.wrap}>
          <SectionHead eyebrow="How booking works">
            Three simple <em>steps</em>
          </SectionHead>
          <ol className={s.steps3}>
            {bookingSteps.map((step) => (
              <li key={step.title} className={s.step}>
                <span className={s.numeral}>{step.numeral}</span>
                <h3 className={s.h3}>{step.title}</h3>
                <p className={s.small}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={s.section}>
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <SectionHead eyebrow="Questions">
            Frequently <em>asked</em>
          </SectionHead>
          <div className={s.faq}>
            {faqs.map((f) => (
              <details key={f.q} className={s.faqItem}>
                <summary>{f.q}</summary>
                <p className={s.small}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
