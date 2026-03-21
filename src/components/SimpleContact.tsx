import { useState } from 'react'


const CRM_URL = 'https://wedding-dj-crm-production.up.railway.app/api/public/lead'

export default function SimpleContact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      eventDate: (form.elements.namedItem('eventDate') as HTMLInputElement).value,
    }
    try {
      const res = await fetch(CRM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('שגיאת שרת')
      setSubmitted(true)
    } catch {
      setError('משהו השתבש, נסו שוב או פנו דרך WhatsApp')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="form"
      style={{
        background: '#0d0d11',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '64px 28px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: '#c9a84c',
            fontWeight: 500,
            display: 'block',
            marginBottom: 16,
          }}
        >
          // SECURE YOUR DATE
        </span>
        <h2
          className="bebas"
          style={{
            fontSize: 'clamp(36px, 9vw, 60px)',
            color: '#f0ede8',
            lineHeight: 1,
            letterSpacing: '0.03em',
            margin: 0,
          }}
        >
          דברו איתנו.
        </h2>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(240,237,232,0.45)',
            marginTop: 12,
            lineHeight: 1.7,
            maxWidth: 360,
          }}
        >
          השאירו פרטים, נבדוק זמינות ונחזור אליכם תוך 24 שעות.
        </p>
      </div>

      {/* Form */}
      {submitted ? (
        <div
          style={{
            textAlign: 'center',
            padding: '40px 24px',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 4,
            maxWidth: 440,
            width: '100%',
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
          <p
            style={{
              fontSize: 16,
              color: '#f0ede8',
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            קלטנו אתכם.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.45)', lineHeight: 1.6 }}>
            הפרטים אצלנו, נבדוק ביומן ונחזור אליכם ממש בקרוב.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: 440,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="שם מלא"
            required
            style={inputStyle}
          />
          <input
            name="phone"
            type="tel"
            placeholder="טלפון"
            required
            style={inputStyle}
          />
          <input
            name="eventDate"
            type="text"
            placeholder="תאריך האירוע - אפשר משוער, עוזר לנו לבדוק זמינות"
            required
            style={inputStyle}
          />
          {error && (
            <p style={{ fontSize: 13, color: '#e57373', textAlign: 'center' }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? 'rgba(201,168,76,0.5)' : '#c9a84c',
              color: '#06060a',
              border: 'none',
              padding: '17px 32px',
              borderRadius: 3,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1.5,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: 4,
            }}
          >
            {loading ? '...' : 'שלחו לנו ←'}
          </button>
        </form>
      )}

      {/* WhatsApp CTA - prominent */}
      <div style={{ width: '100%', maxWidth: 440, textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.25)', letterSpacing: 1, marginBottom: 14 }}>
          או דברו איתנו ישירות
        </p>
        <a
          href="https://wa.me/972528023292"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: 'rgba(37,211,102,0.1)',
            border: '1px solid rgba(37,211,102,0.35)',
            borderRadius: 4,
            padding: '16px 24px',
            color: '#25d366',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp ←
        </a>
      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: 3,
  padding: '15px 18px',
  fontSize: 14,
  color: '#f0ede8',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  direction: 'rtl',
}
