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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FunSmartism Intelligence Center | Scientist-Inspired Thinking for Children Aged 8–16',
    template: '%s | FunSmartism',
  },
  description:
    'Inspired by how scientists solve problems, our RoboSTEM activities help parents understand how their child thinks, retries, and solves challenges.',
  keywords: [
    'thinking lab',
    'child observation',
    'scientist-inspired thinking',
    'future-ready skills',
    'RoboSTEM',
    'robotics for kids',
    'Pune',
  ],
  authors: [{ name: 'FunSmartism' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'FunSmartism Intelligence Center | The Thinking Lab',
    description: "We don't teach. We observe. A premium thinking lab for young minds aged 8-14. Robotics, STEM, and scientist-style thinking in Pune.",
    url: siteUrl,
    siteName: 'FunSmartism Intelligence Center',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FunSmartism Intelligence Center - The Thinking Lab, Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunSmartism Intelligence Center | The Thinking Lab',
    description: "We don't teach. We observe. A premium STEM thinking lab for children aged 8-16 in Pune.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

import { NavbarWrapper } from '@/components/ui/NavbarWrapper'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { SanityLive } from '@/sanity/lib/live'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#1E2A44" />
      </head>
      <body className="antialiased bg-accent-surface text-[#1A1A1A] font-sans selection:bg-[#2FB5A3]/10 selection:text-[#1E2A44]">
        <NavbarWrapper />

        <main className="min-h-screen">
          {children}
        </main>

        {isDraftMode && (
          <a 
            href="/api/disable-draft" 
            className="fixed bottom-4 right-4 bg-primary-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl hover:bg-primary-600 transition-colors z-[9999]"
          >
            Exit Preview Mode
          </a>
        )}
        <VisualEditing />
        <SanityLive />
      </body>
    </html>
  )
}
