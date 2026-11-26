import { studio } from '../../../shared/content'
import { experienceSteps, pageHref, signatureTreatments, testimonials, tones, works } from '../content'
import { Arch, ArrowLink, CtaBand, SectionHead } from '../parts'
import s from '../SoftLuxe.module.css'

export default function Home() {
  return (
    <main>
      <section className={s.wrap}>
        <div className={s.hero}>
          <p className={s.eyebrow}>Private nail atelier / {studio.city}</p>
          <h1 className={s.display}>
            The quiet luxury
            <br />
            of a <em className={s.accentText}>perfect</em> set.
          </h1>
          <p className={s.lead}>
            Considered manicures and fine nail art, by appointment in a calm, private space. Take your time; I always do.
          </p>
          <div className={s.btnRow}>
            <a href={pageHref('contact')} className={s.btn}>Book your appointment</a>
            <a href={pageHref('services')} className={s.btnOutline}>View the menu</a>
          </div>
        </div>
        <div className={s.arches}>
          <Arch tone={tones.nude} caption="Photo: nude ombré" />
          <Arch tone={tones.mauve} caption="Photo: hero hand shot" className={s.archTall} />
          <Arch tone={tones.blush} caption="Photo: pearl french" />
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`}>
        <div className={`${s.wrap} ${s.statementWrap}`}>
          <p className={s.statement}>
            A private atelier for those who notice the details. One client at a time, never rushed, always{' '}
            <em>considered</em>.
          </p>
          <p className={s.signature}>{studio.artist}, nail artist</p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <SectionHead eyebrow="Signature treatments">
            Made for <em>you</em>
          </SectionHead>
          <div className={s.treatments}>
            {signatureTreatments.map((t) => (
              <article key={t.name} className={s.treatment}>
                <Arch tone={t.tone} caption={t.caption} className={s.treatmentImg} />
                <div className={s.treatmentText}>
                  <h3 className={s.h3}>{t.name}</h3>
                  <p className={s.small}>{t.text}</p>
                  <p className={s.price}>{t.price}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={s.centerRow}>
            <ArrowLink href={pageHref('services')}>View the full menu</ArrowLink>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.ruleTop}`}>
        <div className={s.wrap}>
          <SectionHead eyebrow="The experience">
            Your hour, <em>step by step</em>
          </SectionHead>
          <ol className={s.steps}>
            {experienceSteps.map((step) => (
              <li key={step.title} className={s.step}>
                <span className={s.numeral}>{step.numeral}</span>
                <h3 className={s.h3}>{step.title}</h3>
                <p className={s.small}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`}>
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.splitMedia}>
            <Arch tone={tones.pearl} caption={`Portrait: ${studio.artist}`} className={s.portrait} />
          </div>
          <div className={s.splitText}>
            <p className={s.eyebrow}>Meet the artist</p>
            <h2 className={s.h2}>
              Hello, I'm {studio.artist}. Nails are my <em>quiet obsession</em>.
            </h2>
            <p className={s.body}>
              After {studio.yearsExperience} years in the industry I opened a private studio, so every client could have an
              unhurried hour, quality products and my complete focus.
            </p>
            <ArrowLink href={pageHref('about')}>Read my story</ArrowLink>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <SectionHead eyebrow="Portfolio">
            Recent <em>work</em>
          </SectionHead>
          <div className={s.featured}>
            {works.slice(0, 4).map((w) => (
              <figure key={w.id} className={s.work}>
                <Arch tone={w.tone} image={w.image} className={s.workImg} />
                <figcaption className={s.workTitle}>{w.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className={s.centerRow}>
            <ArrowLink href={pageHref('gallery')}>View the portfolio</ArrowLink>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.ruleTop}`}>
        <div className={s.wrap}>
          <SectionHead eyebrow="Kind words">
            From the <em>chair</em>
          </SectionHead>
          <div className={s.quotes}>
            {testimonials.map((t, i) => (
              <blockquote key={i} className={s.quote}>
                <span className={s.quoteMark} aria-hidden="true">“</span>
                <p>{t.quote}</p>
                <footer>{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
