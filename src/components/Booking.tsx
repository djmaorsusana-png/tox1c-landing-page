import { useState } from 'react'

export default function Booking() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!name.trim() || !date || !phone.trim()) {
      setError('נא למלא שם, תאריך וטלפון.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section
      id="form"
      style={{
        background: '#111116',
        padding: 'clamp(64px, 8vw, 120px) 48px',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
        className="max-md:block"
      >
        {/* Left: copy */}
        <div>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'block' }}>
            // בדקו זמינות
          </span>

          <h2
            className="bebas"
            dir="ltr"
            style={{
              fontSize: 'clamp(48px, 6vw, 88px)',
              lineHeight: 0.92,
              letterSpacing: '0.02em',
              marginBottom: 28,
            }}
          >
            IS YOUR
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(240,237,232,0.25)', color: 'transparent' }}>
              DATE
            </span>
            <br />
            <span style={{ color: '#c9a84c' }}>AVAILABLE?</span>
          </h2>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(240,237,232,0.55)',
              marginBottom: 36,
              maxWidth: 380,
            }}
          >
            הדייטים ל-2026 מתמלאים. אנחנו לוקחים מספר מוגבל של אירועים בעונה — כדי שכל זוג יקבל את מלוא תשומת הלב.
          </p>

          {/* Urgency indicator */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '10px 18px',
              borderRadius: 2,
              marginBottom: 40,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#c9a84c',
                display: 'inline-block',
                animation: 'pulse 1.8s ease-in-out infinite',
              }}
            />
            <span style={{ fontSize: 12, color: '#c9a84c', letterSpacing: 1.5, fontWeight: 600 }}>
              נשארו 4 דייטים פנויים לחצי שנה הקרוב
            </span>
          </div>

          {/* Alternative: WhatsApp */}
          <div>
            <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.3)', letterSpacing: 1, marginBottom: 12 }}>
              או דברו איתנו ישירות:
            </p>
            <a
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#25d366',
                color: '#fff',
                padding: '11px 20px',
                borderRadius: 2,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              כתבו לנו בWhatsApp
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div
          style={{
            background: '#06060a',
            border: '1px solid rgba(201,168,76,0.15)',
            padding: '40px 36px',
          }}
        >
          {!submitted ? (
            <>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: 'rgba(240,237,232,0.45)',
                  marginBottom: 28,
                  paddingBottom: 24,
                  borderBottom: '1px solid rgba(240,237,232,0.06)',
                }}
              >
                מלאו פרטים — נחזור תוך 24 שעות. בלי ספאם. בלי לחץ.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 11,
                      letterSpacing: 2,
                      color: 'rgba(240,237,232,0.4)',
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    שם הזוג
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="שירה ונועם"
                    style={{
                      width: '100%',
                      background: '#111116',
                      border: '1px solid rgba(240,237,232,0.1)',
                      color: '#f0ede8',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 2,
                      outline: 'none',
                      fontFamily: 'inherit',
                      direction: 'rtl',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.4)')
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = 'rgba(240,237,232,0.1)')
                    }
                  />
                </div>

                {/* Date */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 11,
                      letterSpacing: 2,
                      color: 'rgba(240,237,232,0.4)',
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    תאריך החתונה
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#111116',
                      border: '1px solid rgba(240,237,232,0.1)',
                      color: '#f0ede8',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 2,
                      outline: 'none',
                      fontFamily: 'inherit',
                      direction: 'rtl',
                      transition: 'border-color 0.2s',
                      colorScheme: 'dark',
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.4)')
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = 'rgba(240,237,232,0.1)')
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 11,
                      letterSpacing: 2,
                      color: 'rgba(240,237,232,0.4)',
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    טלפון
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05X-XXXXXXX"
                    style={{
                      width: '100%',
                      background: '#111116',
                      border: '1px solid rgba(240,237,232,0.1)',
                      color: '#f0ede8',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 2,
                      outline: 'none',
                      fontFamily: 'inherit',
                      direction: 'rtl',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.4)')
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = 'rgba(240,237,232,0.1)')
                    }
                  />
                </div>

                {error && (
                  <p style={{ fontSize: 12, color: '#ef4444', letterSpacing: 1 }}>{error}</p>
                )}

                <button
                  onClick={handleSubmit}
                  style={{
                    background: '#c9a84c',
                    color: '#06060a',
                    border: 'none',
                    padding: '14px 28px',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    cursor: 'pointer',
                    borderRadius: 2,
                    width: '100%',
                    fontFamily: 'inherit',
                    transition: 'opacity 0.2s',
                    marginTop: 4,
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.88')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
                >
                  בדקו זמינות עכשיו ←
                </button>

                <a
                  href="https://www.mit4mit.co.il/biz/103387"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textAlign: 'center',
                    fontSize: 11,
                    color: 'rgba(240,237,232,0.3)',
                    letterSpacing: 1.5,
                    textDecoration: 'none',
                  }}
                >
                  קראו עלינו ב-mit4mit ←
                </a>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>⚡</div>
              <h3
                className="bebas"
                style={{
                  fontSize: 36,
                  letterSpacing: '0.04em',
                  color: '#c9a84c',
                  marginBottom: 16,
                }}
              >
                קיבלנו אתכם!
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(240,237,232,0.6)' }}>
                ניצור קשר תוך 24 שעות.
                <br />
                <br />
                בינתיים, עקבו אחרינו:{' '}
                <a
                  href="https://www.instagram.com/tox1cmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c9a84c', fontWeight: 700, textDecoration: 'none' }}
                >
                  @tox1cmusic
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  )
}
