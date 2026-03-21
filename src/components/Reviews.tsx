import { useEffect, useRef } from 'react'

const heroQuote = {
  text: 'התחתנו לפני 3 שנים ועד היום כל מי שמתחתן שואל אותנו מי היו הדיג\'ייים שלנו. פשוט רמה בינלאומית.',
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
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
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
        background: '#111116',
        padding: 'clamp(72px, 9vw, 128px) 48px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 64 }}>
        <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>
          // social proof
        </span>
        <h2
          className="bebas"
          dir="ltr"
          style={{
            fontSize: 'clamp(56px, 9vw, 120px)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            color: '#f0ede8',
            marginBottom: 20,
          }}
        >
          THE <span style={{ color: '#c9a84c' }}>VIBE.</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: 'rgba(240,237,232,0.45)',
            lineHeight: 1.7,
            maxWidth: 500,
          }}
        >
          הקהל מצביע ברגליים.
          <br />
          <strong style={{ color: 'rgba(240,237,232,0.65)', fontWeight: 600 }}>
            למעלה מ-200 זוגות שכבר חוו את הטירוף.
          </strong>
        </p>
      </div>

      {/* Hero quote */}
      <div
        className="reveal"
        style={{
          background: '#06060a',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: 'clamp(36px, 5vw, 60px)',
          marginBottom: 2,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bebas"
          style={{
            position: 'absolute',
            top: -30,
            right: 28,
            fontSize: 220,
            color: 'rgba(201,168,76,0.04)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          "
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 3, marginBottom: 28 }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#c9a84c', fontSize: 20 }}>★</span>
            ))}
          </div>
          <blockquote
            style={{
              fontSize: 'clamp(19px, 2.8vw, 28px)',
              lineHeight: 1.55,
              color: '#f0ede8',
              fontWeight: 300,
              marginBottom: 32,
            }}
          >
            "{heroQuote.text}"
          </blockquote>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 11, color: '#c9a84c', fontWeight: 700, letterSpacing: 2 }}>
              ✓ VERIFIED COUPLE
            </span>
            <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.3)', letterSpacing: 1 }}>
              {heroQuote.date}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
          marginBottom: 2,
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              background: '#06060a',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              transition: 'background 0.25s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#0f0f14')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#06060a')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: '#c9a84c', fontSize: 12 }}>★</span>
                ))}
              </div>
              <span style={{ fontSize: 9, color: '#c9a84c', letterSpacing: 1.5, fontWeight: 700 }}>
                VERIFIED ✓
              </span>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(240,237,232,0.68)', flex: 1 }}>
              "{r.text}"
            </p>

            <div
              style={{
                borderTop: '1px solid rgba(240,237,232,0.06)',
                paddingTop: 14,
                fontSize: 12,
                color: 'rgba(201,168,76,0.65)',
                fontStyle: 'italic',
              }}
            >
              {r.tip}
            </div>

            <span style={{ fontSize: 10, color: 'rgba(240,237,232,0.22)', letterSpacing: 1.5 }}>
              {r.date}
            </span>
          </div>
        ))}
      </div>

      {/* Mit4mit badge */}
      <div
        style={{
          padding: '22px',
          border: '1px solid rgba(201,168,76,0.1)',
          textAlign: 'center',
        }}
      >
        <a
          href="https://www.mit4mit.co.il/biz/103387"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 11,
            letterSpacing: 2.5,
            color: 'rgba(240,237,232,0.35)',
            textDecoration: 'none',
          }}
        >
          ✓ כל הביקורות מאומתות באופן עצמאי ב-mit4mit.co.il ←
        </a>
      </div>
    </section>
  )
}
