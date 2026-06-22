import React from 'react'

const SkillBar = ({name, value}) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm text-gray-300">
      <span>{name}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-700 rounded mt-2">
      <div className="h-2 rounded bg-gradient-to-r from-primary to-accent" style={{width: `${value}%`}} />
    </div>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl text-white font-semibold">Skills</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-lg">
            <h4 className="text-lg text-white font-medium">Programming Languages</h4>
            <div className="mt-4">
              <SkillBar name="Java" value={80} />
              <SkillBar name="JavaScript" value={85} />
              <SkillBar name="HTML" value={95} />
              <SkillBar name="CSS" value={90} />
            </div>
          </div>
          <div className="glass p-6 rounded-lg">
            <h4 className="text-lg text-white font-medium">Technologies & Tools</h4>
            <div className="mt-4">
              <SkillBar name="React.js" value={80} />
              <SkillBar name="Node.js" value={75} />
              <SkillBar name="Express.js" value={70} />
              <SkillBar name="MySQL" value={70} />
              <SkillBar name="Git & GitHub" value={85} />
              <SkillBar name="VS Code / IntelliJ / Figma" value={88} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
