import React, {useState} from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In a real site, you'd POST to an API. Here we just show a success state.
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6 glass p-8 rounded-2xl">
        <h3 className="text-2xl text-white font-semibold">Contact</h3>
        <p className="text-gray-300 mt-2">Email: <a href="mailto:kajoornan@example.com" className="text-accent">kajoornan@example.com</a></p>
        <p className="text-gray-300">LinkedIn: <a href="#" className="text-accent">LinkedIn Profile</a> — GitHub: <a href="#" className="text-accent">GitHub</a></p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input required name="name" placeholder="Your name" className="p-3 rounded bg-transparent border border-gray-700 text-white" />
          <input required type="email" name="email" placeholder="Your email" className="p-3 rounded bg-transparent border border-gray-700 text-white" />
          <textarea required name="message" rows="5" placeholder="Message" className="p-3 rounded bg-transparent border border-gray-700 text-white" />
          <button className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-md text-white">Send Message</button>
        </form>

        {sent && <div className="mt-4 text-green-400">Message sent (demo)</div>}
      </div>
    </section>
  )
}
