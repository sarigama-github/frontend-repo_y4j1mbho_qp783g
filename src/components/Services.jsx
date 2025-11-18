import { motion } from 'framer-motion'
import { Shield, AlertTriangle, Leaf, Sprout, Lightbulb, Cpu, FlaskConical, Sun, Droplets, Recycle } from 'lucide-react'

const services = [
  { title: 'Corporate Governance', icon: Shield, desc: 'Boards, policies and controls that enable ethical, resilient growth.' },
  { title: 'Risk Management', icon: AlertTriangle, desc: 'Risk frameworks, compliance and continuity planning to protect value.' },
  { title: 'Environmental Impact', icon: Leaf, desc: 'Carbon roadmaps, circularity and ESG reporting for real outcomes.' },
  { title: 'Agriculture', icon: Sprout, desc: 'Agri‑innovation, value chains and climate‑smart productivity.' },
  { title: 'Innovation', icon: Lightbulb, desc: 'Venture design, prototyping and product‑market acceleration.' },
  { title: 'Technology', icon: Cpu, desc: 'Cloud, data and platforms that power scalable operations.' },
  { title: 'Research', icon: FlaskConical, desc: 'Evidence‑based insights to inform strategy and policy.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* ambient eco icons */}
      <Sun className="hidden md:block absolute -top-6 -left-6 h-16 w-16 text-[#2EC4B6]/20 rotate-12" />
      <Droplets className="hidden md:block absolute bottom-10 -right-4 h-14 w-14 text-[#006D77]/20" />
      <Recycle className="hidden md:block absolute top-1/3 right-10 h-12 w-12 text-emerald-400/10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core Services</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">Governance, risk, environment, agriculture, innovation, technology and research — integrated for strategic growth.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative rounded-2xl p-6 bg-gradient-to-br from-[#133E87]/10 via-slate-800/60 to-slate-900/60 ring-1 ring-white/10 hover:shadow-xl hover:shadow-[#2EC4B6]/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#2EC4B6]/10 to-[#006D77]/10" />
              <div className="relative flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-[#133E87] text-white ring-1 ring-white/20 shadow-lg shadow-[#133E87]/30">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
                </div>
              </div>
              <div className="relative mt-4">
                <button className="text-sm font-semibold text-[#2EC4B6] hover:text-white transition-colors">Learn more →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
