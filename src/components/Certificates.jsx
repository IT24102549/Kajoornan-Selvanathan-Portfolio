import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaCertificate } from 'react-icons/fa'

export default function Certificates() {
  const certificates = [
    {
      title: 'Data Science Fundamentals',
      issuer: 'Coursera / University Partner',
      year: '2023',
      icon: '📊'
    },
    {
      title: 'Web Development Certification',
      issuer: 'FreeCodeCamp',
      year: '2023',
      icon: '🌐'
    },
    {
      title: 'Java Programming Professional',
      issuer: 'Oracle Academy',
      year: '2022',
      icon: '☕'
    },
    {
      title: 'Git & GitHub Basics',
      issuer: 'GitHub Learning Lab',
      year: '2022',
      icon: '🔧'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      year: '2023',
      icon: '🤖'
    },
    {
      title: 'Arduino & IoT Workshop',
      issuer: 'SLIIT Innovation Hub',
      year: '2022',
      icon: '⚡'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Achievements</p>
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Professional certifications in data science, web development, and emerging technologies</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} whileHover={{ y: -5 }} className="card-dark group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <FaCertificate className="text-cyan-400/30 group-hover:text-cyan-400 transition-colors w-5 h-5" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
              
              <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
                <span className="text-cyan-400 text-xs font-semibold">{cert.year}</span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
