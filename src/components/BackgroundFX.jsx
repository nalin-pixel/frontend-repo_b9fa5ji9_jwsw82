import { memo } from 'react'

function Dot({ style }) {
  return <span className="absolute rounded-full bg-white/30" style={style} />
}

function BackgroundFX() {
  const dots = Array.from({ length: 18 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`,
    animationDelay: `${(Math.random() * 4).toFixed(2)}s`,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient mesh */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <div className="aurora -top-40 -left-20 w-[60vmax] h-[60vmax] bg-[radial-gradient(circle_at_30%_30%,#ec4899_0%,transparent_55%)]" />
        <div className="aurora -bottom-32 -right-24 w-[60vmax] h-[60vmax] bg-[radial-gradient(circle_at_70%_70%,#22d3ee_0%,transparent_55%)]" />
        <div className="aurora top-1/3 left-1/2 -translate-x-1/2 w-[70vmax] h-[70vmax] bg-[radial-gradient(circle_at_50%_50%,#facc15_0%,transparent_60%)]" />
      </div>

      {/* Floating blobs */}
      <div className="absolute inset-0">
        <div className="blob bg-fuchsia-500/25" style={{ width: '28rem', height: '28rem', top: '10%', left: '-6%' }} />
        <div className="blob bg-amber-400/25" style={{ width: '24rem', height: '24rem', bottom: '8%', right: '-4%' }} />
      </div>

      {/* Starfield dots */}
      <div className="absolute inset-0">
        {dots.map((d, i) => (
          <Dot key={i} style={{ ...d, animation: `twinkle 3.8s ease-in-out infinite`, opacity: 0.35 }} />
        ))}
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,transparent,rgba(2,6,23,0.85))]" />
    </div>
  )
}

export default memo(BackgroundFX)
