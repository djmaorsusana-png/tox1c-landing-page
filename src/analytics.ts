// Meta Pixel + GA4, loaded only when their IDs are set (Railway env vars, read at build time)
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined
const GA_ID = import.meta.env.VITE_GA_ID as string | undefined

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[]; callMethod?: (...args: unknown[]) => void; loaded?: boolean; version?: string; push?: unknown }

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: Fbq
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function loadScript(src: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

function initPixel(id: string) {
  // Stub that queues calls until fbevents.js loads (official snippet, unminified)
  const fbq: Fbq = (...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue!.push(args)
  }
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq
  window.fbq = window._fbq = fbq
  loadScript('https://connect.facebook.net/en_US/fbevents.js')
  fbq('init', id)
  fbq('track', 'PageView')
}

function initGA(id: string) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id)
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${id}`)
}

export function trackLead() {
  window.fbq?.('track', 'Lead')
  window.gtag?.('event', 'generate_lead')
}

export function trackContact(source: string) {
  window.fbq?.('track', 'Contact', { content_name: source })
  window.gtag?.('event', 'contact', { method: 'whatsapp', source })
}

export function initAnalytics() {
  if (PIXEL_ID) initPixel(PIXEL_ID)
  if (GA_ID) initGA(GA_ID)

  // Every WhatsApp link counts as a Contact, wherever it sits on the page
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="https://wa.me"]')
    if (link) trackContact(link.dataset.track || 'whatsapp')
  })
}
