export default function Profile() {
  return (
    <section
      style={{
        background: '#111116',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
      className="max-md:block"
    >
      {/* Photo */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 440,
        }}
      >
        <img
          src="/images/portrait.jpg"
          alt="מאור ואופק — TOX1C"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            filter: 'grayscale(20%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to left, rgba(17,17,22,0.6) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Text */}
      <div
        style={{
          padding: 'clamp(40px, 6vw, 72px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <span className="eyebrow">// מאור & אופק</span>

        <h2
          className="bebas"
          dir="ltr"
          style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            lineHeight: 0.92,
            letterSpacing: '0.02em',
          }}
        >
          MAOR &<br />
          <span
            style={{ WebkitTextStroke: '2px rgba(240,237,232,0.25)', color: 'transparent' }}
          >
            OFEK.
          </span>
        </h2>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.85,
            color: 'rgba(240,237,232,0.55)',
            maxWidth: 380,
          }}
        >
          אנחנו לא זוג DJים שהרכיבו ביחד — אנחנו שניים שבנו משהו חדש לגמרי בסצנת חתונות ישראל.
          <br /><br />
          מאות אירועים אחורה, כל אחד מהם עם SET חי, עם תשומת לב מלאה לזוג, עם תוצאה אחת ברורה: אורחים שמדברים על הלילה הזה שנים אחרי.
        </p>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
          <a
            href="https://www.instagram.com/tox1cmusic/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              letterSpacing: 2,
              color: '#c9a84c',
              textDecoration: 'none',
            }}
          >
            @tox1cmusic ↗
          </a>
          <a
            href="https://www.mit4mit.co.il/biz/103387"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              letterSpacing: 2,
              color: 'rgba(240,237,232,0.35)',
              textDecoration: 'none',
            }}
          >
            mit4mit ↗
          </a>
        </div>
      </div>
    </section>
  )
}
