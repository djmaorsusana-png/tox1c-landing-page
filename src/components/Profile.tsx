export default function Profile() {
  return (
    <section id="about" style={{ background: '#f5f5f5', padding: '56px 24px' }}>
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: 32,
          alignItems: 'center',
        }}
        className="profile-grid"
      >
        {/* Photo */}
        <div
          className="reveal"
          style={{
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto',
            border: '2px solid rgba(201,168,76,0.35)',
          }}
        >
          <img
            src="https://pub-48a611160cbb4cd99816600fd74e3f11.r2.dev/images/portrait-dark.jpg"
            alt="מאור ואופק — TOX1C"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>

        {/* Text */}
        <div className="reveal delay-1" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500, display: 'block', marginBottom: 10 }}>
            // מי אנחנו
          </span>
          <h2 className="bebas" style={{ fontSize: 'clamp(28px, 6vw, 40px)', color: '#0a0a0a', lineHeight: 1, marginBottom: 14 }}>
            MAOR &amp; <span style={{ color: '#c9a84c' }}>OFEK.</span>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(10,10,10,0.55)', maxWidth: 480, margin: '0 auto 18px' }}>
            לא זוג תקליטנים שהתחברו סתם — שניים שבנו יחד שפה חדשה לחתונות בישראל.
            מאות אירועים מאחורינו, תמיד עם הופעה חיה ותשומת לב מלאה לזוג.
          </p>
          <a
            href="https://www.instagram.com/tox1cmusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw"
            style={{ fontSize: 13, letterSpacing: 1, color: '#0a0a0a', fontWeight: 600, direction: 'ltr', display: 'inline-block' }}
          >
            @tox1cmusic ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .profile-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
          }
          .profile-grid > div:first-child {
            max-width: 160px;
          }
        }
      `}</style>
    </section>
  )
}
