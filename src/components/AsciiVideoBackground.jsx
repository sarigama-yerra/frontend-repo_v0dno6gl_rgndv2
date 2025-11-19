import { useEffect, useRef, useState } from 'react'

/*
  AsciiVideoBackground
  - Renders a looping video into ASCII art using canvas processing
  - Defaults to a CORS-enabled sample video. Optionally supports webcam.
*/

const DEFAULT_VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
const CHARSET = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/*tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"

export default function AsciiVideoBackground({ theme, useWebcam = false, videoSrc = DEFAULT_VIDEO, density = 0.9 }) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let stream
    const video = document.createElement('video')
    videoRef.current = video
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.crossOrigin = 'anonymous'

    const start = async () => {
      try {
        if (useWebcam && navigator.mediaDevices?.getUserMedia) {
          stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 360 } })
          video.srcObject = stream
          await video.play()
        } else {
          video.src = videoSrc
          await video.play()
        }
        setReady(true)
      } catch (e) {
        console.warn('ASCII video init failed, falling back to paused frame', e)
      }
    }

    start()

    return () => {
      if (stream) {
        stream.getTracks().forEach(t => t.stop())
      }
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.srcObject = null
      }
    }
  }, [useWebcam, videoSrc])

  useEffect(() => {
    if (!ready) return
    const video = videoRef.current
    const canvas = canvasRef.current || document.createElement('canvas')
    canvasRef.current = canvas
    const ctx = canvas.getContext('2d', { willReadFrequently: true })

    let raf
    let last = 0
    const targetFPS = 15
    const frameInterval = 1000 / targetFPS

    const render = (t) => {
      raf = requestAnimationFrame(render)
      if (t - last < frameInterval) return
      last = t

      if (!video.videoWidth || !video.videoHeight) return
      const charW = 90 // number of characters wide
      const scale = charW / video.videoWidth
      const charH = Math.floor(video.videoHeight * scale * 0.5) // account for character aspect ratio

      canvas.width = charW
      canvas.height = charH

      ctx.drawImage(video, 0, 0, charW, charH)
      const img = ctx.getImageData(0, 0, charW, charH).data

      let out = ''
      const chars = CHARSET
      const n = chars.length - 1

      for (let y = 0; y < charH; y++) {
        for (let x = 0; x < charW; x++) {
          const i = (y * charW + x) * 4
          const r = img[i]
          const g = img[i + 1]
          const b = img[i + 2]
          // perceived luminance
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
          const idx = Math.max(0, Math.min(n, Math.floor((1 - lum / 255) * n * density)))
          out += chars[idx]
        }
        out += '\n'
      }

      const pre = document.getElementById('ascii-video-bg')
      if (pre) pre.textContent = out
    }

    raf = requestAnimationFrame(render)
    return () => cancelAnimationFrame(raf)
  }, [ready, density])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none" aria-hidden>
      <div className={`absolute inset-0 opacity-20 mix-blend-screen bg-gradient-to-br ${theme?.classes?.gradient || ''}`}></div>
      <pre
        id="ascii-video-bg"
        className={`h-full w-full whitespace-pre leading-[0.6] text-[7px] md:text-[8px] lg:text-[9px] font-mono text-slate-200/40 ${theme?.classes?.glow || ''} [text-shadow:_0_0_1px_rgba(0,0,0,0.6)]`}
        style={{
          // Ensure monospace cell roughly square visually
          lineHeight: '0.6',
        }}
      />
    </div>
  )
}
