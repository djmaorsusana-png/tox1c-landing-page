import { useRef, useState } from 'react'

const heroQuote = {
  text: 'התחתנו לפני 3 שנים ועד היום כל מי שמתחתן שואל אותנו מי היו הדיג׳יים שלנו. פשוט רמה בינלאומית.',
  name: 'גל ועדן',
  date: '3 שנים אחרי',
}

// Source: mit4mit.co.il/biz/103387 — names as shown there, month = when the review was posted (checked 30.09.2026)
const reviews = [
  {
    text: 'הקבלת פנים, המוזיקה בחתונה, האפטר — הכל היה מדוייק. מחיר שלא מצדיק את העבודה שלהם. מגיע להם הרבה יותר.',
    name: 'רום',
    date: 'פברואר 2026',
  },
  {
    text: 'נפגשו איתנו לפני החתונה וכבר שם הבנו שאנחנו יכולים להיות בראש שקט. ביום האירוע הגיעו מוקדם ולאורך כל הערב ידעו להתאים את המוזיקה לקהל שלנו. אין אחד שלא מחמיא לנו על האווירה — הקהל ביקש מהם להמשיך אחרי הסיום.',
    name: 'מוריה',
    date: 'ינואר 2026',
  },
  {
    text: 'לא הפסקנו לקבל עליהם מחמאות עוד אחרי האירוע. אהבנו שמעבר לזה שהם יודעים מה הם עושים, הם נותנים מקום לשאול ולכוון אותם.',
    name: 'שקד',
    date: 'דצמבר 2025',
  },
  {
    text: 'מוזיקה מדויקת, מעבר חלק בין סגנונות, קריאה מושלמת של הרחבה ואנרגיות שלא ירדו לשנייה. תודה על לילה שלא נשכח לעולם.',
    name: 'שיר',
    date: 'נובמבר 2025',
  },
  {
    text: 'אין בן אדם אחד מהחתונה שלנו שלא שאל אותנו מי היו הדיגיים המטורפים האלה. אפילו כשהוציאו למנה עיקרית — כולם נשארו ברחבה.',
    name: 'דניאל',
    date: 'נובמבר 2025',
  },
  {
    text: 'לא היה מפגש חתן-כלה-דיג׳יים, זה ממש היה ישיבה עם חברים. רק חיכינו לפגישה הבאה. הייתה חתונה מהאגדות שעלתה על כל ציפיה ודמיון — הם אמנים, יוצרים, מורי דרך. יש להם כישרון מטורף.',
    name: 'מעיין',
    date: 'אוקטובר 2025',
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

  // Keep the dots in sync with swipes: the active card is the one snapped to the track's start (right edge in RTL)
  const scrollFrame = useRef(0)
  function handleScroll() {
    if (scrollFrame.current) return
    scrollFrame.current = requestAnimationFrame(() => {
      scrollFrame.current = 0
      const track = trackRef.current
      if (!track) return
      const start = track.getBoundingClientRect().right - 24
      let best = 0
      let bestDist = Infinity
      Array.from(track.children).forEach((el, i) => {
        const dist = Math.abs(el.getBoundingClientRect().right - start)
        if (dist < bestDist) { bestDist = dist; best = i }
      })
      setCurrent(best)
    })
  }

  function prev() { scrollTo(Math.max(0, current - 1)) }
  function next() { scrollTo(Math.min(reviews.length - 1, current + 1)) }

  return (
    <section id="reviews" style={{ background: '#f5f5f5', padding: '48px 0' }}>

      {/* Hero quote */}
      <div
        className="reveal"
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
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', letterSpacing: 1 }}>94 ביקורות</span>
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
          <span style={{ fontSize: 11, color: 'rgba(10,10,10,0.55)', letterSpacing: 1 }}>{heroQuote.date}</span>
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
        onScroll={handleScroll}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="review-card"
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
            }}
          >
            <span aria-label="5 כוכבים" style={{ color: '#c9a84c', fontSize: 13, letterSpacing: 3 }}>★★★★★</span>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(10,10,10,0.6)', margin: 0, flex: 1 }}>
              {r.text}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: '#0a0a0a', fontWeight: 600 }}>{r.name}</span>
              <span style={{ fontSize: 10, letterSpacing: 1, color: 'rgba(10,10,10,0.5)' }}>{r.date} · מאומת</span>
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
            aria-label={`ביקורת ${i + 1} מתוך ${reviews.length}`}
            aria-current={i === current}
            style={{
              width: i === current ? 18 : 6,
              height: 6,
              borderRadius: 3,
              border: 'none',
              background: i === current ? '#0a0a0a' : 'rgba(10,10,10,0.15)',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Link to real reviews */}
      <div className="reveal delay-1" style={{ textAlign: 'center', marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <a
          href="https://www.mit4mit.co.il/biz/103387"
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw"
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: 'rgba(10,10,10,0.55)',
            paddingBottom: 2,
          }}
        >
          לכל הביקורות האמיתיות ב-mit4mit ←
        </a>

        <a
          href="#form"
          className="btn-primary"
          style={{
            background: '#0a0a0a',
            color: '#ffffff',
            padding: '15px 32px',
            borderRadius: 3,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          בדקו זמינות לתאריך שלכם
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
