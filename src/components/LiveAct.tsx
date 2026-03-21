import { useEffect, useRef } from 'react'

const blocks = [
  {
    tag: 'HYBRID DRUMS',
    img: '/images/drummer.jpg',
    imgPosition: 'center 20%',
    text: 'סאונד אלקטרוני מוקפד שפוגש את האנרגיה הפיזית של תיפוף חי. הבייסליין מקבל ממד חדש שאי אפשר להתעלם ממנו.',
  },
  {
    tag: 'LIVE SYNTHS',
    img: '/images/bw-duo.jpg',
    imgPosition: 'center 25%',
    text: 'אלתור על סינתיסייזרים שמתאים את עצמו בדיוק לתדר של הרחבה. אף דרופ לא נשמע אותו הדבר פעמיים.',
  },
]

export default function LiveAct() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="live-act"
      ref={ref}
      style={{
        background: '#06060a',
        padding: 'clamp(72px, 9vw, 128px) 48px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 72 }}>
        <span className="eyebrow" style={{ marginBottom: 20, display: 'block' }}>
          // THE LIVE ELECTRONIC SOUL
        </span>

        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#f0ede8',
            marginBottom: 28,
            maxWidth: 700,
          }}
        >
          לא מנגנים מוזיקה.
          <br />
          <span style={{ color: '#c9a84c' }}>יוצרים אותה בלייב.</span>
        </h2>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: 'rgba(240,237,232,0.52)',
            maxWidth: 560,
          }}
        >
          השילוב המדויק בין ביטים אלקטרוניים רבי עוצמה לבין נגינה חיה שמרגישה את הקהל בזמן אמת.
        </p>
      </div>

      {/* Two blocks side by side */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
        }}
        className="max-md:block"
      >
        {blocks.map((b, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 480,
            }}
          >
            {/* Photo background */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${b.img})`,
                backgroundSize: 'cover',
                backgroundPosition: b.imgPosition,
                filter: 'brightness(0.35)',
                transition: 'transform 0.6s ease, filter 0.4s ease',
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(6,6,10,0.9) 0%, rgba(6,6,10,0.3) 60%, transparent 100%)',
              }}
            />

            {/* Gold top border */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: '#c9a84c',
              }}
            />

            {/* Content */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                minHeight: 480,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '36px 36px 40px',
              }}
            >
              <span
                className="bebas"
                style={{
                  fontSize: 11,
                  letterSpacing: 4,
                  color: '#c9a84c',
                  marginBottom: 16,
                  display: 'block',
                }}
              >
                // {b.tag}
              </span>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: 'rgba(240,237,232,0.8)',
                  maxWidth: 380,
                }}
              >
                {b.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip: festival photo full-width */}
      <div
        className="reveal"
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginTop: 2,
          height: 280,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/festival.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'brightness(0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(6,6,10,0.8) 0%, transparent 50%, rgba(6,6,10,0.8) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 16,
            textAlign: 'center',
          }}
        >
          <span
            className="bebas"
            style={{ fontSize: 11, letterSpacing: 5, color: '#c9a84c' }}
          >
            // THE RESULT
          </span>
          <p
            className="bebas"
            dir="ltr"
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              letterSpacing: '0.04em',
              color: '#f0ede8',
              lineHeight: 1.1,
            }}
          >
            200+ COUPLES.
            <br />
            <span style={{ color: '#c9a84c' }}>ONE STANDARD.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
