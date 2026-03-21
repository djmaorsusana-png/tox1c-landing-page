export default function Hero() {
  return (
    <section
      style={{
        height: '100dvh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '100px 28px 0',
        background: '#f4f4f4',
      }}
    >
      {/* Silhouette image — fills full section */}
      <img
        src="https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/hero-silhouette.jpg.jpg"
        alt="TOX1C — Maor & Ofek"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Strong white gradient covers top — text sits on clean white */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(244,244,244,1) 0%, rgba(244,244,244,1) 35%, rgba(244,244,244,0.6) 55%, rgba(244,244,244,0) 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* All content at top — above the silhouette */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h1
          className="bebas"
          style={{
            fontSize: 'clamp(52px, 14vw, 96px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0a0a0a',
            letterSpacing: '0.02em',
            marginBottom: 20,
            direction: 'ltr',
          }}
        >
          IT'S A RAVE
          <br />
          IN A <span style={{ WebkitTextStroke: '2px #0a0a0a', color: 'transparent' }}>WHITE</span>
          <br />
          DRESS.
        </h1>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(10,10,10,0.5)',
            marginBottom: 32,
            maxWidth: 420,
          }}
        >
          מהבמות של טומורולנד ועד לסצנה של ברזיל, דובאי ויפן -
          <br />
          <span style={{ color: '#0a0a0a', fontWeight: 600 }}>טוקסיק</span> מביאים את הסטנדרט הבינלאומי הזה ישירות לאירוע שלכם.
        </p>

        <a
          href="#form"
          style={{
            background: '#0a0a0a',
            color: '#ffffff',
            padding: '15px 32px',
            borderRadius: 3,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1.5,
            textDecoration: 'none',
          }}
        >
          CHECK AVAILABILITY →
        </a>

      </div>

      {/* Bottom line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(to left, transparent, rgba(10,10,10,0.12), transparent)',
        }}
      />
    </section>
  )
}
