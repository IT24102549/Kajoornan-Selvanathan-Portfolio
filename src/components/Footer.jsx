import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa/index.esm.js'

export default function Footer() {
  const whatsappNumber = '94753714090' // replace with your full WhatsApp number without + or spacing
  const whatsappMessage = 'Hi%20Kajoornan%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.'
  const socials = [
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/kajoornan-selvanathan22', label: 'LinkedIn' },
    { icon: FaGithub, link: 'https://github.com/IT24102549', label: 'GitHub' },
    { icon: FaWhatsapp, link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, label: 'WhatsApp' },
    { icon: FaEnvelope, link: 'mailto:Kajoornan22@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="relative mt-16 border-t border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">Kajoornan</h3>
            <p className="text-slate-400 text-sm">Data scientist, software developer, and technology enthusiast</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link, i) => (
                <a key={i} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors block">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a key={i} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-6" />

        {/* Bottom */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Kajoornan Selvanathan. All rights reserved.</p>
          <p className="text-slate-600 text-xs mt-4 md:mt-0">Crafted with React, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
