import { useEffect, useRef } from 'react'

const pillars = [
  {
    num: '01',
    title: 'SET חי בקבלת הפנים',
    tagline: 'הרגע שמגדיר את כל הלילה.',
    body: 'בזמן שאתם יורדים לחופה, האורחים כבר בתוך אווירה. לא מוזיקת רקע — סט אלקטרוני חי שמיד מסמן: הלילה הזה שונה. אף DJ אחר בארץ לא עושה את זה.',
    icon: '🎛',
  },
  {
    num: '02',
    title: 'שניים. תמיד.',
    tagline: 'אחד על הציוד — אחד על הזוג.',
    body: 'מאור ואופק. כשאחד בונה את הסט, השני פנוי לכם — לרגעים, לשינויים, לסורפריזים. שאר ה-DJים עושים את זה לבד. אנחנו לא.',
    icon: '👥',
  },
  {
    num: '03',
    title: 'ניהול מלא, לילה שלם',
    tagline: 'אתם חיים. אנחנו על הכל.',
    body: 'קבלת פנים, חופה, ריקודים, אפטר — אנחנו מנהלים כל שלב. קולטים את הקהל, עוברים בין סגנונות, מתאימים בזמן אמת. הזוג לא מרגיש לחץ של כלום.',
    icon: '🌙',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
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
        padding: 'clamp(64px, 8vw, 120px) 48px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 64, maxWidth: 640 }}>
        <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>
          // למה TOX1C
        </span>
        <h2
          className="bebas"
          dir="ltr"
          style={{
            fontSize: 'clamp(42px, 6vw, 80px)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
          }}
        >
          NOT YOUR
          <br />
          <span style={{ WebkitTextStroke: '2px rgba(240,237,232,0.25)', color: 'transparent' }}>
            AVERAGE
          </span>
          <br />
          <span style={{ color: '#c9a84c' }}>WEDDING DJ.</span>
        </h2>
      </div>

      {/* Cards grid */}
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
              padding: '40px 36px',
              borderTop: '2px solid #c9a84c',
              position: 'relative',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#1a1a20')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#111116')
            }
          >
            {/* Number */}
            <div
              className="bebas"
              style={{
                fontSize: 80,
                lineHeight: 0.85,
                color: 'rgba(201,168,76,0.08)',
                position: 'absolute',
                top: 24,
                left: 28,
                letterSpacing: '0.02em',
              }}
            >
              {p.num}
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 28, marginBottom: 20 }}>{p.icon}</div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: '#f0ede8',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: '#c9a84c',
                  letterSpacing: 1,
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                {p.tagline}
              </p>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: 'rgba(240,237,232,0.55)',
                }}
              >
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ height: 1, flex: 1, background: 'rgba(201,168,76,0.15)' }} />
        <a
          href="#form"
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: '#c9a84c',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          בדקו אם התאריך שלכם פנוי ←
        </a>
        <div style={{ height: 1, flex: 1, background: 'rgba(201,168,76,0.15)' }} />
      </div>
    </section>
  )
}
