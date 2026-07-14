import { useState } from 'react'

const faqs = [
  {
    q: 'מה כלול בחבילה?',
    a: 'שני תקליטנים לאורך כל הערב וניהול מלא של האירוע מקבלת הפנים ועד האפטר. אפשר לבחור חבילה מלאה מההתחלה ועד הסוף, או להוסיף סט אלקטרוני חי בקבלת הפנים בלבד.',
  },
  {
    q: 'אתם מביאים ציוד סאונד ותאורה?',
    a: 'לחתונה עצמה לא — ציוד הסאונד והתאורה כבר קיים באולם. רק אם סוגרים את הסט האלקטרוני החי, אנחנו מביאים הגברה ותאורה נפרדת שמיועדת במיוחד בשבילו.',
  },
  {
    q: 'מה קורה באפטר?',
    a: 'האפטר ממשיך בדיוק לאן שאתם רוצים — מוזיקה אלקטרונית, קלאבים, או כל כיוון אחר שתבחרו. זה האירוע שלכם עד הסוף.',
  },
  {
    q: 'כמה זה עולה בערך?',
    a: 'המחיר משתנה לפי תאריך, אולם וגודל האירוע. שלחו לנו פרטים בטופס או בווצאפ ונחזור אליכם עם הצעת מחיר מדויקת תוך 24 שעות.',
  },
  {
    q: 'עד מתי צריך לסגור תאריך?',
    a: 'אנחנו לוקחים מספר מוגבל של אירועים בכל עונה, אז ככל שתפנו מוקדם יותר — כך גדל הסיכוי שהתאריך שלכם עדיין פנוי.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section style={{ background: '#ffffff', padding: '56px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
          <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500, display: 'block', marginBottom: 10 }}>
            // שאלות נפוצות
          </span>
          <h2 className="bebas" style={{ fontSize: 'clamp(28px, 6vw, 40px)', color: '#0a0a0a', lineHeight: 1 }}>
            עוד לפני שכותבים לנו.
          </h2>
        </div>

        <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: 6,
                  overflow: 'hidden',
                  background: '#f5f5f5',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 18px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'right',
                    fontFamily: 'inherit',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: 14.5, fontWeight: 700, color: '#0a0a0a' }}>{item.q}</span>
                  <span
                    style={{
                      fontSize: 18,
                      color: '#c9a84c',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    transition: 'max-height 0.3s ease',
                    overflow: 'hidden',
                  }}
                >
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: 'rgba(10,10,10,0.55)', padding: '0 18px 18px' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
