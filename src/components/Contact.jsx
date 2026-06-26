import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa/index.esm.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socials = [
    { icon: FaEnvelope, label: 'Email', link: 'mailto:Kajoornan22@gmail.com' },
    { icon: FaPhone, label: 'Phone', link: 'tel:+94753714090' },
    { icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/kajoornan-selvanathan22' },
    { icon: FaGithub, label: 'GitHub', link: 'https://github.com/IT24102549' }
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="section-header">Get In Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Feel free to reach out for collaborations or to say hello!</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="md:col-span-1">
            <div className="space-y-6">
              {socials.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a key={i} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{social.label}</p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{social.link === 'mailto:kajoornan@example.com' ? 'kajoornan@example.com' : social.label}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="md:col-span-2 card-dark">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Your message here..." className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none" />
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                Send Message
              </motion.button>

              {sent && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  ✓ Message received! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
