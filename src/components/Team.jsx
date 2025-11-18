import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const people = [
  {
    name: 'Asha Ndlovu',
    role: 'Executive Director',
    focus: 'Strategy • Partnerships • Governance',
    initials: 'AN',
    linkedin: '#'
  },
  {
    name: 'Kofi Mensah',
    role: 'Head of Innovation',
    focus: 'R&D • Prototyping • Venture Building',
    initials: 'KM',
    linkedin: '#'
  },
  {
    name: 'Lerato Dlamini',
    role: 'Sustainability Lead',
    focus: 'Clean • Green • Smart • Sustainable',
    initials: 'LD',
    linkedin: '#'
  },
  {
    name: 'Michael Okoye',
    role: 'Technology Director',
    focus: 'Cloud • Data • Platforms',
    initials: 'MO',
    linkedin: '#'
  },
  {
    name: 'Zanele Khumalo',
    role: 'Programs & Impact',
    focus: 'Monitoring • Evaluation • Impactability',
    initials: 'ZK',
    linkedin: '#'
  },
  {
    name: 'Tariro Chikore',
    role: 'Community & Networks',
    focus: 'Stakeholders • Hubs • Ecosystems',
    initials: 'TC',
    linkedin: '#'
  }
]

function Avatar({ initials }) {
  return (
    <div className="relative h-16 w-16 rounded-xl overflow-hidden ring-2 ring-white/10 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-400/20 to-cyan-500/20" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
        {initials}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Team</h2>
          <p className="mt-3 text-slate-300">A multidisciplinary team bringing innovation to life through transdisciplinary collaboration and measurable impact.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/7.5 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Avatar initials={p.initials} />
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
                  <p className="text-emerald-300 text-sm">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">{p.focus}</p>
              <div className="mt-5">
                <a
                  href={p.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
