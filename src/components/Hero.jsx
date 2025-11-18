import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,rgba(34,197,94,0.25),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20">
            Ideate to Scalability
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            iVentice
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-emerald-100/80 leading-relaxed">
            We grow businesses through skilled management, purposeful innovation and sustainable execution. 
            Our team blends deep expertise with a passion for continuous improvement to deliver measurable impact.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#acronym" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">
              Explore iVENTICE
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition-colors">
              Talk to us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
