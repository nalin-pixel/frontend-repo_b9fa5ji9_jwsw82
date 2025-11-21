import { motion } from 'framer-motion'
import { Mail, Instagram, Music2 } from 'lucide-react'

function Contact() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_10%,rgba(250,204,21,0.1),transparent_50%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-6">Contact</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white backdrop-blur">
            <p className="text-white/80">For bookings, collaborations, or just to say hi:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-amber-300" /><a href="mailto:yash.music@example.com" className="hover:underline">yash.music@example.com</a></li>
              <li className="flex items-center gap-3"><Instagram className="w-5 h-5 text-fuchsia-300" /><a href="https://instagram.com" target="_blank" className="hover:underline">@yash.sings</a></li>
              <li className="flex items-center gap-3"><Music2 className="w-5 h-5 text-blue-300" /><a href="#" className="hover:underline">Listen on Streamify</a></li>
            </ul>
          </motion.div>
          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white backdrop-blur">
            <div className="grid gap-4">
              <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
              <input placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
              <textarea placeholder="Message" rows="4" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
              <button type="button" className="px-5 py-3 rounded-xl bg-gradient-to-br from-amber-300 to-fuchsia-400 text-black font-semibold hover:brightness-110">Send</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
