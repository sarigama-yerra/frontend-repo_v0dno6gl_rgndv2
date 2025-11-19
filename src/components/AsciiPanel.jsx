import { useEffect, useRef } from 'react'

const asciiFrames = [
`   ____            _           _           \n  / __ \\___  ____(_)___  ____| |     __  __\n / / / / _ \\/ __/ / __\\/ __ \\ | /| / / / /\n/ /_/ /  __/ /_/ / / / / /_/ / |/ |/ / /_/ / \n\\____/\\___/\\__/_/_/ /_/\\____/|__/|__/\\__, /  \n                                     /____/   `,
` __   __           _        _             \n \\ \\ / /__ _  __(_)___   (_)___  ___ _  __\n  \\ V / _ \\ |/ / / __\\ / / __\\/ _ \\ |/ /\n   | |  __/   < / / /_/ // / /_/ /  __/   < \n   |_|\\___/_/|_/_/\\____//_/\\____/\\___/_/|_|`
]

export default function AsciiPanel({ theme }) {
  const preRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % asciiFrames.length
      if (preRef.current) {
        preRef.current.textContent = asciiFrames[frameRef.current]
      }
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className={`absolute -inset-0.5 rounded-xl opacity-60 blur-lg bg-gradient-to-r ${theme.classes.gradient}`}></div>
      <div className="relative rounded-xl bg-slate-900/80 border border-slate-700/70 p-4">
        <pre
          ref={preRef}
          className={`whitespace-pre leading-[1.15] text-sm md:text-base font-mono text-slate-200 ${theme.classes.glow}`}
        >
{asciiFrames[0]}
        </pre>
      </div>
    </div>
  )
}
