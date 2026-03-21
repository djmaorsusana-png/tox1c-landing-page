export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 72px',
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/wedding-stage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          filter: 'brightness(0.38)',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(6,6,10,0.15) 0%, rgba(6,6,10,0.45) 45%, rgba(6,6,10,0.94) 100%)',
        }}
      />

      {/* Gold tint at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45%',
          background: 'linear-gradient(to top, rgba(201,168,76,0.05) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-left: Instagram */}
      <div
        style={{
          position: 'absolute',
          top: 112,
          left: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(240,237,232,0.5)',
          fontSize: 12,
          letterSpacing: 2,
        }}
        className="max-md:hidden"
      >
        <span style={{ color: '#c9a84c' }}>@</span>tox1cmusic
      </div>

      {/* Top-right: stars + count */}
      <div
        style={{
          position: 'absolute',
          top: 108,
          right: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 5,
        }}
        className="max-md:hidden"
      >
        <span style={{ color: '#c9a84c', fontSize: 15, letterSpacing: 4 }}>★★★★★</span>
        <span className="bebas" style={{ color: 'rgba(240,237,232,0.45)', fontSize: 12, letterSpacing: 3 }}>
          200+ COUPLES • MIT4MIT
        </span>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <p
          className="bebas"
          style={{
            fontSize: 13,
            letterSpacing: 5,
            color: '#c9a84c',
            marginBottom: 28,
          }}
        >
          // MAOR & OFEK • HYBRID ELECTRONIC ACT
        </p>

        {/* Headline */}
        <div dir="ltr" style={{ marginBottom: 44 }}>
          <h1
            className="bebas"
            style={{
              fontSize: 'clamp(72px, 12vw, 160px)',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              color: '#f0ede8',
            }}
          >
            ELEVATING
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(240,237,232,0.28)', color: 'transparent' }}>
              THE WEDDING
            </span>
            <br />
            <span style={{ color: '#c9a84c' }}>STANDARD.</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: 'rgba(240,237,232,0.62)',
              maxWidth: 480,
            }}
          >
            תשכחו מכל מה שידעתם על תקלוט בחתונות.
            <br />
            <strong style={{ color: '#f0ede8', fontWeight: 700 }}>
              אנחנו מביאים את האנרגיה של מועדוני העלית בעולם ישירות לרחבה שלכם.
            </strong>{' '}
            דיג'יי סט, תופים אלקטרוניים וקלידים במופע חי שמשנה את חוקי המשחק.
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Primary CTA */}
            <a
              href="#form"
              style={{
                background: '#c9a84c',
                color: '#06060a',
                padding: '14px 30px',
                borderRadius: 2,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              תיאום פגישה ←
            </a>

            {/* Secondary: Watch live */}
            <a
              href="https://www.instagram.com/tox1cmusic/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                border: '1px solid rgba(255,255,255,0.28)',
                color: 'rgba(240,237,232,0.8)',
                padding: '13px 20px',
                borderRadius: 2,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1,
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              {/* Play icon */}
              <svg width="13" height="14" viewBox="0 0 13 14" fill="currentColor">
                <path d="M1 1.5l11 5.5-11 5.5V1.5z" />
              </svg>
              צפו בלייב
            </a>

            <a
              href="#live-act"
              style={{
                color: 'rgba(240,237,232,0.4)',
                fontSize: 12,
                letterSpacing: 2,
                textDecoration: 'none',
              }}
            >
              ↓ גלו עוד
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5), transparent)',
        }}
      />
    </section>
  )
}
