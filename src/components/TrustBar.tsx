const stats = [
  { number: 'מאות+', label: 'אירועים' },
  { number: '100%', label: 'ביקורות 5 כוכבים' },
  { number: '2', label: 'DJ על הבמה, תמיד' },
  { number: 'LIVE', label: 'SET בכל אירוע' },
]

export default function TrustBar() {
  return (
    <div
      style={{
        background: '#0d0d11',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
      className="max-md:grid-cols-2"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            padding: '26px 0',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(201,168,76,0.08)' : 'none',
          }}
        >
          <div
            className="bebas"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: '#c9a84c',
              lineHeight: 1,
              letterSpacing: '0.04em',
            }}
          >
            {stat.number}
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 2.5,
              color: 'rgba(240,237,232,0.35)',
              marginTop: 7,
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
