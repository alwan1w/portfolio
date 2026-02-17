'use client'
import { useState } from 'react'
import { X, Download, ExternalLink } from 'lucide-react'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      title: 'BNSP Certified Web Developer',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      date: '14 Februari 2025',
      credentialId: 'No. 62019 2513 6 0033443 2025',
      image: '/images/BNSP.jpeg',
      downloadLink: '/images/BNSP.jpeg',
      driveLink:
        'https://drive.google.com/drive/folders/1BjsqBA9kzgCg9RCZwhw0-ocLHJhwJSiG?usp=sharing',
      featured: true,
      color: 'emerald'
    },
    {
      title: 'Sertifikat Magang - E-Course Laravel',
      issuer: 'CV. Tetha Development Institute',
      date: '31 Mei 2024',
      credentialId: 'Hasil: Sangat Baik',
      image: '/images/Magang.jpeg',
      downloadLink: '/images/Magang.jpeg',
      driveLink:
        'https://drive.google.com/drive/folders/1BjsqBA9kzgCg9RCZwhw0-ocLHJhwJSiG?usp=sharing',
      featured: true,
      color: 'cyan'
    },
    {
      title: 'Peserta Terbaik Capstone Expo 2025',
      issuer: 'Universitas Muhammadiyah Yogyakarta',
      date: 'Januari 2025',
      credentialId: 'Prodi Teknologi Informasi - FT UMY',
      image: '/images/Capstone.jpg',
      downloadLink: '/images/Capstone.jpg',
      driveLink:
        'https://drive.google.com/drive/folders/1BjsqBA9kzgCg9RCZwhw0-ocLHJhwJSiG?usp=sharing',
      featured: true,
      color: 'yellow'
    },
    {
      title: 'Deployment Perangkat Lunak',
      issuer: 'PT. Teknologi Kode Indonesia (TLab)',
      date: 'Juni 2024',
      credentialId: 'No. MMXXIV-005062024-TLab',
      image: '/images/Deployment.jpg',
      downloadLink: '/images/Deployment.jpg',
      driveLink:
        'https://drive.google.com/drive/folders/1BjsqBA9kzgCg9RCZwhw0-ocLHJhwJSiG?usp=sharing',
      featured: false,
      color: 'blue'
    }
  ]

  const achievements = [
    { number: '4', label: 'Certificates' },
    { number: '3.75', label: 'GPA / IPK' },
    { number: '1', label: 'Year Experience' },
    { number: '2025', label: 'Fresh Graduate' }
  ]

  const colorMap = {
    emerald: 'border-emerald-500/50 hover:border-emerald-500',
    cyan: 'border-cyan-500/50 hover:border-cyan-500',
    yellow: 'border-yellow-500/50 hover:border-yellow-500',
    blue: 'border-blue-500/50 hover:border-blue-500'
  }

  const badgeColorMap = {
    emerald: 'bg-emerald-500/20 border-emerald-500 text-emerald-400',
    cyan: 'bg-cyan-500/20 border-cyan-500 text-cyan-400',
    yellow: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
    blue: 'bg-blue-500/20 border-blue-500 text-blue-400'
  }

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 bg-[#0f0f0f] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-emerald-400">
            {' Credentials'}
          </span>
          <h2 className="mt-2 mb-4 text-5xl font-bold">
            <span className="text-white">Certificates & </span>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              Achievements
            </span>
          </h2>
          <p className="font-mono text-lg text-gray-400">
            Professional certifications and accomplishments
          </p>
        </div>

        {/* Certificates */}
        <div className="grid gap-6 mb-12 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${colorMap[cert.color]}`}
            >
              {cert.featured && (
                <div className="absolute z-10 px-3 py-1 text-xs font-bold text-black rounded-full shadow-lg top-3 right-3 bg-gradient-to-r from-emerald-500 to-cyan-500">
                  FEATURED
                </div>
              )}

              {/* Image */}
              <div
                className="relative w-full overflow-hidden cursor-pointer h-52"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                  {cert.title}
                </h3>

                <p className="mb-2 font-mono text-sm text-gray-400">
                  {cert.issuer}
                </p>

                <span
                  className={`inline-block px-3 py-1 text-xs font-mono border rounded-full mb-3 ${badgeColorMap[cert.color]}`}
                >
                  {cert.date}
                </span>

                <p className="mb-4 font-mono text-xs text-gray-600">
                  {cert.credentialId}
                </p>

                <div className="flex gap-3">
                  <a
                    href={cert.downloadLink}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 font-mono text-xs font-semibold text-black transition-all rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>

                  <a
                    href={cert.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 font-mono text-xs font-semibold transition-all border rounded-lg border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                  >
                    <ExternalLink size={14} />
                    <span>Google Drive</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-emerald-500/50 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 group-hover:opacity-100 rounded-2xl" />
              <div className="relative">
                <h3 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                  {stat.number}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute p-2 transition-colors bg-gray-900 border border-gray-800 rounded-full top-4 right-4 hover:border-red-500"
            >
              <X size={20} className="text-gray-400" />
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[70vh] object-contain"
            />

            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold text-white">
                {selectedCert.title}
              </h3>
              <p className="mb-1 font-mono text-sm text-gray-400">
                {selectedCert.issuer}
              </p>
              <p className="mb-4 font-mono text-xs text-gray-600">
                {selectedCert.credentialId}
              </p>

              <div className="flex gap-3">
                <a
                  href={selectedCert.downloadLink}
                  download
                  className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 font-mono text-sm font-semibold text-black transition-all rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>

                <a
                  href={selectedCert.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 font-mono text-sm font-semibold transition-all border rounded-lg border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                >
                  <ExternalLink size={16} />
                  <span>Google Drive</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
