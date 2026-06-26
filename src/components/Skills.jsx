import React from 'react'
import { motion } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaNode, FaDatabase, FaGit } from 'react-icons/fa/index.esm.js'
import { SiJavascript, SiTypescript, SiTailwindcss, SiArduino } from 'react-icons/si/index.esm.js'

const SkillCard = ({ icon: Icon, name, level, color }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="card-dark">
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-lg ${color} text-white text-2xl`}>
        <Icon />
      </div>
      <div>
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-cyan-400 text-sm">{level}</p>
      </div>
    </div>
    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-cyan-500 to-blue-600" />
    </div>
  </motion.div>
)

const CategorySection = ({ title, skills }) => (
  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, i) => (
        <SkillCard key={i} {...skill} />
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  const programmingSkills = [
    { icon: FaJava, name: 'Java', level: 'Advanced', color: 'bg-gradient-to-r from-orange-600 to-orange-500' },
    { icon: FaPython, name: 'Python', level: 'Advanced', color: 'bg-gradient-to-r from-blue-600 to-blue-500' },
    { icon: SiJavascript, name: 'JavaScript', level: 'Advanced', color: 'bg-gradient-to-r from-yellow-500 to-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', level: 'Intermediate', color: 'bg-gradient-to-r from-blue-700 to-blue-600' },
  ]

  const webSkills = [
    { icon: FaReact, name: 'React.js', level: 'Advanced', color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Advanced', color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
    { icon: FaNode, name: 'Node.js', level: 'Intermediate', color: 'bg-gradient-to-r from-green-600 to-green-500' },
    { icon: FaDatabase, name: 'MySQL', level: 'Intermediate', color: 'bg-gradient-to-r from-orange-600 to-orange-500' },
  ]

  const toolsSkills = [
    { icon: FaGit, name: 'Git & GitHub', level: 'Advanced', color: 'bg-gradient-to-r from-red-600 to-red-500' },
    { icon: SiArduino, name: 'Arduino', level: 'Advanced', color: 'bg-gradient-to-r from-cyan-600 to-cyan-500' },
    { icon: FaDatabase, name: 'Data Analysis', level: 'Intermediate', color: 'bg-gradient-to-r from-purple-600 to-purple-500' },
  ]

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Expertise</p>
          <h2 className="section-title">Technical Skills & Proficiencies</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Specialized in data science, full-stack development, and modern web technologies</p>
        </motion.div>

        <div className="space-y-16">
          <CategorySection title="Programming Languages" skills={programmingSkills} />
          <CategorySection title="Web & Frameworks" skills={webSkills} />
          <CategorySection title="Tools & Technologies" skills={toolsSkills} />
        </div>
      </div>
    </section>
  )
}

