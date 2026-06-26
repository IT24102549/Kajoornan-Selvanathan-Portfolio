import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward } from 'react-icons/fa/index.esm.js'

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Academic</p>
          <h2 className="section-title">Education & Specialization</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="card-dark">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-cyan-400 text-sm font-semibold">Degree Program</p>
                <h3 className="text-2xl font-bold text-white">BSc (Hons) Information Technology</h3>
              </div>
            </div>
            <div className="space-y-4 text-slate-400">
              <div>
                <p className="text-sm text-slate-500">Institution</p>
                <p className="text-white font-semibold">Sri Lanka Institute of Information Technology</p>
                <p className="text-sm">SLIIT Northern Campus, Jaffna</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Duration</p>
                <p className="text-white font-semibold">2021 - Present</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Key Subjects</p>
                <p className="text-sm">Data Structures, Web Development, Database Design, AI/ML, Software Engineering</p>
              </div>
            </div>
          </motion.div>

          {/* Specialization */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="card-dark">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white text-2xl">
                <FaAward />
              </div>
              <div>
                <p className="text-purple-400 text-sm font-semibold">Specialization</p>
                <h3 className="text-2xl font-bold text-white">Data Science</h3>
              </div>
            </div>
            <div className="space-y-4 text-slate-400">
              <div>
                <p className="text-sm text-slate-500">Focus Area</p>
                <p className="text-white font-semibold">Advanced Data Analytics & Machine Learning</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Core Competencies</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'Data Analysis', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
