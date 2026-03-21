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
        poster="https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/hero.jpg"
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

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Headline — English, bold */}
        <h1
          className="bebas"
          style={{
            fontSize: 'clamp(52px, 14vw, 96px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#c9a84c',
            letterSpacing: '0.02em',
            marginBottom: 20,
            direction: 'ltr',
          }}
        >
          IT'S A RAVE
          <br />
          IN A <span style={{ color: '#ffffff' }}>WHITE</span>
          <br />
          DRESS.
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
