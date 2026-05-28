import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from '../components/sections/Hero'
import { TheRealProblem } from '../components/sections/TheRealProblem'
import { WhatStudentsDo } from '../components/sections/WhatStudentsDo'
import { EduEvents } from '../components/sections/EduEvents'



const ThemesList = dynamic(() => import('../components/sections/ThemesList').then((mod) => mod.ThemesList))
const InspirationSection = dynamic(() => import('../components/sections/InspirationSection').then((mod) => mod.InspirationSection))
const Programs = dynamic(() => import('../components/sections/Programs').then((mod) => mod.Programs))
const Outcomes = dynamic(() => import('../components/sections/Outcomes').then((mod) => mod.Outcomes))
const TestimonialsSlider = dynamic(() => import('../components/sections/TestimonialsSlider').then((mod) => mod.TestimonialsSlider))
const FinalCTA = dynamic(() => import('../components/sections/FinalCTA').then((mod) => mod.FinalCTA))

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://funsmartism.in'

export const metadata: Metadata = {
  title: 'FunSmartism | Hands-On RoboSTEM Thinking Lab, Pune',
  description:
    'FunSmartism is a hands-on RoboSTEM thinking lab in Bibwewadi, Pune where children aged 8–15 build, experiment, and develop independent problem-solving skills — not rote learning.',
  keywords: [
    'FunSmartism',
    'RoboSTEM Pune',
    'STEM thinking lab',
    'hands-on learning Pune',
    'robotics for kids Pune',
    'children learning center Bibwewadi',
    'problem solving kids',
    'STEM education Pune',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'FunSmartism | Hands-On RoboSTEM Thinking Lab, Pune',
    description:
      'A hands-on RoboSTEM thinking lab in Pune where children build, experiment, and develop independent problem-solving skills.',
    url: siteUrl,
    siteName: 'FunSmartism',
    images: [
      { url: `${siteUrl}/og-image-real.jpg`, width: 1200, height: 630, alt: 'FunSmartism RoboSTEM Thinking Lab Pune' },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunSmartism | Hands-On RoboSTEM Thinking Lab, Pune',
    description:
      'A hands-on RoboSTEM thinking lab in Pune where children build, experiment, and develop independent problem-solving skills.',
    images: [`${siteUrl}/og-image-real.jpg`],
  },
}

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Section 01 — HERO */}
      <Hero />

      {/* Section 02 — THE REAL PROBLEM */}
      <TheRealProblem />

      {/* Section 03 — WHAT STUDENTS DO */}
      <WhatStudentsDo />


      {/* Section 04 — SCIENTIST & EXPERT ECOSYSTEM */}
      <EduEvents />


      {/* Section Themes List */}
      <ThemesList />

      {/* Section 07.6 — INSPIRATION */}
      <InspirationSection />

      {/* Section 08 — OUTCOMES */}
      <Outcomes />

      {/* Section 07.5 — PROGRAMS OVERVIEW */}
      <Programs />

      {/* Section 11 — PARENT VOICES */}
      <TestimonialsSlider />

      {/* Section 12 — CLOSING CTA */}
      <FinalCTA />
    </main>
  )
}
