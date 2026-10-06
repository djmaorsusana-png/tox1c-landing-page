import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.height = `${window.innerHeight}px`
    }
  }, [])

  // Parallax: image drifts slower than the page and zooms in slightly; text rises and fades out
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const h = window.innerHeight
      const y = Math.min(window.scrollY, h)
      const p = y / h
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + p * 0.08})`
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${-y * 0.2}px, 0)`
        contentRef.current.style.opacity = String(Math.max(0, 1 - p * 1.8))
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        height: '100svh',
        position: 'relative',
        overflow: 'hidden',
        background: '#f7f4ee',
        direction: 'ltr',
      }}
    >
      {/* Image layer — masked to transparent at the bottom so the parallax-shifted image never leaves a seam at the section edge */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 92%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, #000 92%, transparent 100%)',
        }}
      >
        <img
          ref={imgRef}
          src="/images/hero-silhouette.webp"
          srcSet="/images/hero-silhouette-mobile.webp 1125w, /images/hero-silhouette.webp 1920w"
          sizes="100vw"
          width={1920}
          height={3732}
          fetchPriority="high"
          alt="TOX1C — Maor & Ofek"
          className="hero-img"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Gradient — dark mid for text readability, fades to page bg at bottom */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(to bottom, rgba(247,244,238,0.55) 0%, rgba(247,244,238,0) 15%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.78) 72%, rgba(10,10,10,0.3) 90%, rgba(247,244,238,1) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content — anchored to bottom */}
      <div
        ref={contentRef}
        style={{
          willChange: 'transform, opacity',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 28px 100px',
          textAlign: 'center',
          direction: 'rtl',
        }}
      >
        {/* Headline */}
        <h1
          className="bebas"
          style={{
            fontSize: 'clamp(56px, 15vw, 104px)',
            fontWeight: 400,
            lineHeight: 0.92,
            color: '#ffffff',
            letterSpacing: '0.02em',
            marginBottom: 18,
            direction: 'ltr',
          }}
        >
          IT'S A RAVE
          <br />
          IN A <span style={{ WebkitTextStroke: '2px #ffffff', color: 'transparent' }}>WHITE</span>
          <br />
          DRESS.
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.6)',
          marginBottom: 32,
          maxWidth: 320,
        }}>
          הסטנדרט הבינלאומי — ישירות לאירוע שלכם.
        </p>

        {/* CTA */}
        <a
          href="#form"
          className="btn-primary"
          style={{
            background: '#ffffff',
            color: '#0a0a0a',
            padding: '16px 36px',
            borderRadius: 3,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
            display: 'inline-block',
          }}
        >
          בדקו זמינות לתאריך שלכם
        </a>

        {/* Trust badge */}
        <a
          href="https://www.mit4mit.co.il/biz/103387"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18, direction: 'rtl', textDecoration: 'none', padding: '6px 4px' }}
        >
          <span aria-hidden="true" style={{ color: '#c9a84c', fontSize: 14, letterSpacing: 2 }}>★★★★★</span>
          <span aria-hidden="true" style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.3)' }} />
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'rgba(255,255,255,0.35)' }}>
            94 ביקורות 5 כוכבים ב-mit4mit
          </span>
        </a>

        {/* Scroll indicator — mouse icon with animated dot */}
        <div aria-hidden="true" className="hero-scroll" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 32 }}>
          <span style={{ fontSize: 8, letterSpacing: 3, color: 'rgba(255,255,255,0.2)' }}>SCROLL</span>
          <div style={{
            width: 22,
            height: 34,
            borderRadius: 11,
            border: '1.5px solid rgba(255,255,255,0.22)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 5,
          }}>
            <div
              className="scroll-dot"
              style={{
                width: 3,
                height: 7,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.5)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
