import { useEffect, useRef } from 'react'

const steps = [
  {
    n: '01',
    title: 'SET חי בקבלת הפנים',
    subtitle: 'הפתיחה שמגדירה הכל',
    body: 'סט אלקטרוני חי שמיד אומר לאורחים: הערב הזה שונה. לא רשימת שירים — חוויה שנבנית בזמן אמת.',
  },
  {
    n: '02',
    title: 'ניהול מלא לאורך כל הלילה',
    subtitle: 'מקבלת פנים עד האפטר',
    body: 'מנהלים את כל השלבים — קבלת פנים, חופה, ריקודים. הזוג חי את הרגע — אנחנו על הכל.',
  },
  {
    n: '03',
    title: 'קריאת הקהל',
    subtitle: 'בנייה בזמן אמת',
    body: 'קולטים את הקהל, מתאימים את הסאונד, עוברים בין סגנונות בצורה שמרגישה טבעית לחלוטין.',
  },
  {
    n: '04',
    title: 'אפטר — לאן שאתם רוצים',
    subtitle: 'כי הלילה הוא שלכם',
    body: 'הרחבה לא עוצרת. האפטר ממשיך בדיוק לאן שאתם רוצים — כי זה האירוע שלכם עד הסוף.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how"
      ref={ref}
      style={{
        background: '#111116',
        padding: 'clamp(64px, 8vw, 120px) 48px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
        className="max-md:block"
      >
        {/* Left: sticky header */}
        <div style={{ position: 'sticky', top: 120 }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'block' }}>
            // איך זה עובד
          </span>
          <h2
            className="bebas"
            dir="ltr"
            style={{
              fontSize: 'clamp(42px, 5vw, 72px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              marginBottom: 28,
            }}
          >
            NOT A
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(240,237,232,0.25)', color: 'transparent' }}>
              PLAYLIST.
            </span>
            <br />
            <span style={{ color: '#c9a84c' }}>AN EXPERIENCE.</span>
          </h2>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: 'rgba(240,237,232,0.5)',
              maxWidth: 380,
            }}
          >
            ארבעה שלבים שבונים את הלילה שאורחים יזכרו שנים קדימה.
          </p>

          <div style={{ marginTop: 48 }}>
            <a
              href="#form"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#c9a84c',
                padding: '12px 24px',
                borderRadius: 2,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(201,168,76,0.08)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
              }}
            >
              שמרו את התאריך שלכם ←
            </a>
          </div>
        </div>

        {/* Right: steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'flex',
                gap: 24,
                padding: '36px 0',
                borderBottom:
                  i < steps.length - 1 ? '1px solid rgba(240,237,232,0.06)' : 'none',
              }}
            >
              {/* Step number + line */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0,
                  minWidth: 40,
                }}
              >
                <div
                  className="bebas"
                  style={{
                    fontSize: 28,
                    color: '#c9a84c',
                    lineHeight: 1,
                    letterSpacing: '0.04em',
                  }}
                >
                  {step.n}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      background: 'rgba(201,168,76,0.15)',
                      marginTop: 12,
                      minHeight: 40,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingTop: 4 }}>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    color: 'rgba(201,168,76,0.6)',
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  {step.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#f0ede8',
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'rgba(240,237,232,0.5)',
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
