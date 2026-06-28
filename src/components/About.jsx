// import React from 'react'
// import { motion } from 'framer-motion'

// export default function About() {
//   const journey = [
//     { year: '2021', title: 'Started IT Degree', desc: 'Began BSc (Hons) Information Technology at SLIIT Northern Campus' },
//     { year: '2022', title: 'Web Development Focus', desc: 'Specialized in full-stack development with React, Node.js, and databases' },
//     { year: '2023', title: 'Data Science Specialization', desc: 'Deep dive into machine learning, data analysis, and AI fundamentals' },
//     { year: '2024', title: 'Leadership & Projects', desc: 'Leading initiatives and building production-grade applications' }
//   ]

//   return (
//     <section id="about" className="relative mt-[22vh] md:mt-[24vh] py-24 md:py-32">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
//           <p className="section-header">Journey</p>
//           <h2 className="section-title">About Me</h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
//           {/* Left: Bio */}
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <div className="card-dark">
//               <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
//               <p className="text-slate-400 leading-relaxed mb-4">
//                 I'm an Information Technology undergraduate specializing in Data Science with a passion for learning, building, and continuously improving. I enjoy solving real-world problems through technology and exploring areas such as Artificial Intelligence, Data Science, Web Development, and Mobile Application Development.
//               </p>
//               <p className="text-slate-400 leading-relaxed mb-4">
//                 I believe that every challenge is an opportunity to grow. I'm driven by curiosity, enjoy collaborating with others, and constantly seek new experiences that expand my knowledge and strengthen my technical and problem-solving skills. My goal is to create meaningful solutions that make a positive impact while continuing to grow as a technology professional.
//               </p>
//               <p className="text-slate-400 leading-relaxed">
                
//               </p>
//             </div>
//           </motion.div>

//           {/* Right: Career Goals */}
//           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <div className="card-dark">
//               <h3 className="text-2xl font-bold text-white mb-4"></h3>
//               <p className="text-slate-400 leading-relaxed mb-6">
               
//               </p>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-cyan-400 font-semibold mb-2">🎯GOAL</h4>
//                   <p className="text-slate-400 text-sm">To continuously develop my technical and analytical skills while building innovative, data-driven solutions that solve real-world problems and create meaningful impact.
// </p>
//                 </div>
//                 <div>
//                   <h4 className="text-cyan-400 font-semibold mb-2">👁️VISION</h4>
//                   <p className="text-slate-400 text-sm">To become a skilled Data Scientist and Software Engineer, recognized for creating intelligent, user-focused technologies that contribute to a smarter and more connected future.
// </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         Timeline
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//           <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
//             <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
//             My Journey
//           </h3>
//           <div className="space-y-6">
//             {journey.map((item, i) => (
//               <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex gap-6 group">
//                 <div className="flex flex-col items-center">
//                   <motion.div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-150 transition-transform" />
//                   {i < journey.length - 1 && <div className="w-0.5 h-20 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />}
//                 </div>
//                 <div className="pb-8">
//                   <p className="text-cyan-400 text-sm font-semibold">{item.year}</p>
//                   <h4 className="text-white font-bold mt-1">{item.title}</h4>
//                   <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
import React from 'react'
import { motion } from 'framer-motion'

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

      </div>
    </section>
  )
}