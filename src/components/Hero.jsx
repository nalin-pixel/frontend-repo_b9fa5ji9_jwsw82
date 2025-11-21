import { motion } from 'framer-motion'
import { Sparkles, Mic2, Stars } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(250,204,21,0.2),transparent_40%)]" />
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-fuchsia-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-amber-400/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 mb-6 backdrop-blur">
              <Stars className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Bright and amazing singer</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Yash — Portraits in Sound
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              I’m Yash, an artist crafting vibrant stories through melody, performance, and visuals. Explore my world: a blend of color, rhythm, and emotion.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link to="/work" className="px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-amber-400 text-black font-semibold shadow-[0_10px_30px_rgba(236,72,153,0.35)] hover:brightness-110 transition">
                See My Work
              </Link>
              <Link to="/timeline" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20 transition">
                Journey
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/40 via-transparent to-amber-400/30 mix-blend-overlay" />
              <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop" alt="Yash performing" className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-slate-900/90 text-white px-4 py-3 rounded-xl border border-white/10 backdrop-blur"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Mic2 className="w-4 h-4 text-fuchsia-300" />
                <span className="text-sm">Live sessions • Studio takes • Originals</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Sparkles className="absolute right-6 bottom-6 text-white/20" />
    </section>
  )
}

export default Hero
