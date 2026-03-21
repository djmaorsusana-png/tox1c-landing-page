// כל תמונה מופיעה פה פעם אחת בלבד
// wedding-stage → Hero | drummer → LiveAct | festival → LiveAct | bw-duo → LiveAct
const images = [
  { src: '/images/dj-decks.jpg',       label: '// THE SET',         tall: true,  pos: 'center 30%' },
  { src: '/images/the-port.jpg',       label: '// THE CROWD',       tall: false, pos: 'center'     },
  { src: '/images/live-set.jpg',       label: '// LIVE PERFORMANCE',tall: false, pos: 'center'     },
  { src: '/images/hero.jpg',           label: '// THE ATMOSPHERE',  tall: true,  pos: 'center 20%' },
  { src: '/images/portrait-dark.jpg',  label: '// MAOR & OFEK',     tall: false, pos: 'center top' },
  { src: '/images/crowd-day.jpg',      label: '// THE REACTION',    tall: false, pos: 'center'     },
  { src: '/images/duo-day.jpg',        label: '// ON STAGE',        tall: false, pos: 'center top' },
  { src: '/images/portrait-white.jpg', label: '// THE DUO',         tall: false, pos: 'center top' },
]

export default function Gallery() {
  return (
    <section style={{ background: '#06060a', overflow: 'hidden' }}>
      <div
        style={{
          padding: '40px 48px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 4, color: '#c9a84c', fontWeight: 500 }}>
          // מה שאורחים רואים
        </span>
        <a
          href="https://www.instagram.com/tox1cmusic/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, letterSpacing: 2, color: 'rgba(240,237,232,0.35)', textDecoration: 'none' }}
        >
          @tox1cmusic ←
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
        }}
        className="max-md:grid-cols-2"
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: img.tall ? '3/4' : '4/3',
              background: '#111116',
            }}
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: img.pos,
                display: 'block',
                transition: 'transform 0.6s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(6,6,10,0.7) 0%, transparent 55%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '14px 16px',
              }}
            >
              <span style={{ fontSize: 9, letterSpacing: 3, color: 'rgba(201,168,76,0.8)', fontWeight: 500 }}>
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
