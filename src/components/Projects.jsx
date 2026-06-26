import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Automated Chess Board',
      desc: 'Arduino-based smart chessboard using reed switches for piece detection and electromagnets for automated moves, controlled via stepper motors.',
      tech: ['Arduino', 'C++', 'Electronics', 'IoT'],
      image: '♟️',
      link: '#'
    },
    {
      title: 'Online Examination System',
      desc: 'Full-featured Java EE web application for secure exam management with real-time result calculation using JSP/Servlets MVC architecture.',
      tech: ['Java EE', 'JSP', 'Servlets', 'MySQL'],
      image: '📝',
      link: '#'
    },
    {
      title: 'SmartClinic App',
      desc: 'Mobile healthcare platform with Lab Test Management Module for tracking, analysis, and digital reporting with patient records management.',
      tech: ['Android', 'Flutter', 'Firebase', 'Medical IT'],
      image: '🏥',
      link: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Showcasing innovative solutions across embedded systems, web development, and mobile applications</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
