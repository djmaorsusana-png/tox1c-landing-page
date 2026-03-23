import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.height = `${window.innerHeight}px`
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        height: '100svh',
        position: 'relative',
        overflow: 'hidden',
        background: '#f4f4f4',
        direction: 'ltr',
      }}
    >
      {/* Silhouette image */}
      <img
        src="https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/hero-silhouette.jpg.jpg?v=2"
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
          transform: 'translateZ(0)',
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
            'linear-gradient(to bottom, rgba(244,244,244,0) 15%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.78) 72%, rgba(10,10,10,0.3) 90%, rgba(245,245,245,1) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content — anchored to bottom */}
      <div
        style={{
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
          }}
        >
          בדקו זמינות לתאריך שלכם
        </a>

        {/* Scroll indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginTop: 28 }}>
          <span style={{ fontSize: 8, letterSpacing: 3, color: 'rgba(255,255,255,0.25)' }}>SCROLL</span>
          <div style={{ width: 1, height: 24, background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }} />
        </div>
      </div>
    </section>
  )
}
