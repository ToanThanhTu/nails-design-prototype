import type { ReactNode } from 'react'
import { studio } from '../../shared/content'
import { navItems, pageHref, type LuxePage } from './content'
import s from './SoftLuxe.module.css'

/** True when a tone is dark enough to need light caption text. */
function isDark(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140
}

type ArchProps = {
  tone: string
  caption?: string
  image?: string
  shape?: 'arch' | 'rect'
  className?: string
}

/** Image placeholder in the signature almond-arch shape. Pass `image` to show a real photo. */
export function Arch({ tone, caption, image, shape = 'arch', className = '' }: ArchProps) {
  return (
    <figure
      className={`${s.arch} ${shape === 'rect' ? s.rect : ''} ${className}`}
      style={{ background: tone, color: isDark(tone) ? '#F5EEE8' : '#2E2220' }}
    >
      {image && <img src={image} alt={caption ?? ''} className={s.archImg} />}
      {caption && !image && <figcaption className={s.archCap}>{caption}</figcaption>}
    </figure>
  )
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className={s.arrowLink}>
      {children}
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M0 5h16M12 1l4 4-4 4" />
      </svg>
    </a>
  )
}

export function SectionHead({ eyebrow, children, center = true }: { eyebrow: string; children: ReactNode; center?: boolean }) {
  return (
    <div className={`${s.sectionHead} ${center ? s.center : ''}`}>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h2 className={s.h2}>{children}</h2>
    </div>
  )
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: string }) {
  return (
    <section className={s.pageHero}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h1 className={s.h1}>{title}</h1>
        <p className={s.lead}>{lead}</p>
        <div className={s.ornament} aria-hidden="true">
          <span />
          <svg width="14" height="20" viewBox="0 0 14 20"><path d="M7 1C3.5 1 1 4 1 8v11h12V8c0-4-2.5-7-6-7Z" fill="none" stroke="currentColor" /></svg>
          <span />
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className={s.cta}>
      <div className={s.wrap}>
        <p className={s.eyebrowLight}>By appointment only</p>
        <h2 className={s.ctaTitle}>
          Reserve your <em>hour</em>
        </h2>
        <p className={s.ctaText}>A calm, private appointment with my full attention, from the first file to the final coat.</p>
        <a href={pageHref('contact')} className={s.btnLight}>Request an appointment</a>
      </div>
    </section>
  )
}

function Header({ current }: { current: LuxePage }) {
  const link = (id: LuxePage, label: string, extraClass = '') => (
    <a href={pageHref(id)} className={extraClass} aria-current={current === id ? 'page' : undefined}>
      {label}
    </a>
  )
  return (
    <>
      <p className={s.topline}>Now booking [Month] &nbsp;/&nbsp; By appointment in {studio.city}</p>
      <header className={s.wrap}>
        <div className={s.header}>
          <nav aria-label="Main" className={s.navWrap}>
            <ul className={s.nav}>
              {navItems.map((item) => (
                <li key={item.id} className={item.id === 'contact' ? s.mobileOnly : undefined}>
                  {link(item.id, item.label)}
                </li>
              ))}
            </ul>
          </nav>
          <a href={pageHref('home')} className={s.logo} aria-current={current === 'home' ? 'page' : undefined}>
            Lumi
          </a>
          <div className={s.headerRight}>
            <ul className={s.nav}>
              <li>{link('contact', 'Contact')}</li>
            </ul>
            <a href={pageHref('contact')} className={s.reserve}>Reserve</a>
          </div>
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.footerGrid}>
          <div className={s.footerBrand}>
            <p className={s.footerLogo}>Lumi</p>
            <p className={s.footerTag}>A private nail atelier in {studio.city}. Considered manicures and fine nail art, one client at a time.</p>
            <a href={pageHref('contact')} className={s.btnLight}>Reserve</a>
          </div>
          <div>
            <p className={s.footerHead}>Explore</p>
            <ul className={s.footerList}>
              <li><a href={pageHref('home')}>Home</a></li>
              {navItems.map((item) => (
                <li key={item.id}><a href={pageHref(item.id)}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={s.footerHead}>Visit</p>
            <ul className={s.footerList}>
              <li>{studio.neighbourhood}, {studio.city}</li>
              <li>{studio.hours}</li>
              <li>Address shared on booking</li>
            </ul>
          </div>
          <div>
            <p className={s.footerHead}>Follow</p>
            <ul className={s.footerList}>
              <li><a href={pageHref('contact')}>Instagram {studio.instagram}</a></li>
              <li><a href={pageHref('contact')}>{studio.email}</a></li>
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>© 2026 Lumi Nail Atelier</span>
          <span>Made with care in {studio.city}</span>
        </div>
      </div>
    </footer>
  )
}

export function Layout({ current, children }: { current: LuxePage; children: ReactNode }) {
  return (
    <div className={s.page}>
      <Header current={current} />
      {children}
      <Footer />
    </div>
  )
}
