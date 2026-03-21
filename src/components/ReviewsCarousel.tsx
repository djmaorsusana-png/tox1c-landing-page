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
    <section style={{ background: '#0d0d11', padding: '56px 0 48px' }}>

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

        {/* Stars */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ color: '#c9a84c', fontSize: 18, letterSpacing: 4 }}>★★★★★</span>
        </div>

        {/* Quote marks */}
        <div style={{ position: 'relative' }}>
          <span style={{
            fontSize: 80,
            lineHeight: 0,
            color: 'rgba(201,168,76,0.15)',
            fontFamily: 'Georgia, serif',
            position: 'absolute',
            top: 10,
            right: 0,
            userSelect: 'none',
          }}>"</span>
          <p
            style={{
              fontSize: 'clamp(16px, 4vw, 21px)',
              lineHeight: 1.65,
              color: '#f0ede8',
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
          background: 'rgba(201,168,76,0.07)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 100,
          padding: '8px 16px',
        }}>
          <span style={{ fontSize: 12, color: '#c9a84c', fontWeight: 700 }}>{heroQuote.name}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.4)', letterSpacing: 1 }}>{heroQuote.date}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: 10, color: 'rgba(201,168,76,0.6)', letterSpacing: 1 }}>✓ מאומת</span>
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
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 32,
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: 3, color: 'rgba(240,237,232,0.25)', fontWeight: 500 }}>
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
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${i === current ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: 6,
              padding: '22px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              transition: 'border-color 0.3s',
            }}
          >
            <span style={{ color: '#c9a84c', fontSize: 13, letterSpacing: 3 }}>★★★★★</span>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(240,237,232,0.75)', margin: 0, flex: 1 }}>
              {r.text}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.5)', fontWeight: 600 }}>{r.name}</span>
              <span style={{ fontSize: 10, letterSpacing: 1, color: 'rgba(240,237,232,0.2)' }}>{r.date} · מאומת</span>
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
              background: i === current ? '#c9a84c' : 'rgba(240,237,232,0.2)',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Link to real reviews */}
      <div style={{ textAlign: 'center', marginTop: 28 }}>
        <a
          href="https://www.mit4mit.co.il/biz/103387"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: 'rgba(240,237,232,0.35)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(240,237,232,0.15)',
            paddingBottom: 2,
          }}
        >
          לכל הביקורות האמיתיות ב-mit4mit ←
        </a>
      </div>
    </section>
  )
}

const btnStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.05)',
  color: '#f0ede8',
  fontSize: 18,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
}
