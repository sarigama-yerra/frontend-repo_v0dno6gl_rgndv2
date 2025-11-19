import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ theme }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/70 to-slate-950/95 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className={`text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100`}>Hi, I'm <span className={`${theme.classes.accentText}`}>a Coder</span></h1>
          <p className="mt-6 text-lg text-slate-300/90 leading-relaxed">
            I craft interactive, performant web experiences. This portfolio blends ASCII art vibes with a modern 3D scene and subtle motion.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg ${theme.classes.accentBg} text-white shadow-lg hover:opacity-95 transition`}>View Projects</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/70 text-slate-100 border border-slate-700/60 hover:bg-slate-800 transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
