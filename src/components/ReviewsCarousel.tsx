import { useRef, useState } from 'react'

const heroQuote = {
  text: 'התחתנו לפני 3 שנים ועד היום כל מי שמתחתן שואל אותנו מי היו הדיג׳ייים שלנו. פשוט רמה בינלאומית.',
  name: 'גל ואורי',
  date: '3 שנים אחרי',
}

const reviews = [
  {
    text: 'הרחבה הייתה מפוצצת כל הערב, האנרגיות בשמיים, קריאת קהל מדויקת בטירוף. ידעו בדיוק מתי להרים, מתי לרגש, ומתי להפוך את המקום למסיבה שלא שוכחים.',
    name: 'גל',
    date: 'מרץ 2026',
  },
  {
    text: 'הקבלת פנים, המוזיקה בחתונה, האפטר — הכל היה מדוייק. מחיר שלא מצדיק את העבודה שלהם. מגיע להם הרבה יותר.',
    name: 'רום',
    date: 'פברואר 2026',
  },
  {
    text: 'לא הפסקנו לקבל עליהם מחמאות עוד אחרי האירוע. אהבנו שמעבר לזה שהם יודעים מה הם עושים, הם נותנים מקום לשאול ולכוון אותם.',
    name: 'שקד',
    date: 'דצמבר 2025',
  },
  {
    text: 'מוזיקה מדויקת, מעבר חלק בין סגנונות, קריאה מושלמת של הרחבה ואנרגיות שלא ירדו לשנייה. תודה על לילה שלא נשכח לעולם.',
    name: 'שיר ובנימין',
    date: 'נובמבר 2025',
  },
  {
    text: 'אין בן אדם אחד מהחתונה שלנו שלא שאל אותנו מי היו הדיגיים המטורפים האלה. אפילו כשהוציאו למנה עיקרית — כולם נשארו ברחבה.',
    name: 'דניאל',
    date: 'נובמבר 2025',
  },
]

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  function scrollTo(index: number) {
    if (!trackRef.current) return
    const card = trackRef.current.children[index] as HTMLElement
    if (!card) return
    trackRef.current.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' })
    setCurrent(index)
  }

  function prev() { scrollTo(Math.max(0, current - 1)) }
  function next() { scrollTo(Math.min(reviews.length - 1, current + 1)) }

  return (
    <section style={{ background: '#f5f5f5', padding: '56px 0 48px' }}>

      {/* Hero quote */}
      <div
        style={{
          padding: '0 24px 40px',
          maxWidth: 560,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500, display: 'block', marginBottom: 16 }}>
          // מה הזוגות אומרים
        </span>

        {/* Rating badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#0a0a0a',
          borderRadius: 100,
          padding: '8px 20px',
          marginBottom: 28,
        }}>
          <span style={{ color: '#c9a84c', fontSize: 13, letterSpacing: 2 }}>★★★★★</span>
          <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', letterSpacing: 1 }}>5.0 · 87 ביקורות</span>
        </div>

        {/* Quote marks */}
        <div style={{ position: 'relative' }}>
          <span style={{
            fontSize: 80,
            lineHeight: 0,
            color: 'rgba(10,10,10,0.08)',
            fontFamily: 'Georgia, serif',
            position: 'absolute',
            top: 10,
            right: 0,
            userSelect: 'none',
          }}>"</span>
          <p
            style={{
              fontSize: 'clamp(17px, 4.5vw, 22px)',
              lineHeight: 1.65,
              color: '#0a0a0a',
              fontWeight: 600,
              marginBottom: 20,
              position: 'relative',
              zIndex: 1,
              padding: '0 12px',
            }}
          >
            {heroQuote.text}
          </p>
        </div>

        {/* Attribution */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 100,
          padding: '8px 16px',
        }}>
          <span style={{ fontSize: 12, color: '#0a0a0a', fontWeight: 700 }}>{heroQuote.name}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(0,0,0,0.15)' }} />
          <span style={{ fontSize: 11, color: 'rgba(10,10,10,0.4)', letterSpacing: 1 }}>{heroQuote.date}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(0,0,0,0.15)' }} />
          <span style={{ fontSize: 10, color: '#c9a84c', letterSpacing: 1 }}>✓ מאומת</span>
        </div>
      </div>

      {/* Carousel header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 24px',
          marginBottom: 20,
          borderTop: '1px solid rgba(0,0,0,0.06)',
          paddingTop: 32,
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: 3, color: 'rgba(10,10,10,0.3)', fontWeight: 500 }}>
          עוד זוגות מספרים
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={prev} aria-label="הקודם" style={btnStyle}>‹</button>
          <button onClick={next} aria-label="הבא" style={btnStyle}>›</button>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: 14,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '0 24px 16px',
          scrollbarWidth: 'none',
        }}
        className="hide-scrollbar"
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              flexShrink: 0,
              width: 'min(80vw, 300px)',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              border: `1px solid ${i === current ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.08)'}`,
              borderRadius: 6,
              padding: '22px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              transition: 'border-color 0.3s',
            }}
          >
            <span style={{ color: '#c9a84c', fontSize: 13, letterSpacing: 3 }}>★★★★★</span>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(10,10,10,0.6)', margin: 0, flex: 1 }}>
              {r.text}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: '#0a0a0a', fontWeight: 600 }}>{r.name}</span>
              <span style={{ fontSize: 10, letterSpacing: 1, color: 'rgba(10,10,10,0.25)' }}>{r.date} · מאומת</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === current ? 18 : 6,
              height: 6,
              borderRadius: 3,
              border: 'none',
              background: i === current ? '#0a0a0a' : 'rgba(10,10,10,0.15)',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Link to real reviews + Wikipedia */}
      <div style={{ textAlign: 'center', marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <a
          href="https://www.mit4mit.co.il/biz/103387"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: 'rgba(10,10,10,0.35)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(10,10,10,0.15)',
            paddingBottom: 2,
          }}
        >
          לכל הביקורות האמיתיות ב-mit4mit ←
        </a>

        <a
          href="https://he.wikipedia.org/wiki/TOX1C"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            background: '#f0f0f0',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 100,
            padding: '6px 14px 6px 8px',
          }}
        >
          <span style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#888888',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            fontWeight: 700,
            color: '#ffffff',
            flexShrink: 0,
            fontFamily: 'Georgia, serif',
          }}>W</span>
          <span style={{ fontSize: 11, color: 'rgba(10,10,10,0.5)', fontWeight: 500 }}>רוצים לדעת עלינו עוד?</span>
        </a>
      </div>
    </section>
  )
}

const btnStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: '50%',
  border: '1px solid rgba(0,0,0,0.15)',
  background: '#ffffff',
  color: '#0a0a0a',
  fontSize: 18,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
}
