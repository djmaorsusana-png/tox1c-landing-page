import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'THE EXPERIENCE', href: '#slider' },
    { label: 'CONTACT', href: '#form' },
  ]

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
          ? 'rgba(255,255,255,0.97)'
          : 'linear-gradient(to bottom, rgba(244,244,244,0.9) 60%, transparent)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#"
        className="bebas"
        style={{ fontSize: 22, letterSpacing: 6, textDecoration: 'none', color: '#0a0a0a' }}
      >
        TOX<span style={{ color: '#c9a84c' }}>1</span>C
      </a>

      <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="max-md:hidden">
        {links.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="bebas"
              style={{
                color: 'rgba(10,10,10,0.45)',
                textDecoration: 'none',
                fontSize: 14,
                letterSpacing: 3,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0a0a0a')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(10,10,10,0.45)')}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#form"
        className="bebas max-md:hidden"
        style={{
          background: '#0a0a0a',
          color: '#ffffff',
          padding: '9px 24px',
          borderRadius: 2,
          fontSize: 14,
          letterSpacing: 2,
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.75')}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
      >
        CHECK AVAILABILITY
      </a>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', color: '#0a0a0a', cursor: 'pointer', fontSize: 22 }}
        aria-label="תפריט"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            left: 0,
            background: 'rgba(255,255,255,0.98)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="bebas"
              style={{ color: 'rgba(10,10,10,0.7)', textDecoration: 'none', fontSize: 16, letterSpacing: 3 }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#form"
            onClick={() => setMenuOpen(false)}
            className="bebas"
            style={{
              background: '#0a0a0a',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: 2,
              fontSize: 14,
              letterSpacing: 2,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            CHECK AVAILABILITY
          </a>
        </div>
      )}
    </nav>
  )
}
