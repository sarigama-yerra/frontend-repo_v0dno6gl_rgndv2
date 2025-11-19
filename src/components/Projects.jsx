import { motion } from 'framer-motion'

const items = [
  {
    title: 'Code Visualizer',
    desc: 'Transforms code into animated diagrams and flows.',
    tech: ['React', 'D3', 'Framer Motion'],
  },
  {
    title: 'CLI to UI',
    desc: 'Turns command-line tools into friendly apps.',
    tech: ['FastAPI', 'Electron', 'Tailwind'],
  },
  {
    title: 'Ascii Player',
    desc: 'Renders videos as ASCII art in real-time.',
    tech: ['WebGL', 'Canvas', 'WASM'],
  },
]

export default function Projects({ theme }) {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 rounded-2xl opacity-60 blur-lg bg-gradient-to-r ${theme.classes.gradient}`}></div>
              <div className="relative h-full rounded-2xl bg-slate-900/80 border border-slate-700/70 p-6 flex flex-col">
                <h3 className={`text-xl font-semibold mb-2 ${theme.classes.accentText}`}>{p.title}</h3>
                <p className="text-slate-300/90 flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800/80 border border-slate-700/70 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
