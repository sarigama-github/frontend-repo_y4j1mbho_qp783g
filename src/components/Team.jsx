import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone } from 'lucide-react'

const people = [
  {
    name: 'Robert Mwangi Gaciri',
    role: 'Managing Consultant',
    focus: 'Projects • Governance • Training • Enterprises',
    initials: 'RMG',
    email: 'robert@iventiceconsultancy.com',
    phone: '+254725612230',
    linkedin: '#',
    bio: 'Project Management Professional; MA in Project Planning & Management (University of Nairobi). BA Social Sciences (BSSS, India). TIP2018 Fellow (Hebrew University of Jerusalem). Director/board member at Eshaita Capital Ltd. 20+ years across projects, consultancy, training, social and business enterprises. Managing Consultant at iVentice Consultancy Limited.'
  },
  {
    name: 'Levi Nganga Mbugua; PhD',
    role: 'Research Consultant',
    focus: 'Statistics • Knowledge Management • Research Ethics',
    initials: 'LNM',
    email: 'levi@iventiceconsultancy.com',
    phone: '+254721666777',
    linkedin: '#',
    bio: 'Two decades of experience creating, sharing, using and managing knowledge. University lecturer and researcher across social, economic, medical and financial domains. Chairman & Academic Team Leader, Dept. of Statistics & Computing Mathematics, The Technical University of Kenya. Applies theory to real‑world problem‑solving with strong ethics.'
  },
  {
    name: 'Sarah Wanjiru Gachie',
    role: 'Agriculture and Plant Consultant',
    focus: 'Plant Pathology • Climate‑Smart Agriculture • SALM',
    initials: 'SWG',
    email: 'sarah@iventiceconsultancy.com',
    phone: '+254717500393',
    linkedin: '#',
    bio: 'Plant Scientist specializing in Plant Pathology. Masters in Plant Science; advanced diploma in epidemiology & preventive medicine (Tel Aviv University). Exchange student, Okayama University (Japan). BSc Horticulture (JKUAT). Experience across Japan, Israel, USA, Kenya. Focus on climate change mitigation, sustainable agriculture land management and indigenous tree planting; currently at KALRO; planning PhD in plant physiology.'
  }
]

function Avatar({ initials }) {
  return (
    <div className="relative h-16 w-16 rounded-xl overflow-hidden ring-2 ring-white/10 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2EC4B6]/25 via-emerald-400/20 to-[#006D77]/20" />
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
          <p className="mt-3 text-slate-300">Experienced consultants spanning governance, research and climate‑smart agriculture.</p>
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
                  <p className="text-[#2EC4B6] text-sm">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">{p.focus}</p>

              {/* Hover reveal */}
              <div className="mt-4 rounded-xl bg-slate-800/40 ring-1 ring-white/10 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-slate-300 leading-relaxed">{p.bio}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <a href={`mailto:${p.email}`} className="inline-flex items-center gap-1 hover:text-white"><Mail className="h-3.5 w-3.5" />{p.email}</a>
                  <a href={`tel:${p.phone}`} className="inline-flex items-center gap-1 hover:text-white"><Phone className="h-3.5 w-3.5" />{p.phone}</a>
                  <a href={p.linkedin} className="inline-flex items-center gap-1 hover:text-white"><Linkedin className="h-3.5 w-3.5" />LinkedIn</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
