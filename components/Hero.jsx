"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Lanyard from "@/components/ui/lanyard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-24 pb-16 overflow-hidden bg-[#0a0a0a] sm:pt-28 lg:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="absolute left-0 w-56 h-56 rounded-full top-10 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-emerald-500/20 blur-3xl animate-pulse" />

      <div className="absolute right-0 w-56 h-56 rounded-full bottom-10 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-cyan-500/20 blur-3xl animate-pulse" />

      <div className="relative z-10 w-full px-5 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= IMAGE ================= */}
          <div
            className="
    order-1
    lg:order-2
    relative
    flex
    items-center
    justify-center
    w-full
    min-h-[500px]
    md:min-h-[650px]
    lg:-translate-y-20
    xl:-translate-y-24
    2xl:-translate-y-28
    transition-transform
  "
          >
            <Lanyard
              position={[0, 0, 12]}
              gravity={[0, -40, 0]}
              transparent
              frontImage="/images/alwan.jpeg"
            />
          </div>

          {/* ================= TEXT ================= */}
          <div className="order-2 w-full text-center lg:text-left lg:order-1">
            <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">I'm </span>
              <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">
                Alwan Fauzi Wahyu Ilham
              </span>
            </h1>

            <div className="mb-8 space-y-3">
              <div className="text-base text-gray-300 sm:text-lg lg:text-xl">
                <span className="font-semibold text-emerald-400">
                  IT Professional
                </span>{" "}
                based in Jepara, Indonesia
              </div>

              <div className="text-sm text-gray-400 sm:text-base lg:text-lg">
                Graduated from Universitas Muhammadiyah Yogyakarta
              </div>
            </div>

            {/* Running Text */}
            <div className="flex items-center h-12 mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
              <div className="flex px-6 space-x-8 text-base font-semibold text-gray-400 whitespace-nowrap animate-marquee sm:text-lg lg:text-xl">
                <span>Developer</span>
                <span>•</span>
                <span>IT Support</span>
                <span>•</span>
                <span>Computer User Support</span>
                <span>•</span>
                <span>Web Developer</span>
                <span>•</span>
                <span>Frontend Developer</span>
                <span>•</span>
                <span>Backend Developer</span>
                <span>•</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full px-8 py-3 font-semibold text-black transition-all rounded-xl sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Hire Me →
              </a>

              <a
                href="/CV-ALWAN-FAUZI-WAHYU-ILHAM.pdf"
                download
                className="w-full px-8 py-3 font-semibold transition-all border-2 rounded-xl sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
              >
                Download CV
              </a>
            </div>

            {/* Social */}
            <div className="flex justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/alwan1w"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-xl hover:border-emerald-500 hover:bg-emerald-500/10 hover:scale-110"
              >
                <Github size={20} className="text-gray-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/alwan-fauzi-wahyu-ilham-4626552b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-xl hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-110"
              >
                <Linkedin size={20} className="text-gray-300" />
              </a>

              <a
                href="mailto:alwanfa49@gmail.com"
                className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110"
              >
                <Mail size={20} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
