import { useState, useEffect, useRef } from 'react'

const RECEPTION_VIDEOS = [
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/reception2.mp4' },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/reception3.mp4' },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/reception.mp4' },
]

function ReceptionVideoCarousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [inView, setInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % RECEPTION_VIDEOS.length)
        setFading(false)
      }, 600)
    }, 5000)
    return () => clearInterval(timer)
  }, [inView])

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    if (!inView) {
      vid.pause()
      return
    }
    vid.load()
    vid.oncanplay = () => {
      if (current === 0) vid.currentTime = 3
      vid.play().catch(() => {})
      vid.oncanplay = null
    }
  }, [current, inView])

  const video = RECEPTION_VIDEOS[current]

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 320,
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <video
        ref={videoRef}
        key={video.src}
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
        }}
      />
      <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {RECEPTION_VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 16 : 5,
              height: 5,
              borderRadius: 3,
              border: 'none',
              background: i === current ? '#ffffff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ReceptionSection() {
  return (
    <section style={{ background: '#ffffff', padding: '56px 28px' }}>
      <div style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500, display: 'block', marginBottom: 12 }}>
            // THE LIVE RECEPTION
          </span>
          <h2 className="bebas" style={{ fontSize: 'clamp(32px, 9vw, 52px)', color: '#0a0a0a', lineHeight: 1, letterSpacing: '0.03em', margin: 0 }}>
            קבלת פנים{' '}
            <span style={{ WebkitTextStroke: '1.5px #0a0a0a', color: 'transparent' }}>אחרת.</span>
          </h2>
        </div>
        <div className="reveal delay-1"
          style={{
            background: '#f5f5f5',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <ReceptionVideoCarousel />
          <div style={{ padding: '18px 24px 22px' }}>
            <span
              style={{
                fontSize: 9,
                letterSpacing: 4,
                color: '#c9a84c',
                fontWeight: 700,
                display: 'block',
                marginBottom: 10,
              }}
            >
              // PRO TIP: THE LIVE RECEPTION
            </span>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: 'rgba(10,10,10,0.5)',
                margin: 0,
                marginBottom: 16,
              }}
            >
              יש אפשרות להמיר את קבלת הפנים לסט אלקטרוני חי
              שמייצר אווירת Sunset יוקרתית לפני שהערב מתחיל.
              שאלו אותנו על זה בשיחה.
            </p>

            {/* Asterisk note */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
                padding: '10px 14px',
                background: 'rgba(0,0,0,0.03)',
                border: '1px dashed rgba(0,0,0,0.15)',
                borderRadius: 4,
              }}
            >
              <span
                style={{
                  color: '#0a0a0a',
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                ✶
              </span>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.65,
                  color: 'rgba(10,10,10,0.45)',
                  margin: 0,
                  direction: 'rtl',
                }}
              >
                ניתן לסגור{' '}
                <span style={{ color: '#0a0a0a', fontWeight: 600 }}>קבלת פנים בלבד</span>
                {' '}בכפוף לתאריך פנוי.
                <br />
                שלחו לנו הודעת ווצאפ ונדבר.
              </p>
            </div>

            <a
              href={`https://wa.me/972528023292?text=${encodeURIComponent('היי TOX1C! 👋\nמתעניינים בקבלת פנים עם סט אלקטרוני חי — אשמח לשמוע פרטים 🎶')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: 14,
                background: 'rgba(37,211,102,0.07)',
                border: '1px solid rgba(37,211,102,0.3)',
                borderRadius: 4,
                padding: '13px 20px',
                color: '#1da851',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1da851">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              שאלו אותנו על קבלת פנים בווצאפ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
