import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from '../components/sections/Hero'
import { TheRealProblem } from '../components/sections/TheRealProblem'
import { WhatStudentsDo } from '../components/sections/WhatStudentsDo'
import { EduEvents } from '../components/sections/EduEvents'
import { SessionStructure } from '../components/sections/SessionStructure'
import { ObservationUSP } from '../components/sections/ObservationUSP'

const ProgramsSlider = dynamic(() => import('../components/sections/ProgramsSlider').then((mod) => mod.ProgramsSlider))
const Outcomes = dynamic(() => import('../components/sections/Outcomes').then((mod) => mod.Outcomes))
const ThinkingReset = dynamic(() => import('../components/sections/ThinkingReset').then((mod) => mod.ThinkingReset))
const OneDayChallenge = dynamic(() => import('../components/sections/OneDayChallenge').then((mod) => mod.OneDayChallenge))
const TestimonialsSlider = dynamic(() => import('../components/sections/TestimonialsSlider').then((mod) => mod.TestimonialsSlider))
const FinalCTA = dynamic(() => import('../components/sections/FinalCTA').then((mod) => mod.FinalCTA))
const GalleryTeaser = dynamic(() => import('../components/sections/GalleryTeaser').then((mod) => mod.GalleryTeaser))

import { testimonials } from '../data/testimonials'
import { teaserItems, galleryItems } from '../data/gallery'

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


      {/* Section 05 — HOW SESSIONS WORK */}
      <SessionStructure />

      {/* Section 06 — OBSERVATION USP */}
      <ObservationUSP />

      {/* Section 07 — YEAR-LONG THEMES */}
      <ProgramsSlider />

      {/* Section 08 — OUTCOMES */}
      <Outcomes />

      {/* Section 09 — 10-DAY THINKING RESET WORKSHOP */}
      <ThinkingReset />

      {/* Section 10 — 1-DAY STEM CHALLENGE */}
      <OneDayChallenge />

      {/* Section 11 — PARENT VOICES */}
      <TestimonialsSlider />

      {/* Section 12 — CLOSING CTA */}
      <FinalCTA />

      {/* Section 13 — GALLERY TEASER */}
      <GalleryTeaser items={teaserItems} />
    </main>
  )
}
