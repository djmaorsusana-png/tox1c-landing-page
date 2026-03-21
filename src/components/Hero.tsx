export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#06060a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 72px',
      }}
    >
      {/* Background gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-left badge: Instagram */}
      <div
        style={{
          position: 'absolute',
          top: 112,
          left: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(240,237,232,0.4)',
          fontSize: 12,
          letterSpacing: 2,
        }}
        className="max-md:hidden"
      >
        <span style={{ color: '#c9a84c' }}>@</span>tox1cmusic
      </div>

      {/* Top-right: stars */}
      <div
        style={{
          position: 'absolute',
          top: 112,
          right: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 4,
        }}
        className="max-md:hidden"
      >
        <span style={{ color: '#c9a84c', fontSize: 18, letterSpacing: 3 }}>★★★★★</span>
        <span style={{ color: 'rgba(240,237,232,0.4)', fontSize: 11, letterSpacing: 2 }}>
          84+ חתונות · mit4mit
        </span>
      </div>

      {/* Grid lines decoration */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: '#c9a84c',
            marginBottom: 24,
            fontWeight: 500,
          }}
        >
          // מאור סוסנה & אופק פילו · 2026
        </p>

        {/* Main headline — LTR for English impact */}
        <div dir="ltr" style={{ marginBottom: 36 }}>
          <h1
            className="bebas"
            style={{
              fontSize: 'clamp(72px, 12vw, 160px)',
              lineHeight: 0.92,
              letterSpacing: '0.02em',
              color: '#f0ede8',
            }}
          >
            THE NIGHT
            <br />
            <span
              style={{
                WebkitTextStroke: '2px rgba(240,237,232,0.25)',
                color: 'transparent',
              }}
            >
              EVERYONE
            </span>
            <br />
            <span style={{ color: '#c9a84c' }}>REMEMBERS.</span>
          </h1>
        </div>

        {/* Bottom row: description + CTAs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(240,237,232,0.55)',
              maxWidth: 420,
            }}
          >
            לא פלייליסט. לא חבילה. <br />
            <strong style={{ color: '#f0ede8', fontWeight: 600 }}>
              סט אלקטרוני חי, שני DJ על הבמה, לילה שלם ניהול.
            </strong>
            <br />
            זה מה שאורחים מדברים עליו שנים אחרי.
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="#form"
              style={{
                background: '#c9a84c',
                color: '#06060a',
                padding: '14px 28px',
                borderRadius: 2,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              בדקו זמינות עכשיו ←
            </a>
            <a
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                border: '1px solid rgba(240,237,232,0.2)',
                color: 'rgba(240,237,232,0.7)',
                padding: '13px 20px',
                borderRadius: 2,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1,
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(201,168,76,0.5)'
                el.style.color = '#c9a84c'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(240,237,232,0.2)'
                el.style.color = 'rgba(240,237,232,0.7)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="#how"
              style={{
                color: 'rgba(240,237,232,0.4)',
                fontSize: 12,
                letterSpacing: 2,
                textDecoration: 'none',
              }}
            >
              ↓ איך זה עובד
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4), transparent)',
        }}
      />
    </section>
  )
}
