import { useState, useEffect, useRef } from 'react'

const slides = [
  { src: '/images/ADI_7653.webp',        pos: 'center top', label: 'MAOR & OFEK'   },
  { src: '/images/keys-night.webp',      pos: 'center 25%', label: 'LIVE KEYS'     },
  { src: '/images/crowd-day.webp',       pos: 'center',     label: 'THE CROWD'     },
  { src: '/images/aqueduct-sunset.webp', pos: 'center 60%', label: 'SUNSET SET'    },
  { src: '/images/dj-decks.webp',        pos: 'center 30%', label: 'THE DECKS'     },
  { src: '/images/drums-day.webp',       pos: 'center 35%', label: 'LIVE DRUMS'    },
  { src: '/images/festival.webp',        pos: 'center 20%', label: 'FESTIVAL MODE' },
  { src: '/images/wedding-floor.webp',   pos: 'center 55%', label: 'WEDDING NIGHT' },
]

const SLIDE_MS = 5000
const HOLD_MS = 250
// Ken Burns zoom origin rotates per slide so consecutive images don't drift the same way
const ZOOM_ORIGINS = ['50% 30%', '30% 50%', '70% 50%', '50% 70%']

export default function MomentSlider() {
  // `prev` keeps its zoom class while fading out, so the outgoing image doesn't snap back to scale 1
  const [{ current, prev }, setSlide] = useState({ current: 0, prev: -1 })
  const [hovering, setHovering] = useState(false)
  const [holding, setHolding] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const pointer = useRef<{ x: number; t: number } | null>(null)
  const holdTimer = useRef<number>(0)

  const paused = hovering || holding || !inView

  const goTo = (n: number) =>
    setSlide((s) => ({ current: (n + slides.length) % slides.length, prev: s.current }))
  const next = () => goTo(current + 1)
  const back = () => goTo(current - 1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handlePointerDown(e: React.PointerEvent) {
    if ((e.target as HTMLElement).closest('button')) return
    // Capture so pointerup always arrives here, even if released outside — otherwise `holding` could stick
    e.currentTarget.setPointerCapture(e.pointerId)
    pointer.current = { x: e.clientX, t: Date.now() }
    holdTimer.current = window.setTimeout(() => setHolding(true), HOLD_MS)
  }

  function handlePointerUp(e: React.PointerEvent) {
    clearTimeout(holdTimer.current)
    setHolding(false)
    const start = pointer.current
    pointer.current = null
    if (!start) return
    const dx = e.clientX - start.x
    if (Math.abs(dx) > 40) {
      if (dx < 0) next()
      else back()
    } else if (Date.now() - start.t < HOLD_MS) {
      // Stories-style tap: right half = next, left half = previous
      const rect = e.currentTarget.getBoundingClientRect()
      if (e.clientX - rect.left > rect.width / 2) next()
      else back()
    }
  }

  function handlePointerCancel() {
    clearTimeout(holdTimer.current)
    setHolding(false)
    pointer.current = null
  }

  return (
    <section id="slider" style={{ background: 'transparent', paddingTop: 64 }}>
      {/* Eyebrow */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500 }}>
          // THE VIBE
        </span>
      </div>

      {/* Slider wrapper — centered on desktop */}
      <div className="slider-wrapper">
        <div
          ref={containerRef}
          className="slider-container story"
          // Hover-pause for real mice only — touch fires compat mouseenter with no mouseleave, which would freeze the slider
          onPointerEnter={(e) => e.pointerType === 'mouse' && setHovering(true)}
          onPointerLeave={(e) => e.pointerType === 'mouse' && setHovering(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onContextMenu={(e) => e.preventDefault()}
          style={{ direction: 'ltr', cursor: 'pointer', touchAction: 'pan-y', userSelect: 'none' }}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
              className={i === current || i === prev ? 'kenburns' : undefined}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: slide.pos,
                transformOrigin: ZOOM_ORIGINS[i % ZOOM_ORIGINS.length],
                animationPlayState: paused && i === current ? 'paused' : 'running',
                opacity: i === current ? 1 : 0,
                transition: 'opacity 0.9s ease',
              }}
            />
          ))}

          {/* Overlays — top for progress bars, bottom for label */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 16%), linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)',
              pointerEvents: 'none',
            }}
          />

          {/* Progress bars — the active bar's animation end advances the slide, so pausing freezes both */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              right: 12,
              display: 'flex',
              gap: 4,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 2.5,
                  borderRadius: 2,
                  background: 'rgba(255,255,255,0.35)',
                  overflow: 'hidden',
                }}
              >
                <div
                  key={i === current ? `active-${current}` : i}
                  className={i === current ? 'story-progress' : undefined}
                  onAnimationEnd={i === current ? next : undefined}
                  style={{
                    height: '100%',
                    background: '#ffffff',
                    transformOrigin: 'left',
                    transform: i < current ? 'scaleX(1)' : 'scaleX(0)',
                    animationDuration: `${SLIDE_MS}ms`,
                    animationPlayState: paused ? 'paused' : 'running',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Slide label */}
          <span
            style={{
              position: 'absolute',
              bottom: 20,
              left: 24,
              fontSize: 9,
              letterSpacing: 4,
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500,
              pointerEvents: 'none',
            }}
          >
            // {slides[current].label}
          </span>

          {/* Prev / Next — desktop only; on mobile the tap zones replace them */}
          <button onClick={back} aria-label="הקודם" className="story-arrow" style={arrowStyle('left')}>‹</button>
          <button onClick={next} aria-label="הבא" className="story-arrow" style={arrowStyle('right')}>›</button>
        </div>
      </div>

      {/* Copy below slider */}
      <div
        style={{
          padding: '48px 28px 48px',
          maxWidth: 560,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          className="bebas reveal"
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
          className="reveal delay-1"
          style={{
            fontSize: 15,
            lineHeight: 1.85,
            color: '#4a4a52',
          }}
        >
          מהבמות של טומורולנד ועד לסצנה של ברזיל, דובאי ויפן — האירועים שלנו דורשים אנרגיה פסיכית ודיוק מקסימלי.
          לכן אנחנו מגבילים את מספר החתונות בעונה, כדי להבטיח שכל זוג יקבל 200% מאיתנו — משלב התכנון ועד לביט האחרון ברחבה.
        </p>
        <a
          href="#form"
          className="link-draw reveal delay-2"
          style={{
            display: 'inline-block',
            marginTop: 28,
            fontSize: 12,
            letterSpacing: 2,
            color: '#0a0a0a',
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
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    zIndex: 2,
    padding: 0,
  }
}
