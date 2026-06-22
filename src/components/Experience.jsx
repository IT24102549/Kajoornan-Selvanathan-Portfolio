import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl text-white font-semibold">Experience & Activities</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="glass p-4 rounded-md">
            <h4 className="text-white font-medium">AIESEC Member</h4>
            <p className="text-gray-300">B2B & VD IGV — experience in team collaboration and event coordination.</p>
          </div>
          <div className="glass p-4 rounded-md">
            <h4 className="text-white font-medium">University Projects</h4>
            <p className="text-gray-300">Worked on embedded and web-based projects as part of coursework.</p>
          </div>
          <div className="glass p-4 rounded-md">
            <h4 className="text-white font-medium">Team Collaborations</h4>
            <p className="text-gray-300">Cross-functional team work on software and hardware integrations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
