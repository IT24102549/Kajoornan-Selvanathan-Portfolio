import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'
import { motion } from 'framer-motion'

export default function App(){
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 700)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] via-[#071126] to-[#0b0f1a] text-white font-sans">
      {loading && <Loader />}
      <Header />
      <main className="pt-20">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
