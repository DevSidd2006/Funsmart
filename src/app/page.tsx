import { Hero } from '../components/sections/Hero'
import { TrustStrip } from '../components/sections/TrustStrip'
import { WhatMakesDifferent } from '../components/sections/Comparison'
import { HowItWorks } from '../components/sections/HowItWorks'
import { LabGallery } from '../components/sections/LabGallery'
import { MidPageCTA } from '../components/sections/MidPageCTA'
import { EduEvents } from '../components/sections/EduEvents'
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { FinalCTA } from '../components/sections/FinalCTA'

import { sanityFetch } from '../sanity/lib/live'
import { homePageQuery, testimonialsQuery, galleryQuery } from '../sanity/lib/queries'

export default async function HomePage() {
  const [
    { data: homeData },
    { data: testimonials },
    { data: galleryItems }
  ] = await Promise.all([
    sanityFetch({ query: homePageQuery }),
    sanityFetch({ query: testimonialsQuery }),
    sanityFetch({ query: galleryQuery })
  ])

  return (
    <main className="w-full">
      {/* Section 01 — HERO */}
      <Hero data={homeData?.hero} />

      <TrustStrip />

      {/* Section 02 — WHAT MAKES THIS DIFFERENT */}
      <WhatMakesDifferent data={homeData?.different} />

      {/* Section 03 — YOUR CHILD'S LEARNING JOURNEY */}
      <HowItWorks data={homeData?.journey} />

      {/* Lab Gallery Section */}
      <LabGallery items={galleryItems} />

      {/* Section 04 — MID-PAGE CTA */}
      <MidPageCTA data={homeData?.midPageCTA} />

      {/* Section 05 — EDU EVENTS */}
      <EduEvents data={homeData?.eduEvents} />

      {/* Section 06 — PARENT VOICES */}
      <TestimonialsSlider data={testimonials} />

      {/* Section 07 — CLOSING CTA */}
      <FinalCTA data={homeData?.closingCTA} />
    </main>
  )
}
