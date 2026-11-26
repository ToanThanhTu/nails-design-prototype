import { menu, policies } from '../content'
import { CtaBand, PageHero, SectionHead } from '../parts'
import s from '../SoftLuxe.module.css'

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="The menu"
        title={<>Treatments & <em>pricing</em></>}
        lead="Every appointment includes a consultation, careful prep and aftercare advice. Prices are a guide; detailed art is quoted from your reference."
      />

      <section className={s.sectionTight}>
        <div className={s.wrap}>
          <nav aria-label="Menu sections" className={s.jump}>
            {menu.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`}>{cat.title}</a>
            ))}
          </nav>
          {menu.map((cat) => (
            <div key={cat.id} id={cat.id} className={s.menuCat}>
              <div className={s.menuCatHead}>
                <h2 className={s.menuCatTitle}>{cat.title}</h2>
                <p className={s.small}>{cat.intro}</p>
              </div>
              <ul className={s.menuItems}>
                {cat.items.map((item) => (
                  <li key={item.name} className={s.menuItem}>
                    <div>
                      <p className={s.menuName}>{item.name}</p>
                      {item.text && <p className={s.menuText}>{item.text}</p>}
                    </div>
                    <div className={s.menuMeta}>
                      <span className={s.menuPrice}>{item.price}</span>
                      <span className={s.meta}>{item.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`}>
        <div className={s.wrap}>
          <SectionHead eyebrow="Before you book">
            Good to <em>know</em>
          </SectionHead>
          <div className={s.policies}>
            {policies.map((p) => (
              <div key={p.title} className={s.policy}>
                <h3 className={s.h3}>{p.title}</h3>
                <p className={s.small}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
