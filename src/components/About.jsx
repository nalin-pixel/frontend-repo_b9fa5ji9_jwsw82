import { motion } from 'framer-motion'

function About() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-6">About</motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <p className="text-white/80 leading-relaxed">
              I am Yash, a singer and multidisciplinary artist inspired by neon nights, city lights, and the timeless pulse of pop and indie music. My work blends vocal storytelling with immersive visuals—an invitation to feel deeply.
            </p>
          </motion.div>
          <motion.ul initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="grid gap-4">
            {["Vocals", "Songwriting", "Live Performance", "Sound Design"].map((item) => (
              <motion.li key={item} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 bg-gradient-to-br from-fuchsia-500/20 to-amber-400/20 border border-white/10 rounded-xl p-4 text-white">
                <span className="font-semibold">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default About
