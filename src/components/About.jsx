import React from 'react'
import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'

export default function About() {

  const journey = [
    {
      year: '2023',
      title: 'G.C.E. Advanced Level – J/St. John\'s College',
      desc: 'Completed secondary education in the Commerce Stream with results of 1B and 2C.'
    },
    {
      year: '2024',
      title: 'Undergraduate at SLIIT',
      desc: 'Started undergraduate studies in Information Technology with a focus on Data Science.'

    },
    {
      year: '2025',
      title: 'AIESEC Member',
      desc: 'Joined AIESEC in SLIIT and involved in leadership and team collaboration activities.'
    },
    {
      year: '2026',
      title: 'Treasurer at Northern Uni Student\s Committee',
      desc: 'Managing financial records and budget allocation for the student committee during the term 26/27.'
    },
    {
     year: '2026',
     title: 'Specialization in Data Science at SLIIT',
     desc: 'Began specialized track in Data Science.'
    },
   
  ]

  return (
    <section id="about" className="relative mt-[22vh] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-header"></p>
          <h2 className="section-title">Who I Am ?</h2>
        </motion.div>

        {/* WHO I AM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="card-dark max-w-3xl mx-auto mb-24"
        >
          <h3 className="text-2xl font-bold text-white mb-4"></h3>
          <p className="text-slate-400 leading-relaxed">
            I'm an Information Technology undergraduate specializing in Data Science with a strong passion for building,
            learning, and solving real-world problems through technology. I enjoy working with Artificial Intelligence,
            Web Development, and Data-Driven systems.
            <br /><br />
            I continuously challenge myself to improve my technical and problem-solving skills while collaborating with
            others and exploring new technologies. My goal is to grow as a software engineer who creates meaningful
            and impactful solutions.
          </p>
        </motion.div>

        {/* TIMELINE TITLE */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3"
        >
          <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
          My Timeline
        </motion.h3>

        {/* TIMELINE */}
        <div className="relative">

          {/* center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-cyan-500/30"></div>

          <div className="space-y-16">

            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center w-full ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >

                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>

                  <p className="text-cyan-400 font-semibold">{item.year}</p>
                  <h4 className="text-white font-bold mt-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-2">{item.desc}</p>

                </div>

                {/* dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/40"></div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
        {/* ================= DAYS I CODE ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mt-28"
>

  <div className="text-center mb-10">
    <h2 className="section-title">
      Days I <span className="text-cyan-400">Code</span>
    </h2>

    <p className="text-slate-400 mt-3">
      A visual representation of my coding consistency and GitHub contributions.
    </p>
  </div>

  <div className="card-dark overflow-x-auto">

    <GitHubCalendar
      username="IT24102549"
      blockSize={14}
      blockMargin={5}
      fontSize={14}
      colorScheme="dark"
      theme={{
        dark: [
          "#1e293b",
          "#164e63",
          "#0891b2",
          "#06b6d4",
          "#67e8f9"
        ]
      }}
    />

  </div>

</motion.div>
        

            </div>

        



      
    </section>
  )
}