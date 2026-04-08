import type { Metadata } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FunSmartism Intelligence Center | The Thinking Lab',
  description:
    "We don't teach. We observe. A premium thinking lab where children aged 8-14 explore unfamiliar problems and parents discover how they think.",
  keywords: [
    'thinking lab',
    'child observation',
    'cognitive habits',
    'premium education',
    'Pune',
  ],
  authors: [{ name: 'FunSmartism' }],
}

import { Navbar } from '@/components/ui/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#1E2A44" />
      </head>
      <body className="antialiased bg-accent-surface text-[#1A1A1A] font-sans selection:bg-[#2FB5A3]/10 selection:text-[#1E2A44]">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
