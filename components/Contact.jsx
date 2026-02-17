'use client'
import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  CheckCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alwanfa49@gmail.com',
      link: 'mailto:alwanfa49@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '089-8069-1676',
      link: 'tel:+6289806916676'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jepara, Jawa Tengah',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      link: 'https://github.com/alwan1w',
      name: 'GitHub',
      color: 'hover:border-gray-500'
    },
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/alwan-fauzi-wahyu-ilham-4626552b0/',
      name: 'LinkedIn',
      color: 'hover:border-blue-500'
    },
    {
      icon: Instagram,
      link: 'https://instagram.com/alwanfa_',
      name: 'Instagram',
      color: 'hover:border-pink-500'
    }
  ]

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-emerald-400">
            {'// Get In Touch'}
          </span>
          <h2 className="mt-2 mb-4 text-5xl font-bold">
            <span className="text-white">Let's Work </span>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              Together
            </span>
          </h2>
          <p className="font-mono text-lg text-gray-400">
            Have a project in mind? Let's make it happen!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              Contact Information
            </h3>
            <div className="w-12 h-1 mb-6 rounded bg-gradient-to-r from-emerald-500 to-cyan-500" />

            <p className="mb-8 leading-relaxed text-gray-400">
              Open for opportunities in{' '}
              <span className="font-semibold text-emerald-400">
                Web Development
              </span>
              ,{' '}
              <span className="font-semibold text-cyan-400">
                IT Support
              </span>
              , and{' '}
              <span className="font-semibold text-blue-400">
                Computer User Support
              </span>{' '}
              positions.
            </p>

            {/* Contact Cards */}
            <div className="mb-8 space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center space-x-4 p-4 bg-[#0f0f0f] border border-gray-800 rounded-xl hover:border-emerald-500 transition-all"
                >
                  <div className="p-3 transition-all bg-gray-900 border border-gray-800 rounded-lg group-hover:border-emerald-500 group-hover:bg-emerald-500/10">
                    <info.icon size={20} className="text-emerald-400" />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-gray-500">
                      {info.label}
                    </p>
                    <p className="font-medium text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 font-mono text-lg font-semibold text-white">
                Connect With Me
              </h4>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`group p-4 bg-[#0f0f0f] border border-gray-800 rounded-xl transition-all hover:scale-110 ${social.color}`}
                  >
                    <social.icon
                      size={20}
                      className="text-gray-400 transition-colors group-hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 font-mono text-sm text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-mono text-sm text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 font-mono text-sm text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-mono text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-600"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={submitted}
                className="flex items-center justify-center w-full px-8 py-4 space-x-2 font-semibold text-black transition-all bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-8 mt-20 text-center border-t border-gray-800">
          <p className="font-mono text-sm text-gray-500">
            © 2025 Alwan Fauzi Wahyu Ilham. Built with
            <span className="text-emerald-400"> Next.js</span> &
            <span className="text-cyan-400"> Tailwind CSS</span>
          </p>
        </div>

      </div>
    </section>
  )
}
