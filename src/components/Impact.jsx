import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Leaf, Sun, Droplets } from 'lucide-react'

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const start = performance.now()
    startRef.current = start

    const step = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration])

  return value
}

export default function Impact() {
  const co2 = useCountUp(12800, 1400)
  const projects = useCountUp(86, 1200)
  const communities = useCountUp(42, 1300)

  const badges = [
    { icon: Sun, label: 'Solar‑Powered' },
    { icon: Droplets, label: 'Hydro‑Efficient' },
    { icon: Leaf, label: 'Plastic‑Free' },
  ]

  return (
    <section id="impact" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_20%,rgba(19,62,135,0.20),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Impact & Sustainability</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">We measure what matters — carbon reductions, project outcomes and community value.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 text-center">
            <p className="text-5xl font-extrabold tracking-tight text-[#2EC4B6]">{co2.toLocaleString()}<span className="text-emerald-300 text-2xl align-super"> t</span></p>
            <p className="mt-2 text-slate-300">CO₂ saved</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 text-center">
            <p className="text-5xl font-extrabold tracking-tight text-[#2EC4B6]">{projects}</p>
            <p className="mt-2 text-slate-300">Projects completed</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 text-center">
            <p className="text-5xl font-extrabold tracking-tight text-[#2EC4B6]">{communities}</p>
            <p className="mt-2 text-slate-300">Communities impacted</p>
          </motion.div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {badges.map((b) => (
            <div key={b.label} className="rounded-xl bg-gradient-to-r from-[#133E87]/10 to-[#006D77]/10 ring-1 ring-white/10 px-4 py-3 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2EC4B6]/15 text-[#2EC4B6] ring-1 ring-[#2EC4B6]/20">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-white">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <p className="text-white font-semibold">Carbon reduction roadmap</p>
            <div className="mt-4 h-2 w-full rounded bg-slate-800 overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '72%' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-[#2EC4B6] to-[#006D77]" />
            </div>
            <p className="mt-2 text-xs text-slate-400">72% progress toward target for current portfolio</p>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <p className="text-white font-semibold">Plastic-free operations</p>
            <div className="mt-4 h-2 w-full rounded bg-slate-800 overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '54%' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-emerald-400 to-[#2EC4B6]" />
            </div>
            <p className="mt-2 text-xs text-slate-400">54% adoption across programs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
