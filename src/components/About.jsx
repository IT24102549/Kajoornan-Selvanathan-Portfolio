import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const journey = [
    { year: '2021', title: 'Started IT Degree', desc: 'Began BSc (Hons) Information Technology at SLIIT Northern Campus' },
    { year: '2022', title: 'Web Development Focus', desc: 'Specialized in full-stack development with React, Node.js, and databases' },
    { year: '2023', title: 'Data Science Specialization', desc: 'Deep dive into machine learning, data analysis, and AI fundamentals' },
    { year: '2024', title: 'Leadership & Projects', desc: 'Leading initiatives and building production-grade applications' }
  ]

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Journey</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Bio */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="card-dark">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm an IT undergraduate specializing in Data Science at SLIIT Northern Campus. With a passion for technology and problem-solving, I've developed expertise across multiple domains — from embedded systems to full-stack web development.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                My journey combines academic rigor with practical hands-on experience. I believe in building solutions that matter, using modern technologies and data-driven insights to create meaningful impact.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Beyond code, I'm involved in student leadership, AIESEC initiatives, and continuous learning to stay ahead in this rapidly evolving tech landscape.
              </p>
            </div>
          </motion.div>

          {/* Right: Career Goals */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="card-dark">
              <h3 className="text-2xl font-bold text-white mb-4">Goals & Vision</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                My vision is to become a full-stack software architect focused on building intelligent, scalable systems that solve real-world challenges.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">🎯 Near Term</h4>
                  <p className="text-slate-400 text-sm">Graduate with distinction, secure role as junior developer, contribute to open-source projects</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">🚀 Long Term</h4>
                  <p className="text-slate-400 text-sm">Lead innovative projects, specialize in AI/ML applications, mentor junior developers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
            My Journey
          </h3>
          <div className="space-y-6">
            {journey.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <motion.div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-150 transition-transform" />
                  {i < journey.length - 1 && <div className="w-0.5 h-20 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-cyan-400 text-sm font-semibold">{item.year}</p>
                  <h4 className="text-white font-bold mt-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
