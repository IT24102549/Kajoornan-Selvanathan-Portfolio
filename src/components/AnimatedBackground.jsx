import React, { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles = []
    const stars = []

    // Initialize particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2
      })
    }

    // Initialize stars
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2,
        alpha: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.01
      })
    }

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)

    let frameCount = 0
    const render = () => {
      frameCount++

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, '#050816')
      grad.addColorStop(0.5, '#0F172A')
      grad.addColorStop(1, '#111827')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // Draw subtle radial glow
      const radialGrad = ctx.createRadialGradient(w * 0.2, h * 0.2, 0, w * 0.5, h * 0.5, w * 0.8)
      radialGrad.addColorStop(0, 'rgba(6, 182, 212, 0.05)')
      radialGrad.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = radialGrad
      ctx.fillRect(0, 0, w, h)

      // Draw stars with twinkling
      stars.forEach((star) => {
        star.alpha += star.twinkle
        if (star.alpha < 0.2) star.twinkle = 0.01
        if (star.alpha > 0.9) star.twinkle = -0.01

        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw animated particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -50) p.x = w + 50
        if (p.x > w + 50) p.x = -50
        if (p.y < -50) p.y = h + 50
        if (p.y > h + 50) p.y = -50

        ctx.beginPath()
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 w-full h-full" />
}
