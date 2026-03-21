const stats = [
  { number: '84+', label: 'חתונות' },
  { number: '100%', label: 'ביקורות 5 כוכבים' },
  { number: '2', label: 'DJ על הבמה, תמיד' },
  { number: '6', label: 'שנות ניסיון' },
]

export default function TrustBar() {
  return (
    <div
      style={{
        background: '#111116',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            padding: '28px 0',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
          }}
        >
          <div
            className="bebas"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#c9a84c',
              lineHeight: 1,
              letterSpacing: '0.04em',
            }}
          >
            {stat.number}
          </div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: 'rgba(240,237,232,0.45)',
              marginTop: 6,
              fontWeight: 400,
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
