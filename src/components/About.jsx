import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About iVentice</h2>
            <p className="mt-4 text-slate-300">
              We are a forward-thinking eco‑tech and management consultancy. We partner with
              organizations to design clean, green and smart projects that scale sustainably.
              Our work blends governance, innovation and environmental stewardship to create
              lasting value.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ['Mission', 'Enable sustainable growth through smart strategy, ethical governance and practical innovation.'],
                ['Vision', 'Clean, green and impact‑driven solutions accessible to every organization.'],
              ].map(([title, copy]) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">iVENTICE Acronym</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {[
                ['Innovation', 'We push boundaries to unlock value.'],
                ['Value Addition', 'We translate ideas into measurable outcomes.'],
                ['Entrepreneurship', 'We approach problems with ownership and agility.'],
                ['Networks', 'We build ecosystems and trusted partnerships.'],
                ['Transdisciplinary Approach', 'We blend expertise to solve complex challenges.'],
                ['Impactability', 'We design for tangible, trackable impact.'],
                ['Creativity', 'We favor original, elegant problem‑solving.'],
                ['Extensibility', 'We build scalable systems that grow with you.'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <div>
                    <p className="font-medium text-white">{k}</p>
                    <p className="text-sm">{v}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-6 ring-1 ring-white/10">
              <h4 className="font-semibold">Why choose iVentice</h4>
              <p className="mt-2 text-sm text-slate-300">
                Our guiding teams bring corporate governance, risk, agri‑tech, research and smart
                technology together to solve real problems with measurable environmental and socio‑economic impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
