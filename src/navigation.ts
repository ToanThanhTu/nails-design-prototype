import { useEffect, useState } from 'react'

const NAVIGATE_EVENT = 'app:navigate'

function scrollToTarget(hash: string) {
  const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
  if (target) target.scrollIntoView()
  else window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
}

/** Go to another page of this app without a full reload, always starting at the top. */
export function navigate(href: string) {
  const url = new URL(href, window.location.href)
  if (url.href !== window.location.href) {
    try {
      window.history.pushState(null, '', url)
    } catch {
      // Some embedded previews block history changes: fall back to a normal page load.
      window.location.assign(url.href)
      return
    }
    window.dispatchEvent(new Event(NAVIGATE_EVENT))
  }
  // Wait for the new page to render before scrolling.
  requestAnimationFrame(() => scrollToTarget(url.hash))
}

/** Re-renders the caller whenever the URL changes (link clicks, back/forward). */
export function useUrl() {
  const [, setVersion] = useState(0)
  useEffect(() => {
    const update = () => setVersion((v) => v + 1)
    window.addEventListener(NAVIGATE_EVENT, update)
    window.addEventListener('popstate', update)
    return () => {
      window.removeEventListener(NAVIGATE_EVENT, update)
      window.removeEventListener('popstate', update)
    }
  }, [])
  return window.location
}

/**
 * Sends every internal link click through `navigate`, so the new page opens at the top.
 * Same-page anchors (href="#section") keep the browser's normal smooth scroll.
 */
export function useLinkInterception() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.('a')
      if (!link || !link.href || link.target || link.hasAttribute('download')) return
      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return
      const samePage = url.search === window.location.search
      if (samePage && url.hash) return
      e.preventDefault()
      navigate(url.href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
