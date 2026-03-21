import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 48px',
        background: scrolled
          ? 'rgba(6,6,10,0.97)'
          : 'linear-gradient(to bottom, rgba(6,6,10,0.95) 60%, transparent)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="bebas"
        style={{ fontSize: 22, letterSpacing: 6, textDecoration: 'none', color: '#f0ede8' }}
      >
        TOX<span style={{ color: '#c9a84c' }}>1</span>C
      </a>

      {/* Desktop Links */}
      <ul
        style={{
          display: 'flex',
          gap: 36,
          listStyle: 'none',
          alignItems: 'center',
        }}
        className="max-md:hidden"
      >
        {[
          { label: 'מה אנחנו', href: '#why' },
          { label: 'איך זה עובד', href: '#how' },
          { label: 'ביקורות', href: '#reviews' },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              style={{
                color: 'rgba(240,237,232,0.55)',
                textDecoration: 'none',
                fontSize: 12,
                letterSpacing: 2,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#c9a84c')}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(240,237,232,0.55)')
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#form"
        className="max-md:hidden"
        style={{
          background: '#c9a84c',
          color: '#06060a',
          padding: '9px 22px',
          borderRadius: 2,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1.5,
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
      >
        בדקו זמינות
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#f0ede8',
          cursor: 'pointer',
          fontSize: 22,
          lineHeight: 1,
        }}
        aria-label="תפריט"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            left: 0,
            background: 'rgba(6,6,10,0.98)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {[
            { label: 'מה אנחנו', href: '#why' },
            { label: 'איך זה עובד', href: '#how' },
            { label: 'ביקורות', href: '#reviews' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(240,237,232,0.7)',
                textDecoration: 'none',
                fontSize: 14,
                letterSpacing: 2,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#form"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#c9a84c',
              color: '#06060a',
              padding: '12px 24px',
              borderRadius: 2,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.5,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            בדקו זמינות עכשיו
          </a>
        </div>
      )}
    </nav>
  )
}
