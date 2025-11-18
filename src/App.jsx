import Hero from './components/Hero'
import Acronym from './components/Acronym'
import GuidingTeams from './components/GuidingTeams'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Team from './components/Team'
import About from './components/About'
import Chatbot from './components/Chatbot'
import Services from './components/Services'
import Impact from './components/Impact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-[#2EC4B6] text-xl">iVentice</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#acronym" className="hover:text-white">Acronym</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#approach" className="hover:text-white">Approach</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#133E87] text-white text-sm font-semibold hover:bg-[#0F2F69] transition-colors">Get in touch</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Acronym />
        <Services />
        <Impact />
        <section id="approach">
          <Approach />
        </section>
        <GuidingTeams />
        <Team />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} iVentice • Ideate to Scalability</p>
      </footer>

      {/* Persistent Chatbot */}
      <Chatbot />
    </div>
  )
}

export default App
