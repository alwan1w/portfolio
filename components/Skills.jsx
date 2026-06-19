"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend & Database",
      skills: [
        "PHP",
        "Laravel",
        "RESTful APIs",
        "MySQL",
        "Eloquent ORM",
        "Database Design",
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        "HTML / CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Blade Templating",
        "Vue.js (Basic)",
        "Responsive Design",
      ],
    },
    {
      category: "Tools & Deployment",
      skills: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "DomaiNesia Hosting",
        "Vercel",
        "Shared Hosting",
      ],
    },
    {
      category: "IT Support & Admin",
      skills: [
        "Hardware & Software Troubleshooting",
        "OS & Application Installation",
        "Basic Networking",
        "Microsoft Office",
        "Canva / Figma",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Team Collaboration",
        "Effective Communication",
        "Time Management",
        "Attention to Detail",
        "Fast Learner",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 bg-[#0f0f0f] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-emerald-400">
            {"// My Skills"}
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-white">Technical </span>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              Expertise
            </span>
          </h2>
          <p className="max-w-2xl mx-auto font-mono text-base text-gray-400 md:text-lg">
            A comprehensive overview of my technical skills, tools, and core
            competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                  {category.category}
                </h3>
                <div className="w-8 h-1 rounded bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
              </div>

              {/* Perubahan: Mengganti Progress Bar menjadi Flex Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-900 border border-gray-800 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Certifications */}
        <div className="grid gap-6 mt-8 md:grid-cols-2">
          {/* Languages */}
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
            <h3 className="mb-6 font-mono text-xl font-bold text-white">
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-lg">
                <span className="font-semibold text-gray-300">
                  Bahasa Indonesia
                </span>
                <span className="px-3 py-1 font-mono text-xs border rounded-full bg-emerald-500/20 border-emerald-500 text-emerald-400">
                  Native
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-lg">
                <span className="font-semibold text-gray-300">English</span>
                <span className="px-3 py-1 font-mono text-xs border rounded-full bg-cyan-500/20 border-cyan-500 text-cyan-400">
                  Intermediate
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <h3 className="mb-6 font-mono text-xl font-bold text-white">
              Certifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-2 h-2 mt-2 transition-transform rounded-full bg-emerald-400 shrink-0 group-hover:scale-150"></div>
                <div>
                  <p className="font-semibold text-white">
                    BNSP Certified Web Developer
                  </p>
                  <p className="mt-1 font-mono text-xs text-emerald-400">
                    2025
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-2 h-2 mt-2 transition-transform rounded-full bg-cyan-400 shrink-0 group-hover:scale-150"></div>
                <div>
                  <p className="font-semibold text-white">
                    Full-Stack Web Development
                  </p>
                  <p className="mt-1 font-mono text-xs text-cyan-400">
                    CV. Tetha Development Institute • 2024
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-2 h-2 mt-2 transition-transform bg-blue-400 rounded-full shrink-0 group-hover:scale-150"></div>
                <div>
                  <p className="font-semibold text-white">
                    Certified Software Deployment
                  </p>
                  <p className="mt-1 font-mono text-xs text-blue-400">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
