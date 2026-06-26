import React from 'react'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'
import profile from '../assets/Profile.png'

export default function Hero() {
  const typed = useTypewriter(['Data Science Enthusiast', 'Software Developer', 'AI Explorer', 'Problem Solver'], 100, 1600)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-0">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="absolute top-0 right-0 hidden md:block h-[55vh] w-[48%] pointer-events-none overflow-hidden">
        <div className="absolute top-14 right-12 w-56 h-56 rounded-full bg-cyan-500/12 blur-3xl opacity-15 hero-graph" />
        <div className="absolute top-28 right-32 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl opacity-12 hero-graph hero-graph-delay" />
        <div className="absolute top-10 right-40 w-[1px] h-28 bg-gradient-to-b from-cyan-300/25 to-transparent rotate-[15deg] hero-graph" />
        <div className="absolute top-28 right-20 w-[1px] h-32 bg-gradient-to-b from-blue-400/20 to-transparent rotate-[35deg] hero-graph hero-graph-delay" />
        <div className="absolute top-24 right-48 w-[1px] h-20 bg-gradient-to-b from-purple-400/20 to-transparent rotate-[80deg] hero-graph" />
        <div className="absolute top-36 right-10 w-24 h-24 rounded-full border border-cyan-400/20 bg-cyan-500/5 blur-sm opacity-90 hero-graph" />
        <span className="absolute top-20 right-18 w-2 h-2 rounded-full bg-cyan-400/35 blur-sm hero-graph" />
        <span className="absolute top-12 right-28 w-2 h-2 rounded-full bg-blue-400/20 blur-sm hero-graph hero-graph-delay" />
        <span className="absolute top-36 right-40 w-2 h-2 rounded-full bg-purple-400/20 blur-sm hero-graph" />
        <span className="absolute top-48 right-28 w-2 h-2 rounded-full bg-cyan-400/30 blur-sm hero-graph hero-graph-delay" />
        <span className="absolute top-14 right-8 w-3 h-3 rounded-full bg-cyan-400/20 shadow-[0_0_12px_rgba(6,182,212,0.22)] hero-graph" />
      </motion.div>
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 leading-tight">
            Kajoornan
            <br />
            Selvanathan
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-3">
            IT Undergraduate | Data Science Enthusiast | Software Developer
          </p>
          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl">
           IT Undergraduate specializing in Data Science at SLIIT Northern Uni. Passionate about building intelligent software solutions, data-driven applications, and innovative technology projects that create real-world impact.
          </p>
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            {typed}
            <span className="typing-cursor" />
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all text-center">
              View Projects
            </motion.a>
            <motion.a href="/assets/Kajoornan_CV.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all text-center">
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div initial={{ opacity: 0, x: 40, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }} className="relative flex justify-center md:justify-end md:-mt-16 lg:-mt-20">
          <div className="relative w-80 h-80">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" />
            
            {/* Inner glow circle */}
            <motion.div className="absolute inset-0 rounded-full" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} style={{ border: '2px solid rgba(34, 211, 238, 0.3)' }} />
            
            {/* Profile Image Container */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 backdrop-blur-xl bg-gradient-to-br from-slate-900/40 to-slate-950/60 flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-500/20">
              <img src={profile} alt="Kajoornan" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-cyan-400/60 hover:text-cyan-400 cursor-pointer transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
