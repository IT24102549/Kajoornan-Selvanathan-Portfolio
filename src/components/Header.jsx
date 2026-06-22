import React from 'react'

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm glass-dark">
        <div className="text-white font-semibold">Kajoornan</div>
        <div className="flex gap-4 items-center">
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  )
}
