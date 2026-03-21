import { useRef, useState } from 'react'

const heroQuote = {
  text: 'התחתנו לפני 3 שנים ועד היום כל מי שמתחתן שואל אותנו מי היו הדיג׳ייים שלנו. פשוט רמה בינלאומית.',
  name: 'גל ואורי',
  date: '3 שנים אחרי',
}

const reviews = [
  {
    text: 'מהרגע שישבנו עם טוקסיק ידענו שזה בול מה שאנחנו צריכים. קיבלתי עשרות הודעות יום למחרת שהם היו מעולים.',
    name: 'מיכל ואלון',
    date: 'אפריל 2024',
  },
  {
    text: 'אהבנו מאוד שהם שניים - זה מאפשר גמישות אמיתית. אחד תמיד על העמדה, אחד יכול ללכת לזוג.',
    name: 'נועה ויניב',
    date: 'נובמבר 2024',
  },
  {
    text: 'מקצוענים, רמה גבוהה ממש. היכולת לקלוט את הקהל ולבנות את האווירה פשוט רואים שהם מהטופ.',
    name: 'שירה ודניאל',
    date: '2024',
  },
  {
    text: 'רמה בינלאומית שלא מכירים בארץ - וגם שני אנשים מקסימים שהופכים בן רגע לשותפים למסע שלכם.',
    name: 'ליאור ועומר',
    date: '2023',
  },
  {
    text: 'לא הרגשנו לחץ של כלום ביום החתונה. הרגשנו שיש מישהו שמנהל לנו את הלילה.',
    name: 'יעל ורועי',
    date: 'ינואר 2025',
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
        <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500, display: 'block', marginBottom: 24 }}>
          // 200+ COUPLES. ONE VERDICT.
        </span>
        <p
          style={{
            fontSize: 'clamp(18px, 4.5vw, 24px)',
            lineHeight: 1.55,
            color: '#f0ede8',
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          "{heroQuote.text}"
        </p>
        <span style={{ fontSize: 11, letterSpacing: 2, color: 'rgba(240,237,232,0.3)' }}>
          {heroQuote.name} · {heroQuote.date} · מאומת
        </span>
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
