import { motion } from 'framer-motion'
import { Leaf, Sun, Droplets } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Futuristic eco gradient using Flames Blue + green accents */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,rgba(19,62,135,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_80%,rgba(46,196,182,0.20),transparent_60%)]" />

      {/* Subtle floating eco icons */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-6 top-10 text-[#2EC4B6]/30"
      >
        <Leaf className="h-20 w-20" />
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-6 bottom-8 text-[#006D77]/30"
      >
        <Droplets className="h-16 w-16" />
      </motion.div>
      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: [0, 6, 0], opacity: 1 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-1/3 top-24 text-emerald-400/20"
      >
        <Sun className="h-14 w-14" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#133E87]/20 text-[#2EC4B6] ring-1 ring-[#2EC4B6]/30">
            Eco‑Tech Consultancy • Clean • Green • Smart • Sustainable
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            iVentice — Ideate to Scalability
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200/90 leading-relaxed">
            Innovation, Sustainability, and Strategic Growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#133E87] text-white font-semibold shadow-lg shadow-[#133E87]/30 hover:bg-[#0F2F69] transition-colors">
              Work With Us
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
