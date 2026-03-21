import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1
    }
  }, [])

  return (
    <section
      style={{
        height: '100dvh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '100px 28px 52px',
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.8) blur(0.4px)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <source src="https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/hero.mov" type="video/mp4" />
      </video>

      {/* Gradient — bottom heavy */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(6,6,10,0.1) 0%, rgba(6,6,10,0.4) 40%, rgba(6,6,10,0.96) 100%)',
        }}
      />

      {/* Logo — top */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          right: 28,
          left: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <span
          className="bebas"
          style={{ fontSize: 20, letterSpacing: 6, color: '#f0ede8' }}
        >
          TOX<span style={{ color: '#c9a84c' }}>1</span>C
        </span>
        <span
          style={{ fontSize: 11, letterSpacing: 2, color: 'rgba(240,237,232,0.4)' }}
        >
          @tox1cmusic
        </span>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Trust line */}
        <div style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div>
            <span style={{ color: '#c9a84c', fontSize: 13, letterSpacing: 4 }}>★★★★★</span>
            <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.45)', letterSpacing: 2, marginRight: 8 }}>
              200+ WEDDINGS · 100% 5-STAR
            </span>
          </div>
          <span style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(240,237,232,0.5)', fontWeight: 600 }}>
            MEET TOX1C
          </span>
        </div>

        {/* Headline — English, bold */}
        <h1
          className="bebas"
          style={{
            fontSize: 'clamp(52px, 14vw, 96px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#f0ede8',
            letterSpacing: '0.02em',
            marginBottom: 20,
            direction: 'ltr',
          }}
        >
          IT'S A RAVE
          <br />
          IN A WHITE
          <br />
          <span style={{ color: '#c9a84c' }}>DRESS.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(240,237,232,0.58)',
            marginBottom: 32,
            maxWidth: 420,
          }}
        >
          מהבמות של טומורולנד ועד לסצנה של ברזיל, דובאי ויפן -
          <br />
          <span style={{ color: '#c9a84c' }}>טוקסיק</span> מביאים את הסטנדרט הבינלאומי הזה ישירות לאירוע שלכם.
        </p>

      </div>

      {/* CTA — bottom */}
      <a
        href="#form"
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#c9a84c',
          color: '#06060a',
          padding: '15px 32px',
          borderRadius: 3,
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 1.5,
          textDecoration: 'none',
        }}
      >
        CHECK AVAILABILITY →
      </a>

      {/* Bottom gold line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(to left, transparent, rgba(201,168,76,0.5), transparent)',
        }}
      />
    </section>
  )
}
