import { Hero } from '../components/sections/Hero'
import { TrustStrip } from '../components/sections/TrustStrip'
import { WhatMakesDifferent } from '../components/sections/Comparison'
import { HowItWorks } from '../components/sections/HowItWorks'
import { LabGallery } from '../components/sections/LabGallery'
import { EduEvents } from '../components/sections/EduEvents'
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { FinalCTA } from '../components/sections/FinalCTA'

import { testimonials } from '../data/testimonials'
import { galleryItems } from '../data/gallery'

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Section 01 — HERO */}
      <Hero />

      <TrustStrip />

      {/* Section 02 — WHAT MAKES THIS DIFFERENT */}
      <WhatMakesDifferent />

      {/* Section 03 — YOUR CHILD'S LEARNING JOURNEY */}
      <HowItWorks />

      {/* Section 04 — EDU EVENTS */}
      <EduEvents />

      {/* Section 05 — PARENT VOICES */}
      <TestimonialsSlider data={testimonials} />

      {/* Section 06 — CLOSING CTA */}
      <FinalCTA />

      {/* Lab Gallery Section */}
      <LabGallery items={galleryItems} />
    </main>
  )
}


