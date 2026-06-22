import { useEffect, useState } from 'react'

// Simple typewriter hook that cycles through phrases
export default function useTypewriter(phrases = [], speed = 120, pause = 1500) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [forward, setForward] = useState(true)

  useEffect(() => {
    if (!phrases.length) return
    const current = phrases[index]
    let timeout = null

    if (forward) {
      if (subIndex <= current.length) {
        timeout = setTimeout(() => setSubIndex(s => s + 1), speed)
        setText(current.slice(0, subIndex))
      } else {
        timeout = setTimeout(() => setForward(false), pause)
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex(s => s - 1), speed / 2)
        setText(current.slice(0, subIndex))
      } else {
        setForward(true)
        setIndex(i => (i + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [subIndex, index, forward, phrases, speed, pause])

  return text
}
