'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-16">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="absolute rounded-full top-20 left-20 w-96 h-96 bg-emerald-500/20 blur-3xl animate-pulse" />
      <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse" />

      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          <div>
            <h1 className="mb-6 text-6xl font-bold md:text-7xl">
              <span className="text-white">I'm </span>
              <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">
                Alwan Fauzi Wahyu Ilham
              </span>
            </h1>

            <div className="mb-8 space-y-3">
              <div className="text-xl text-gray-300">
                <span className="font-semibold text-emerald-400">IT Professional</span> based in Jepara, Indonesia
              </div>
              <div className="text-lg text-gray-400">
                Graduated from Universitas Muhammadiyah Yogyakarta
              </div>
            </div>

            <div className="flex items-center h-12 mb-8 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
              <div className="flex px-4 space-x-8 text-2xl font-bold text-gray-700 whitespace-nowrap animate-marquee">
                <span>Developer</span>
                <span>•</span>
                <span>IT Support</span>
                <span>•</span>
                <span>Computer User Support</span>
                <span>•</span>
                <span>Web Developer</span>
                <span>•</span>
                <span>Developer</span>
                <span>•</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="px-8 py-3 font-semibold text-black transition-all rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105">
                Hire Me →
              </a>
              <a href="/CV-ALWAN-FAUZI-WAHYU-ILHAM.pdf" download className="px-8 py-3 font-semibold transition-all border-2 rounded-lg border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                Download CV
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/alwan1w" target="_blank" rel="noopener noreferrer" className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500 hover:scale-110">
                <Github size={20} className="text-gray-400" />
              </a>
              <a href="https://www.linkedin.com/in/alwan-fauzi-wahyu-ilham-4626552b0/" target="_blank" rel="noopener noreferrer" className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 hover:scale-110">
                <Linkedin size={20} className="text-gray-400" />
              </a>
              <a href="mailto:alwanfa49@gmail.com" className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-lg hover:bg-blue-500/10 hover:border-blue-500 hover:scale-110">
                <Mail size={20} className="text-gray-400" />
              </a>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center">
              {/* Lanyard Tali */}
              <div className="z-10 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border-4 border-emerald-500 bg-[#0a0a0a]"></div>
                <div className="w-1 h-16 bg-gradient-to-b from-emerald-500 to-emerald-700"></div>
                <div className="w-16 h-3 mb-1 rounded-sm bg-emerald-600"></div>
              </div>

              {/* ID Card */}
              <div className="relative -mt-2 animate-float">
                <div className="p-1 shadow-2xl w-72 h-96 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl shadow-emerald-500/50">
                  <div className="w-full h-full bg-[#0f0f0f] rounded-3xl p-6 flex flex-col items-center justify-center border border-gray-800">
                    
                    <div className="flex items-center justify-center mb-4 overflow-hidden border-2 rounded-full w-28 h-28 border-emerald-500">
                      <img 
                        src="/images/alwan.jpeg" 
                        alt="Alwan Fauzi" 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    
                    <h3 className="mb-1 text-lg font-bold text-center text-white">Alwan Fauzi W.I.</h3>
                    <p className="mb-1 font-mono text-xs text-emerald-400">S1 Teknologi Informasi</p>
                    <p className="mb-4 text-xs text-center text-gray-500">Universitas Muhammadiyah Yogyakarta</p>
                    
                    <div className="w-full space-y-2 font-mono text-xs text-gray-400">
                      <div className="flex justify-between">
                        <span>IPK:</span>
                        <span className="text-emerald-400">3.75/4.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="text-cyan-400 text-[9px]">alwanfa49@gmail.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phone:</span>
                        <span className="text-blue-400">089-8069-1676</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute px-6 py-2 text-sm font-semibold text-black transform -translate-x-1/2 rounded-full shadow-lg -bottom-4 left-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 whitespace-nowrap">
                  IT Professional
                </div>
              </div>
            </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}