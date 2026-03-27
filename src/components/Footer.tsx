export default function Footer() {
  const links = [
    { label: 'Instagram', href: 'https://www.instagram.com/tox1cmusic/' },
    { label: 'mit4mit', href: 'https://www.mit4mit.co.il/biz/103387' },
    { label: 'WhatsApp', href: `https://wa.me/972528023292?text=${encodeURIComponent('היי TOX1C! 👋\nראיתי את האתר שלך ואשמח לשמוע פרטים על ה-DJ לאירוע שלי 🎶')}` },
  ]

  return (
    <footer
      style={{
        background: '#f5f5f5',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        padding: '40px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 24,
      }}
    >
      {/* Logo */}
      <span
        className="bebas"
        style={{ fontSize: 20, letterSpacing: 6, color: '#0a0a0a' }}
      >
        TOX<span style={{ color: '#c9a84c' }}>1</span>C
      </span>

      {/* Links */}
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              color: 'rgba(10,10,10,0.35)',
              textDecoration: 'none',
              fontSize: 11,
              letterSpacing: 2,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0a0a0a')}
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = 'rgba(10,10,10,0.35)')
            }
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <span style={{ fontSize: 11, color: 'rgba(10,10,10,0.25)', letterSpacing: 1.5 }}>
        © 2026 TOX1C - MAOR & OFEK
      </span>
    </footer>
  )
}
