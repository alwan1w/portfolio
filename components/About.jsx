'use client'
import { Code, Database, Headphones, Monitor } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Laravel, React, Next.js'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'MySQL, Data Administration'
    },
    {
      icon: Monitor,
      title: 'IT Support',
      description: 'Computer User Support'
    },
    {
      icon: Headphones,
      title: 'Communication',
      description: 'Team Collaboration'
    }
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Left Side - ID Card Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute transition duration-1000 opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur group-hover:opacity-75"></div>
              <div className="relative bg-[#0f0f0f] border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
                
                {/* Full Photo */}
                <div className="relative w-full overflow-hidden h-96">
                  <img 
                    src="/images/alwan.jpg" 
                    alt="Alwan Fauzi" 
                    className="object-cover object-top w-full h-full"
                  />
                  
                  {/* Overlay gradient bawah */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
                  
                  {/* Badge ACTIVE */}
                  <div className="absolute px-3 py-1 font-mono text-xs border rounded-full top-4 right-4 bg-emerald-500/20 backdrop-blur-sm border-emerald-500 text-emerald-400">
                    ● ACTIVE
                  </div>

                  {/* Info di bawah foto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-1 text-2xl font-bold text-white">Alwan Fauzi W.I.</h3>
                    <p className="mb-3 font-mono text-sm text-emerald-400">IT Professional</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 font-mono text-xs border rounded-full bg-emerald-500/20 border-emerald-500/50 text-emerald-400">
                        Web Developer
                      </span>
                      <span className="px-3 py-1 font-mono text-xs border rounded-full bg-cyan-500/20 border-cyan-500/50 text-cyan-400">
                        IT Support
                      </span>
                      <span className="px-3 py-1 font-mono text-xs text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/50">
                        Laravel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats Bar bawah */}
                <div className="grid grid-cols-3 border-t border-gray-800 divide-x divide-gray-800">
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">3.75</p>
                    <p className="mt-1 font-mono text-xs text-gray-500">GPA</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">10+</p>
                    <p className="mt-1 font-mono text-xs text-gray-500">Projects</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">2+</p>
                    <p className="mt-1 font-mono text-xs text-gray-500">Certs</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-6">
              <span className="font-mono text-sm text-emerald-400">{' About Me'}</span>
              <h2 className="mt-2 text-5xl font-bold">
                <span className="text-white">Know More</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">About Me</span>
              </h2>
            </div>

            <div className="space-y-4 leading-relaxed text-gray-400">
              <p>
                Lulusan <span className="font-semibold text-emerald-400">Teknologi Informasi</span> dari Universitas Muhammadiyah Yogyakarta dengan <span className="font-semibold text-cyan-400">IPK 3.75</span>. Memiliki pengalaman dalam pengembangan web menggunakan Laravel dan WordPress.
              </p>

              <p>
                Berpengalaman magang di <span className="font-semibold text-emerald-400">CV. Tetha Development Institute</span> sebagai web developer, mengembangkan platform kursus online dan berkolaborasi dengan tim untuk menyelesaikan project tepat waktu.
              </p>

              <p>
                Memiliki keahlian dalam <span className="font-semibold text-cyan-400">komunikasi, manajemen waktu, dan kolaborasi tim</span>. Siap berkontribusi di posisi IT Support, Computer User Support, atau Web Developer.
              </p>

              <div className="flex items-center pt-4 space-x-2">
                <div className="w-12 h-1 rounded bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                <span className="font-mono text-sm text-emerald-400">Ready to Work</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 transition-all border border-gray-800 cursor-pointer group bg-gray-900/50 rounded-xl hover:border-emerald-500 hover:bg-gray-900"
                >
                  <item.icon className="w-8 h-8 mb-3 transition-transform text-emerald-400 group-hover:scale-110" />
                  <h3 className="mb-1 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="font-mono text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}