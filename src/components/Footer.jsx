export default function Footer({ theme }) {
  return (
    <footer id="contact" className="relative py-12">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-300">Open to collaborations and opportunities.</p>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@example.com" className={`px-4 py-2 rounded-lg ${theme.classes.accentBg} text-white`}>Email</a>
              <a href="https://github.com" target="_blank" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 border border-slate-700">GitHub</a>
              <a href="https://x.com" target="_blank" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 border border-slate-700">X</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Your Name</p>
      </div>
    </footer>
  )
}
