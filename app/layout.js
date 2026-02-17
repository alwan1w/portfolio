import './globals.css'

export const metadata = {
  title: 'Portfolio - Fullstack Developer',
  description: 'Portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}