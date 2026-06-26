import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaUsers, FaTrophy } from 'react-icons/fa/index.esm.js'

export default function Experience() {
  const experiences = [
    {
      icon: FaTrophy,
      title: 'Treasurer',
      org: 'SLIIT Northern Students Committee',
      period: '2023 - 2024',
      desc: 'Managing committee finances, budgeting, and resource allocation for student initiatives',
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      icon: FaUsers,
      title: 'AIESEC Member',
      org: 'B2B & VD (Volunteer Development)',
      period: '2022 - Present',
      desc: 'Global citizenship development, team collaboration, event coordination, and international partnerships',
      color: 'from-blue-600 to-blue-500'
    },
    {
      icon: FaBriefcase,
      title: 'Project Lead',
      org: 'University Research Initiatives',
      period: '2023 - 2024',
      desc: 'Led cross-functional teams on embedded systems and data science projects with successful deliverables',
      color: 'from-cyan-600 to-cyan-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  return (
    <section id="leadership" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Background</p>
          <h2 className="section-title">Leadership & Experience</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Active involvement in student leadership and collaborative initiatives</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="card-dark group">
                {/* Icon */}
                <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.color} text-white text-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-1">{exp.org}</p>
                <p className="text-slate-500 text-xs mb-4">{exp.period}</p>
                <p className="text-slate-400 leading-relaxed">{exp.desc}</p>

                {/* Accent Line */}
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
