import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa/index.esm.js'

const navItems = ['Home', 'About', 'Projects', 'Contact']
const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kajoornan-selvanathan22',
    icon: FaLinkedin
  },
  {
    label: 'GitHub',
    href: 'https://github.com/IT24102549',
    icon: FaGithub
  }
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('Home')
  const [scrollBlur, setScrollBlur] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrollBlur(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto px-6 py-5 flex items-center justify-between transition-all duration-500 ${scrollBlur ? 'backdrop-blur-xl bg-slate-950/30' : 'backdrop-blur-md bg-slate-950/20'}`}>
        <motion.a
          href="https://www.linkedin.com/in/kajoornan-selvanathan22"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          KS
        </motion.a>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-300'}`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2, boxShadow: '0 0 16px rgba(6,182,212,0.35)' }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900/60 text-cyan-400 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
