import { motion } from 'framer-motion'

const works = [
  {
    title: 'Neon Skies',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
    desc: 'An uplifting synth-pop single with soaring vocals.',
  },
  {
    title: 'City Echoes',
    image: 'https://images.unsplash.com/photo-1659534200077-00ca78f495fd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaXR5JTIwRWNob2VzfGVufDB8MHx8fDE3NjM3NTIzNzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'A moody ballad inspired by midnight drives.',
  },
  {
    title: 'Solar Flare',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
    desc: 'High-energy performance piece with live band.',
  },
]

function Work() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_80%_20%,rgba(236,72,153,0.08),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-10">Selected Work</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={w.image} alt={w.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-white font-semibold text-lg">{w.title}</h3>
                <p className="text-white/80 text-sm">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
