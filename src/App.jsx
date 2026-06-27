import React, { useState } from 'react'
import Header from './components/Header'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'
import { motion } from 'framer-motion'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] via-[#0F172A] to-[#111827] text-white font-sans overflow-hidden">
      <AnimatedBackground />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Header />
      <main className="relative z-10 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Certificates />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
