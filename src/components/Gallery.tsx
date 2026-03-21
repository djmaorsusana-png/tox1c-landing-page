const images = [
  { src: '/images/dj-decks.jpg', label: '// THE SET', tall: true },
  { src: '/images/the-port.jpg', label: '// THE CROWD', tall: false },
  { src: '/images/live-set.jpg', label: '// LIVE PERFORMANCE', tall: false },
  { src: '/images/stage.jpg', label: '// ON STAGE', tall: true },
  { src: '/images/crowd.jpg', label: '// THE ENERGY', tall: false },
  { src: '/images/bw-duo.jpg', label: '// DUO', tall: false },
]

export default function Gallery() {
  return (
    <section
      style={{
        background: '#06060a',
        padding: '0 0 2px',
        overflow: 'hidden',
      }}
    >
      {/* Section label */}
      <div
        style={{
          padding: '40px 48px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: '#c9a84c',
            fontWeight: 500,
          }}
        >
          // מה שאורחים רואים
        </span>
        <a
          href="https://www.instagram.com/tox1cmusic/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: 'rgba(240,237,232,0.35)',
            textDecoration: 'none',
          }}
        >
          @tox1cmusic ←
        </a>
      </div>

      {/* Mosaic grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
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
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                transition: 'transform 0.6s ease',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLImageElement).style.transform = 'scale(1)')
              }
            />
            {/* Overlay + label */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(6,6,10,0.7) 0%, transparent 50%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px 18px',
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  color: 'rgba(201,168,76,0.8)',
                  fontWeight: 500,
                }}
              >
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
