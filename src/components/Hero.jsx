import React from 'react'
import useTypewriter from '../hooks/useTypewriter'
import profile from '../assets/Profile.png'

export default function Hero() {
  const typed = useTypewriter(['IT Undergraduate', 'Web Developer', 'Software Developer'], 100, 1400)

  return (
    <section id="home" className="min-h-screen flex items-start pt-16 md:pt-40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-start gap-8 justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Kajoornan Selvanathan</h1>
          <p className="text-xl text-gray-300 mt-2">BSc (Hons) Information Technology — SLIIT</p>
          <h2 className="mt-6 text-2xl text-accent">{typed}<span className="typing-cursor"/></h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto md:mx-0">I build modern web applications and enjoy solving problems through software. Passionate about full-stack development and embedded systems.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <a href="/assets/Kajoornan_CV.pdf" className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-md text-white">Download CV</a>
            <a href="#contact" className="px-4 py-2 border border-gray-700 rounded-md text-gray-200">Contact Me</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glass p-4 flex items-center justify-center border border-white/10 shadow-lg">
            <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
