import Footer from '@/layout/Footer'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import Header from '../layout/Header'
import './globals.css'
import ThemeProvider from './theme-provider'

const roboto = Roboto({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omar Alachi | Senior Full Stack Developer',
  description: 'I am a Software Engineer & a Full Stack Developer with 6+ years of experience, Obsessed with Laravel, Node, React and Vue',
  keywords: "web developer, full stack developer, full stack web developer, frontend developer, front-end developer, backend developer back-end developer, vue js developer, react developer next js developer, node js developer",
  openGraph: {
    type: "website",
    url: "https://oalachi.com",
    title: "Omar Alachi | Senior Full Stack Developer",
    description: "I am a Software Engineer & a Full Stack Developer with 6+ years of experience, Obsessed with Laravel, Node, React and Vue",
    siteName: "Omar Alachi",
    images: [{
      url: "https://oalachi.com/og_image.jpg",
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 dark:bg-slate-800 ${roboto.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader />
          <Header />
          <main className='min-h-screen'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
