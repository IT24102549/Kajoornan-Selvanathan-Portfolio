import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Automated Chess Board',
      desc: 'Arduino-based smart chessboard using reed switches, electromagnets, and stepper motors for real-time piece detection.',
      tech: 'Arduino, C++, Electromechanics',
      link: '#'
    },
    {
      title: 'Online Examination & Result Management System',
      desc: 'Java EE web application for managing student exams and results using JSP/Servlets and MVC architecture.',
      tech: 'Java EE, JSP, Servlets, MySQL',
      link: '#'
    },
    {
      title: 'SmartClinic Mobile Application',
      desc: 'Mobile healthcare solution — Lab Test Management Module for tracking and reporting tests.',
      tech: 'Android / Flutter (prototype)',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl text-white font-semibold">Projects</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
