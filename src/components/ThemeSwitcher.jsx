import { useState } from 'react'
import { Palette } from 'lucide-react'

const THEMES = {
  blue: {
    name: 'Blue',
    classes: {
      accentText: 'text-blue-400',
      accentBg: 'bg-blue-500',
      accentRing: 'ring-blue-400/40',
      gradient: 'from-blue-600 via-indigo-600 to-blue-700',
      glow: 'shadow-[0_0_40px_rgba(59,130,246,0.45)]',
    },
    color: '#3b82f6',
  },
  purple: {
    name: 'Purple',
    classes: {
      accentText: 'text-purple-400',
      accentBg: 'bg-purple-500',
      accentRing: 'ring-purple-400/40',
      gradient: 'from-purple-600 via-fuchsia-600 to-purple-700',
      glow: 'shadow-[0_0_40px_rgba(168,85,247,0.45)]',
    },
    color: '#a855f7',
  },
  emerald: {
    name: 'Emerald',
    classes: {
      accentText: 'text-emerald-400',
      accentBg: 'bg-emerald-500',
      accentRing: 'ring-emerald-400/40',
      gradient: 'from-emerald-600 via-teal-600 to-emerald-700',
      glow: 'shadow-[0_0_40px_rgba(16,185,129,0.45)]',
    },
    color: '#10b981',
  },
  rose: {
    name: 'Rose',
    classes: {
      accentText: 'text-rose-400',
      accentBg: 'bg-rose-500',
      accentRing: 'ring-rose-400/40',
      gradient: 'from-rose-600 via-pink-600 to-rose-700',
      glow: 'shadow-[0_0_40px_rgba(244,63,94,0.45)]',
    },
    color: '#f43f5e',
  },
  amber: {
    name: 'Amber',
    classes: {
      accentText: 'text-amber-400',
      accentBg: 'bg-amber-500',
      accentRing: 'ring-amber-400/40',
      gradient: 'from-amber-600 via-orange-600 to-amber-700',
      glow: 'shadow-[0_0_40px_rgba(245,158,11,0.45)]',
    },
    color: '#f59e0b',
  },
  cyan: {
    name: 'Cyan',
    classes: {
      accentText: 'text-cyan-400',
      accentBg: 'bg-cyan-500',
      accentRing: 'ring-cyan-400/40',
      gradient: 'from-cyan-600 via-sky-600 to-cyan-700',
      glow: 'shadow-[0_0_40px_rgba(6,182,212,0.45)]',
    },
    color: '#06b6d4',
  },
}

export default function ThemeSwitcher({ value, onChange }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 rounded-full px-4 py-2 bg-slate-800/70 hover:bg-slate-800 text-slate-100 border border-slate-700/60 transition ${value.classes.glow}`}
      >
        <Palette className={`${value.classes.accentText}`} size={18} />
        <span className="text-sm">Theme</span>
        <span className={`ml-2 h-3 w-3 rounded-full ${value.classes.accentBg} ring-2 ${value.classes.accentRing}`}></span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900/95 border border-slate-700/50 p-3 backdrop-blur-xl shadow-lg">
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(THEMES).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => { onChange(theme); setOpen(false) }}
                className={`group flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40`}
              >
                <span className={`h-4 w-4 rounded-full ${theme.classes.accentBg} ring-2 ${theme.classes.accentRing}`}></span>
                <span className="text-xs text-slate-200">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { THEMES }
