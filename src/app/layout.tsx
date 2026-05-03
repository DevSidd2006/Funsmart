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
    default: 'FunSmartism Intelligence Center',
    template: '%s | FunSmartism',
  },
  description:
    'A hands-on RoboSTEM thinking lab where children build projects, solve unfamiliar challenges, and learn through real-world experimentation.',
  keywords: [
    'thinking lab',
    'child observation',
    'RoboSTEM',
    'robotics for kids',
    'hands-on learning',
    'experimentation',
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
    title: 'FunSmartism Intelligence Center',
    description: "A hands-on RoboSTEM thinking lab where children build projects, solve unfamiliar challenges, and learn through real-world experimentation.",
    url: siteUrl,
    siteName: 'FunSmartism Intelligence Center',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FunSmartism Intelligence Center',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunSmartism Intelligence Center',
    description: "A hands-on RoboSTEM thinking lab where children build projects, solve unfamiliar challenges, and learn through real-world experimentation.",

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
import { Footer } from '@/components/sections/Footer'

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
      <body suppressHydrationWarning className="antialiased bg-accent-surface text-[#1A1A1A] font-sans selection:bg-[#2FB5A3]/10 selection:text-[#1E2A44]">
        <NavbarWrapper />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
