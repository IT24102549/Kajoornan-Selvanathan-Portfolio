import React from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#050816] via-[#0F172A] to-[#111827] z-50">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-cyan-400/30" initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }} animate={{ y: [0, -100], opacity: [0, 1, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.2 }} />
        ))}
      </div>

      {/* Main loader */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Outer rotating ring */}
        <motion.div className="relative w-20 h-20" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400/50 shadow-lg shadow-cyan-500/30" />
        </motion.div>

        {/* Inner pulsing circle */}
        <motion.div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* Text */}
        <motion.p className="text-cyan-400 font-semibold mt-8 text-sm" animate={{ opacity: [0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}
