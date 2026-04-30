import { Hero } from '../components/sections/Hero'
import { TheRealProblem } from '../components/sections/TheRealProblem'
import { WhatStudentsDo } from '../components/sections/WhatStudentsDo'
import { EduEvents } from '../components/sections/EduEvents'
import { SessionStructure } from '../components/sections/SessionStructure'
import { ObservationUSP } from '../components/sections/ObservationUSP'
import { ProgramsSlider } from '../components/sections/ProgramsSlider'
import { Outcomes } from '../components/sections/Outcomes'
import { OneDayChallenge } from '../components/sections/OneDayChallenge'

import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { FinalCTA } from '../components/sections/FinalCTA'
import { LabGallery } from '../components/sections/LabGallery'
import { ThinkingReset } from '../components/sections/ThinkingReset'

import { testimonials } from '../data/testimonials'
import { galleryItems } from '../data/gallery'

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

      {/* Section 09 — 1-DAY STEM CHALLENGE */}
      <OneDayChallenge />

      {/* Section 10 — 10-DAY THINKING RESET WORKSHOP */}
      <ThinkingReset />

      {/* Section 11 — PARENT VOICES */}
      <TestimonialsSlider data={testimonials.filter((t) => ['5', '6', '7'].includes(t.id))} />

      {/* Section 12 — CLOSING CTA */}
      <FinalCTA />

      {/* Lab Gallery Section */}
      <LabGallery items={galleryItems} />
    </main>
  )
}


