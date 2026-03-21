export default function ReelSection() {
  return (
    <section
      id="reel"
      style={{
        background: '#06060a',
        padding: '64px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
      }}
    >
      {/* Eyebrow */}
      <span
        style={{
          fontSize: 11,
          letterSpacing: 4,
          color: '#c9a84c',
          fontWeight: 500,
        }}
      >
        // WATCH THE VIBE
      </span>

      {/* Reel embed — vertical 9:16, max 400px wide */}
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          aspectRatio: '9/16',
          borderRadius: 4,
          overflow: 'hidden',
          background: '#111116',
        }}
      >
        <iframe
          src="https://www.instagram.com/reel/DR7rkiwDc9A/embed/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          allowFullScreen
          loading="lazy"
          title="TOX1C Live Reel"
        />
      </div>

      {/* Killer quote */}
      <blockquote
        style={{
          maxWidth: 480,
          textAlign: 'center',
          margin: 0,
        }}
      >
        <p
          style={{
            fontSize: 'clamp(20px, 5vw, 28px)',
            fontWeight: 800,
            color: '#f0ede8',
            lineHeight: 1.3,
            marginBottom: 16,
          }}
        >
          זו לא הופעה רקע.
          <br />
          <span style={{ color: '#c9a84c' }}>זה הלייב שהאורחים עוד מדברים עליו.</span>
        </p>
        <cite
          style={{
            fontSize: 11,
            letterSpacing: 3,
            color: 'rgba(240,237,232,0.3)',
            fontStyle: 'normal',
          }}
        >
          MAOR &amp; OFEK — HYBRID ELECTRONIC ACT
        </cite>
      </blockquote>
    </section>
  )
}
