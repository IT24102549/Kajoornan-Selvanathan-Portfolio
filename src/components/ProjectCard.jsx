import React from 'react'

export default function ProjectCard({title, desc, tech, link}) {
  return (
    <div className="glass p-4 rounded-lg">
      <div className="h-40 bg-gradient-to-br from-primary to-accent rounded-md mb-4 flex items-center justify-center text-white">Image</div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-300 mt-2">{desc}</p>
      <div className="mt-3 text-sm text-gray-400">{tech}</div>
      <div className="mt-4">
        <a href={link} className="text-accent hover:underline">View on GitHub</a>
      </div>
    </div>
  )
}
