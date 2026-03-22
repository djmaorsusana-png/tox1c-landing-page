import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/ADI_7653.jpg',          pos: 'center top', label: 'MAOR & OFEK'   },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/wedding-stage.jpg', pos: 'center 30%', label: 'WEDDING NIGHT' },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/crowd-day.jpg',     pos: 'center',     label: 'THE CROWD'     },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/dj-decks.jpg',      pos: 'center 30%', label: 'THE DECKS'     },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/festival.jpg',      pos: 'center 20%', label: 'FESTIVAL MODE' },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/live-set.jpg',      pos: 'center',     label: 'LIVE ENERGY'   },
]

export default function MomentSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section id="slider" style={{ background: '#f5f5f5', paddingTop: 64 }}>
      {/* Eyebrow */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500 }}>
          // THE VIBE
        </span>
      </div>

      {/* Slider */}
      <div
        style={{ position: 'relative', width: '100%', aspectRatio: '4/5', maxHeight: '78vh', overflow: 'hidden' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.pos,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.9s ease',
            }}
          />
        ))}

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)',
          }}
        />

        {/* Slide label */}
        <span
          style={{
            position: 'absolute',
            bottom: 52,
            left: 24,
            fontSize: 9,
            letterSpacing: 4,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 500,
          }}
        >
          // {slides[current].label}
        </span>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="הקודם"
          style={arrowStyle('right')}
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="הבא"
          style={arrowStyle('left')}
        >
          ›
        </button>

        {/* Dots */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`תמונה ${i + 1}`}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                border: 'none',
                background: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Copy below slider */}
      <div
        style={{
          padding: '48px 28px 64px',
          maxWidth: 560,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          className="bebas"
          style={{
            fontSize: 'clamp(36px, 9vw, 64px)',
            fontWeight: 400,
            color: '#0a0a0a',
            lineHeight: 1,
            letterSpacing: '0.03em',
            marginBottom: 20,
            direction: 'ltr',
          }}
        >
          100% ENERGY.
          <br />
          <span style={{ color: '#c9a84c' }}>ZERO COMPROMISES.</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.85,
            color: 'rgba(10,10,10,0.5)',
          }}
        >
          מהבמות של טומורולנד ועד לסצנה של ברזיל, דובאי ויפן — האירועים שלנו דורשים אנרגיה פסיכית ודיוק מקסימלי.
          לכן אנחנו מגבילים את מספר החתונות בעונה, כדי להבטיח שכל זוג יקבל 200% מאיתנו — משלב התכנון ועד לביט האחרון ברחבה.
        </p>
        <a
          href="#form"
          style={{
            display: 'inline-block',
            marginTop: 28,
            fontSize: 12,
            letterSpacing: 2,
            color: '#0a0a0a',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(10,10,10,0.3)',
            paddingBottom: 2,
          }}
        >
          CHECK AVAILABILITY →
        </a>
      </div>
    </section>
  )
}

function arrowStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 16,
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.75)',
    border: '1px solid rgba(0,0,0,0.1)',
    color: '#0a0a0a',
    width: 40,
    height: 40,
    borderRadius: '50%',
    fontSize: 22,
    lineHeight: '40px',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    zIndex: 2,
    padding: 0,
  }
}
