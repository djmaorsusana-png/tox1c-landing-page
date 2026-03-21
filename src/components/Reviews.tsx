import { useEffect, useRef } from 'react'

const heroQuote = {
  text: 'התחתנו לפני 3 שנים ועד היום כל מי שמתחתן שואל אותנו מי היו הדיג\'ייים שלנו. פשוט רמה בינלאומית.',
  author: 'זוג מרוצה',
  date: '3 שנים אחרי · מאומת',
}

const reviews = [
  {
    text: 'מהרגע שישבנו עם טוקסיק ידענו שזה בול מה שאנחנו צריכים. קיבלתי עשרות הודעות יום למחרת שהם היו מעולים.',
    tip: 'ההשקעה הכי חשובה היא ב-DJ.',
    date: 'אפריל 2024 · מאומת',
  },
  {
    text: 'אהבנו מאוד שהם שניים — זה מאפשר גמישות אמיתית. אחד תמיד על העמדה, אחד יכול ללכת לזוג. לא מכירים את זה אצל אף אחד אחר.',
    tip: 'הטיפ שלהם: לבחור TOX1C.',
    date: 'נובמבר 2024 · מאומת',
  },
  {
    text: 'הכל התחיל במפגש הראשון — מהרגע הראשון שפתחו לנו את הדלת ידענו שהגענו לידיים טובות.',
    tip: 'מה אהבנו: השירות, האכפתיות, המקצועיות.',
    date: 'אפריל 2024 · מאומת',
  },
  {
    text: 'קשה לסכם בכמה מילים — מקצוענים, רמה גבוהה ממש. היכולת לקלוט את הקהל ולבנות את האווירה פשוט רואים שהם מהטופ.',
    tip: 'לא לעשות חתונה בלי טוקסיק. באמת באמת.',
    date: '2024 · מאומת',
  },
  {
    text: 'הצמד הכי מטורף. רמה בינלאומית שלא מכירים בארץ — וגם שני אנשים מקסימים שהופכים בן רגע לשותפים למסע שלכם.',
    tip: 'הם ישר קלטו את הראש שלנו, את הקהל, את האווירה.',
    date: '2023 · מאומת',
  },
  {
    text: 'הרגשנו שיש מישהו שמנהל לנו את הלילה. לא הרגשנו לחץ של כלום ביום החתונה עצמו.',
    tip: 'בחרו TOX1C ותנוחו.',
    date: 'ינואר 2025 · מאומת',
  },
]

export default function Reviews() {
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
      id="reviews"
      ref={ref}
      style={{
        background: '#06060a',
        padding: 'clamp(64px, 8vw, 120px) 48px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>
            // זוגות מדברים
          </span>
          <h2 className="bebas" dir="ltr" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1, letterSpacing: '0.02em' }}>
            REAL <span style={{ color: '#c9a84c' }}>REACTIONS.</span>
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(240,237,232,0.4)', fontSize: 12, letterSpacing: 1.5 }}>
          <span style={{ color: '#c9a84c' }}>★★★★★</span>
          <span>ביקורות מאומתות · mit4mit.co.il</span>
        </div>
      </div>

      {/* Hero quote */}
      <div
        className="reveal"
        style={{
          background: '#111116',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: 'clamp(36px, 5vw, 56px)',
          marginBottom: 48,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background large quote mark */}
        <div
          className="bebas"
          style={{
            position: 'absolute',
            top: -20,
            right: 32,
            fontSize: 200,
            color: 'rgba(201,168,76,0.04)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          "
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#c9a84c', fontSize: 18 }}>★</span>
            ))}
          </div>
          <blockquote
            style={{
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              lineHeight: 1.55,
              color: '#f0ede8',
              fontWeight: 300,
              marginBottom: 28,
            }}
          >
            "{heroQuote.text}"
          </blockquote>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 13, color: '#c9a84c', fontWeight: 600, letterSpacing: 1 }}>
              {heroQuote.author}
            </span>
            <span style={{ fontSize: 12, color: 'rgba(240,237,232,0.35)', letterSpacing: 1 }}>
              {heroQuote.date}
            </span>
          </div>
        </div>
      </div>

      {/* Grid of reviews */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              background: '#111116',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              transition: 'background 0.25s',
              borderTop: '1px solid rgba(240,237,232,0.04)',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#1a1a20')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#111116')
            }
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: '#c9a84c', fontSize: 12 }}>★</span>
                ))}
              </div>
              <span style={{ fontSize: 10, color: '#c9a84c', letterSpacing: 1, fontWeight: 600 }}>
                מאומת ✓
              </span>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(240,237,232,0.7)', flex: 1 }}>
              "{r.text}"
            </p>

            <div
              style={{
                borderTop: '1px solid rgba(240,237,232,0.06)',
                paddingTop: 14,
                fontSize: 12,
                color: 'rgba(201,168,76,0.7)',
                fontStyle: 'italic',
              }}
            >
              {r.tip}
            </div>

            <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.25)', letterSpacing: 1 }}>
              {r.date}
            </span>
          </div>
        ))}
      </div>

      {/* Mit4mit badge */}
      <div
        style={{
          marginTop: 48,
          textAlign: 'center',
          padding: '20px',
          border: '1px solid rgba(201,168,76,0.1)',
          display: 'inline-block',
          width: '100%',
        }}
      >
        <a
          href="https://www.mit4mit.co.il/biz/103387"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: 'rgba(240,237,232,0.4)',
            textDecoration: 'none',
          }}
        >
          ✓ כל הביקורות מאומתות באופן עצמאי ב-mit4mit.co.il ←
        </a>
      </div>
    </section>
  )
}
