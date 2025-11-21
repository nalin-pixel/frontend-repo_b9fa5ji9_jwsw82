import { motion } from 'framer-motion'

const events = [
  { year: '2018', title: 'First Stage Performance', desc: 'Open mic night that sparked the journey.' },
  { year: '2019', title: 'Debut Single', desc: 'Released the first track recorded at home.' },
  { year: '2021', title: 'Touring Begins', desc: 'Regional shows with a live band.' },
  { year: '2023', title: 'Studio Album', desc: 'A full-length album exploring new sounds.' },
]

function Timeline() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-14">Journey</motion.h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-fuchsia-400 via-amber-300 to-transparent" />
          <div className="space-y-12">
            {events.map((e, idx) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className={`relative sm:grid sm:grid-cols-2 gap-8 items-center`}
              >
                <div className={`sm:justify-self-end ${idx % 2 === 0 ? 'order-none' : 'sm:order-2'}`}>
                  <motion.div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-white backdrop-blur" whileHover={{ scale: 1.03 }}>
                    <span className="text-2xl font-bold">{e.year}</span>
                  </motion.div>
                </div>
                <motion.div className={`bg-white/5 border border-white/10 rounded-2xl p-6 text-white ${idx % 2 === 0 ? '' : 'sm:order-1'}`} whileHover={{ y: -2 }}>
                  <h3 className="text-xl font-semibold mb-1">{e.title}</h3>
                  <p className="text-white/80">{e.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
