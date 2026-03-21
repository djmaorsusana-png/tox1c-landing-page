import { useState, useEffect, useRef } from 'react'

const RECEPTION_VIDEOS = [
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/reception2.mp4', ratio: '9/16' },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/reception3.mp4', ratio: '16/9' },
  { src: 'https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/videos/reception.mp4',  ratio: '16/9' },
]

function ReceptionVideoCarousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % RECEPTION_VIDEOS.length)
        setFading(false)
      }, 600)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    videoRef.current?.load()
    videoRef.current?.play().catch(() => {})
  }, [current])

  const video = RECEPTION_VIDEOS[current]

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: video.ratio,
        maxHeight: 360,
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <video
        ref={videoRef}
        key={video.src}
        autoPlay
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
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500, display: 'block', marginBottom: 12 }}>
            // THE LIVE RECEPTION
          </span>
          <h2 className="bebas" style={{ fontSize: 'clamp(32px, 9vw, 52px)', color: '#0a0a0a', lineHeight: 1, letterSpacing: '0.03em', margin: 0 }}>
            קבלת פנים{' '}
            <span style={{ WebkitTextStroke: '1.5px #0a0a0a', color: 'transparent' }}>אחרת.</span>
          </h2>
        </div>
        <div
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
          </div>
        </div>
      </div>
    </section>
  )
}
