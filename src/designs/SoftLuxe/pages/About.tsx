import { studio } from '../../../shared/content'
import { credentials, tones, values } from '../content'
import { Arch, CtaBand, PageHero, SectionHead } from '../parts'
import s from '../SoftLuxe.module.css'

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About the artist"
        title={<>The hands behind <em>Lumi</em></>}
        lead="A private nail atelier built around one simple idea: give every client time, care and my complete attention."
      />

      <section className={s.section}>
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.splitMedia}>
            <Arch tone={tones.linen} caption={`Portrait: ${studio.artist}`} className={s.portrait} />
          </div>
          <div className={s.splitText}>
            <p className={s.eyebrow}>My story</p>
            <h2 className={s.h2}>
              I'm {studio.artist}, and I believe nails are the smallest <em>finishing touch</em>.
            </h2>
            <p className={s.body}>
              I started doing nails [how you began: for friends, at a salon, after a course]. Over {studio.yearsExperience} years
              in busy salons I fell in love with the craft, but never with the rush.
            </p>
            <p className={s.body}>
              Lumi is my answer: a calm, private studio where appointments run at the pace good work needs. I specialise in
              natural-nail health, structured gel and delicate hand-painted detail.
            </p>
            <p className={s.body}>
              When I'm not at the desk you'll find me [a personal detail: collecting colour inspiration, at a gallery, with my
              dog].
            </p>
            <p className={s.signatureLeft}>{studio.artist}</p>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`}>
        <div className={s.wrap}>
          <SectionHead eyebrow="Philosophy">
            What I <em>believe</em>
          </SectionHead>
          <div className={s.values}>
            {values.map((v) => (
              <div key={v.title} className={s.value}>
                <span className={s.numeral}>{v.numeral}</span>
                <h3 className={s.h3}>{v.title}</h3>
                <p className={s.small}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={`${s.wrap} ${s.split} ${s.splitReverse}`}>
          <div className={s.studioMedia}>
            <Arch tone={tones.champagne} caption="Photo: the studio" shape="rect" className={s.studioWide} />
            <Arch tone={tones.blush} caption="Photo: the desk" className={s.studioSmall} />
          </div>
          <div className={s.splitText}>
            <p className={s.eyebrow}>The studio</p>
            <h2 className={s.h2}>
              A calm, <em>private</em> room
            </h2>
            <p className={s.body}>
              Soft light, good music and just one chair. The studio is set up so you can fully switch off while I work.
            </p>
            <ul className={s.checks}>
              <li>Instruments cleaned and sterilised between every client</li>
              <li>Fresh, single-use files and buffers for each appointment</li>
              <li>Products chosen for nail health: [your product brands]</li>
              <li>Tea, coffee or something sparkling while you sit</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.ruleTop}`}>
        <div className={s.wrap}>
          <SectionHead eyebrow="Training">
            Credentials & <em>education</em>
          </SectionHead>
          <ul className={s.credentials}>
            {credentials.map((c, i) => (
              <li key={i}>
                <span className={s.h3}>{c.title}</span>
                <span className={s.meta}>{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
