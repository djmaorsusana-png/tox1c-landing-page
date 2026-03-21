import { useEffect, useRef } from 'react'

const pillars = [
  {
    num: '01',
    icon: '🎛',
    title: 'SET אלקטרוני חי',
    tagline: 'מה שאף DJ אחר בארץ לא נותן.',
    body: 'בזמן שאתם יורדים לחופה — האורחים שלכם כבר בתוך חוויה. לא מוזיקת רקע. לא שיר אחד. סט אלקטרוני חי על תופים ומקלדת, שמגדיר מהרגע הראשון: הלילה הזה שונה.',
  },
  {
    num: '02',
    icon: '👥',
    title: 'שניים. תמיד.',
    tagline: 'אחד על הסט — אחד עליכם.',
    body: 'מאור ואופק. בזמן שאחד בונה את האווירה, השני פנוי לכם — לרגעים, לשינויים, לסורפריזים. זה ההבדל בין DJ שמנגן לבין צוות שמנהל לכם לילה שלם.',
  },
  {
    num: '03',
    icon: '🌙',
    title: 'אתם חיים את הרגע',
    tagline: 'אנחנו על הכל מהרגע הראשון.',
    body: 'קבלת פנים, חופה, ריקודים, אפטר — אנחנו מנהלים כל שלב. מגיבים לקהל בזמן אמת, מתאימים את הסאונד, מוודאים שאתם לא מרגישים לחץ של כלום — רק שמחה.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why"
      ref={ref}
      style={{
        background: '#06060a',
        padding: 'clamp(72px, 9vw, 128px) 48px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 72, maxWidth: 600 }}>
        <span className="eyebrow" style={{ marginBottom: 20, display: 'block' }}>
          // למה TOX1C
        </span>
        <h2
          className="bebas"
          dir="ltr"
          style={{
            fontSize: 'clamp(44px, 6vw, 84px)',
            lineHeight: 0.92,
            letterSpacing: '0.02em',
            marginBottom: 24,
          }}
        >
          NOT YOUR
          <br />
          <span
            style={{ WebkitTextStroke: '2px rgba(240,237,232,0.22)', color: 'transparent' }}
          >
            AVERAGE
          </span>
          <br />
          <span style={{ color: '#c9a84c' }}>WEDDING DJ.</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: 'rgba(240,237,232,0.5)',
            maxWidth: 480,
          }}
        >
          כלות שנכנסות לאירוע שלנו יוצאות עם הודעות — "מי היה ה-DJ שלכם?" שנים אחרי.
          <br />
          זה לא מקרה. זה מה שאנחנו בונים בכוונה.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
        }}
      >
        {pillars.map((p, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              background: '#111116',
              padding: '44px 36px',
              borderTop: '2px solid #c9a84c',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#18181f')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#111116')
            }
          >
            {/* Ghost number */}
            <div
              className="bebas"
              style={{
                fontSize: 90,
                lineHeight: 0.85,
                color: 'rgba(201,168,76,0.06)',
                position: 'absolute',
                top: 16,
                left: 24,
                letterSpacing: '0.02em',
                userSelect: 'none',
              }}
            >
              {p.num}
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 30, marginBottom: 24 }}>{p.icon}</div>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: '#f0ede8',
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: '#c9a84c',
                  letterSpacing: 1.2,
                  marginBottom: 18,
                  fontWeight: 500,
                }}
              >
                {p.tagline}
              </p>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'rgba(240,237,232,0.52)',
                }}
              >
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pull-quote strip */}
      <div
        className="reveal"
        style={{
          marginTop: 2,
          background: '#111116',
          borderTop: '1px solid rgba(201,168,76,0.12)',
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: 'rgba(240,237,232,0.6)',
            fontStyle: 'italic',
            maxWidth: 560,
            lineHeight: 1.7,
          }}
        >
          "לא הרגשנו לחץ של כלום ביום החתונה — הרגשנו שיש מישהו שמנהל לנו את הלילה."
        </p>
        <a
          href="#form"
          style={{
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.35)',
            color: '#c9a84c',
            padding: '11px 24px',
            borderRadius: 2,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          בדקו זמינות ←
        </a>
      </div>
    </section>
  )
}
