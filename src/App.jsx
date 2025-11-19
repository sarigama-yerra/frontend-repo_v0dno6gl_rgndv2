import { useMemo, useState } from 'react'
import Hero from './components/Hero'
import AsciiPanel from './components/AsciiPanel'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ThemeSwitcher, { THEMES } from './components/ThemeSwitcher'
import AsciiVideoBackground from './components/AsciiVideoBackground'

function App() {
  const [theme, setTheme] = useState(THEMES.blue)

  // Choose a random background video once per load
  const bgVideo = useMemo(() => {
    const choices = [
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    ]
    return choices[Math.floor(Math.random() * choices.length)]
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* ASCII video background */}
      <AsciiVideoBackground theme={theme} videoSrc={bgVideo} />

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Top nav */}
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-slate-800">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-md ${theme.classes.accentBg} ${theme.classes.glow}`}></div>
              <span className="font-semibold tracking-wide">Dev Portfolio</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="/test" className="hover:text-white">Backend Test</a>
            </nav>
            <ThemeSwitcher value={theme} onChange={setTheme} />
          </div>
        </header>

        {/* Hero with Spline */}
        <Hero theme={theme} />

        {/* ASCII section */}
        <section className="relative py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ascii energy, modern stack</h2>
              <p className="mt-4 text-slate-300/90">A coder-themed portfolio inspired by terminals and retro art. Animated ASCII block rotates while a live video gets converted to ASCII behind the scenes.</p>
              <ul className="mt-6 space-y-2 text-slate-300/90 text-sm">
                <li>• Interactive 3D hero</li>
                <li>• Live theme switching</li>
                <li>• Real-time video → ASCII background</li>
              </ul>
            </div>
            <AsciiPanel theme={theme} />
          </div>
        </section>

        <Projects theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  )
}

export default App
