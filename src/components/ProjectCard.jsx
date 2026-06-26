import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa/index.esm.js'

export default function ProjectCard({ title, desc, tech, image, link }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} whileHover={{ y: -5 }} className="group card-dark flex flex-col h-full">
      {/* Project Image/Icon Area */}
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="text-6xl">
          {image}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-600/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{desc}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t, i) => (
          <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {t}
          </motion.span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <motion.a href={link} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
          <FaGithub className="w-4 h-4" />
          GitHub
        </motion.a>
        <motion.a href={link} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/10 transition-all">
          <FaExternalLinkAlt className="w-4 h-4" />
          Demo
        </motion.a>
      </div>
    </motion.div>
  )
}
