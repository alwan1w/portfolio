"use client";
import { Code, Database, Server, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "PHP, Laravel, REST API",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MySQL, Eloquent ORM",
    },
    {
      icon: Server,
      title: "Deployment",
      description: "DomaiNesia, Vercel, Shared Hosting",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Agile Scrum, Teamwork",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Bagian Kiri - Teks Deskripsi */}
          <div className="relative z-20 flex flex-col justify-center h-full">
            <div className="mb-6">
              <span className="font-mono text-sm text-emerald-400">
                {"// Professional Summary"}
              </span>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">
                <span className="text-white">Know More</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                  About Me
                </span>
              </h2>
            </div>

            <div className="space-y-4 leading-relaxed text-gray-400 md:text-lg">
              <p>
                I am a Fresh Graduate Bachelor of Information Technology from{" "}
                <span className="font-semibold text-emerald-400">
                  Universitas Muhammadiyah Yogyakarta
                </span>{" "}
                graduating{" "}
                <span className="font-semibold text-cyan-400">Cum Laude</span>.
                I specialize in developing and deploying dynamic web
                applications.
              </p>

              <p>
                My technical expertise centers around{" "}
                <span className="font-semibold text-emerald-400">
                  Laravel, Filament, MySQL, and REST APIs
                </span>
                . I have hands-on experience building real-world systems,
                including a workforce management platform and an automated
                subscription marketplace integrated with payment gateways.
              </p>

              <p>
                Previously, I interned as a Web Developer at{" "}
                <span className="font-semibold text-cyan-400">
                  CV. Tetha Development Institute
                </span>
                , where I assisted in developing a Learning Management System. I
                am passionate about backend systems, solving business problems
                through technology, and collaborating within Agile Scrum teams.
              </p>

              <div className="flex items-center pt-6 space-x-3">
                <div className="w-12 h-1 rounded bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                <span className="font-mono text-sm font-semibold tracking-wider uppercase text-emerald-400">
                  Ready for Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Bagian Kanan - Stats & Highlights */}
          <div className="relative z-20 flex flex-col justify-center h-full space-y-8">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 bg-[#0f0f0f] border border-gray-800 divide-x divide-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 text-center transition-colors hover:bg-gray-800/50">
                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                  3.75
                </p>
                <p className="mt-2 font-mono text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  GPA (4.00)
                </p>
              </div>
              <div className="p-6 text-center transition-colors hover:bg-gray-800/50">
                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                  2+
                </p>
                <p className="mt-2 font-mono text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  Major Systems Built
                </p>
              </div>
              <div className="p-6 text-center transition-colors hover:bg-gray-800/50">
                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                  3+
                </p>
                <p className="mt-2 font-mono text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  Certifications
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-5 transition-all border border-gray-800 cursor-pointer group bg-gray-900/50 rounded-2xl hover:border-emerald-500 hover:bg-gray-900 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 transition-colors bg-gray-800 rounded-lg group-hover:bg-emerald-500/10">
                      <item.icon className="w-6 h-6 transition-transform text-emerald-400 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
