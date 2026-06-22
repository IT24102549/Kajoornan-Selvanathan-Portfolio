import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-gray-400">
        <div>© {new Date().getFullYear()} Kajoornan Selvanathan</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
