'use client'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Web Development',
      skills: [
        { name: 'Laravel (PHP Framework)', level: 85 },
        { name: 'HTML / CSS', level: 90 },
        { name: 'WordPress (CMS)', level: 80 },
        { name: 'MySQL Database', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'Responsive Web Design', level: 85 },
      ]
    },
    {
      category: 'IT Support & Technical',
      skills: [
        { name: 'Troubleshooting Hardware/Software', level: 85 },
        { name: 'Instalasi Sistem Operasi Windows', level: 90 },
        { name: 'Instalasi Aplikasi', level: 90 },
        { name: 'Networking Dasar', level: 75 },
      ]
    },
    {
      category: 'Microsoft Office',
      skills: [
        { name: 'Microsoft Word', level: 90 },
        { name: 'Microsoft Excel', level: 85 },
        { name: 'Microsoft PowerPoint', level: 90 },
      ]
    },
    {
      category: 'Tools & Design',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Canva', level: 85 },
        { name: 'Visual Paradigm', level: 70 },
        { name: 'CapCut', level: 80 },
      ]
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Teamwork & Kolaborasi', level: 90 },
        { name: 'Komunikasi Efektif', level: 85 },
        { name: 'Manajemen Waktu', level: 90 },
        { name: 'Attention to Detail', level: 85 },
        { name: 'Cepat Belajar', level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-[#0f0f0f] relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-emerald-400"> My Skills</span>
          <h2 className="mt-2 mb-4 text-5xl font-bold">
            <span className="text-white">Technical </span>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Expertise</span>
          </h2>
          <p className="font-mono text-lg text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">
                  {category.category}
                </h3>
                <div className="w-8 h-1 rounded bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs font-medium text-gray-300">{skill.name}</span>
                      <span className="font-mono text-xs font-bold text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="relative w-full h-2 overflow-hidden bg-gray-900 rounded-full">
                      <div 
                        className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        style={{ width: `${skill.level}%` }}
                      />
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full opacity-50 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-sm"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Certifications */}
        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
            <h3 className="mb-6 font-mono text-xl font-bold text-white">Languages</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-gray-300">Bahasa Indonesia</span>
                <span className="px-3 py-1 font-mono text-xs border rounded-full bg-emerald-500/20 border-emerald-500 text-emerald-400">Native / Aktif</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-gray-300">English</span>
                <span className="px-3 py-1 font-mono text-xs border rounded-full bg-cyan-500/20 border-cyan-500 text-cyan-400">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <h3 className="mb-6 font-mono text-xl font-bold text-white">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 mt-1 rounded-full bg-emerald-400 shrink-0"></div>
                <div>
                  <p className="font-mono text-sm text-white">BNSP Certified Web Developer</p>
                  <p className="font-mono text-xs text-gray-500">14 Februari 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 mt-1 rounded-full bg-cyan-400 shrink-0"></div>
                <div>
                  <p className="font-mono text-sm text-white">Sertifikat Deployment Perangkat Lunak</p>
                  <p className="font-mono text-xs text-gray-500">17 Juni 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 mt-1 bg-blue-400 rounded-full shrink-0"></div>
                <div>
                  <p className="font-mono text-sm text-white">Peserta Terbaik Capstone Expo 2025</p>
                  <p className="font-mono text-xs text-gray-500">Universitas Muhammadiyah Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}