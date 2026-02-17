'use client'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Ternity Premium - Digital Asset Store',
      description:
        'Automated marketplace for premium subscriptions (Netflix, Spotify, etc). Built with Laravel and Tailwind CSS with real-time payment processing via Tripay.',
      tags: ['Laravel', 'Tailwind CSS', 'Tripay Gateway', 'MySQL', 'SEO'],
      type: 'Full Stack',
      image: '/images/ternity.png',
      github: 'https://github.com/alwan1w/TernityPrem',
      demo: 'https://ternitypremium.web.id/'
    },
    {
      title: 'Smart Attendance & Leave Management',
      description:
        'Sistem manajemen absensi dan cuti karyawan berbasis web dengan GPS tracking, foto verifikasi real-time, dan approval workflow otomatis.',
      tags: ['Laravel', 'Livewire', 'TailwindCSS', 'Google Maps API', 'PWA'],
      type: 'Web Development',
      image: '/images/project2.png',
      github: 'https://github.com/alwan1w/SmartPresensi',
      demo: '#'
    },
    {
      title: 'JagoHub - Manajemen Tugas Mahasiswa',
      description:
        'Aplikasi manajemen tugas kuliah berbasis mobile dengan pengingat deadline otomatis dan integrasi kalender akademis.',
      tags: ['Figma', 'UI/UX Design', 'Mobile App', 'Prototyping'],
      type: 'UI/UX Design',
      image: '/images/jagohub.png',
      github: '#',
      demo: 'https://www.figma.com/design/fBC9bGWwnHVkUBJty9n6lQ/Technopreneurship?node-id=30-336&t=M6Vj6WnCnT83nlsQ-0'
    },
    {
      title: 'Portfolio Website',
      description:
        'Website portfolio modern dengan animasi interaktif, dark mode, dan coding vibe menggunakan Next.js dan Tailwind CSS.',
      tags: ['Next.js', 'Tailwind CSS', 'React'],
      type: 'Frontend',
      image: '/images/portfolio.png',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-emerald-400">
            {'// Portfolio'}
          </span>
          <h2 className="mt-2 mb-4 text-5xl font-bold">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="font-mono text-lg text-gray-400">
            Some of my recent works and contributions
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#0f0f0f] border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />

                {/* Fallback */}
                <div className="absolute inset-0 items-center justify-center hidden bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
                  <div className="text-center">
                    <div className="mb-2 font-mono text-4xl text-emerald-400/30">
                      {'</>'}
                    </div>
                    <p className="font-mono text-xs text-gray-600">
                      Tambahkan gambar project
                    </p>
                  </div>
                </div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-opacity opacity-0 bg-black/70 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center px-5 py-2 space-x-2 font-mono text-sm font-semibold text-white transition-all bg-gray-900 border border-gray-700 rounded-lg hover:border-emerald-500 hover:text-emerald-400"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center px-5 py-2 space-x-2 text-sm font-semibold text-black transition-all rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/50"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>

                {/* Type Badge */}
                <div className="absolute px-3 py-1 font-mono text-xs border rounded-full top-3 left-3 bg-black/70 border-emerald-500/50 text-emerald-400">
                  {project.type}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 font-mono text-xs text-gray-400 transition-colors bg-gray-900 border border-gray-800 rounded-lg hover:border-emerald-500 hover:text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/alwan1w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 space-x-2 font-semibold text-black transition-all rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
          >
            <Github size={20} />
            <span>View All on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  )
}
