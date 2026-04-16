import { Hero } from '../components/sections/Hero'
import { FeatureStrip } from '../components/sections/FeatureStrip'
import { StatsRow } from '../components/sections/StatsRow'
import { TheProblem } from '../components/sections/TheProblem'
import { WhatMakesDifferent } from '../components/sections/Comparison'
import { HowItWorks } from '../components/sections/HowItWorks'
import { ProgramsSlider } from '../components/sections/ProgramsSlider'
import { ProgramsOverview } from '../components/sections/FeaturedActivities'
import { RealMoments } from '../components/sections/RealMoments'
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { LatestInsights } from '../components/sections/LatestInsights'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Footer } from '../components/sections/Footer'

import { client } from '../sanity/lib/client'
import { homePageQuery, settingsQuery, testimonialsQuery, programsQuery, galleryQuery } from '../sanity/lib/queries'


export default async function HomePage() {
  // Fetch data with caching disabled for testing
  const [homeData, settings, testimonials, programs, gallery] = await Promise.all([
    client.fetch(homePageQuery, {}, { cache: 'no-store' }),
    client.fetch(settingsQuery, {}, { cache: 'no-store' }),
    client.fetch(testimonialsQuery, {}, { cache: 'no-store' }),
    client.fetch(programsQuery, {}, { cache: 'no-store' }),
    client.fetch(galleryQuery, {}, { cache: 'no-store' }),
  ])

  return (
    <main className="w-full">
      {/* Hero with two CTAs */}
      <Hero data={homeData?.hero} />

      {/* Feature strip: Robotics · STEM Workshops · Edu Tours */}
      <FeatureStrip />

      {/* Quick stats */}
      <StatsRow />

      {/* The Problem — new section */}
      <TheProblem />

      {/* How It Works — step cards */}
      <HowItWorks data={homeData?.methodology} />

      {/* What Makes This Different — cards layout (replaces comparison table) */}
      <WhatMakesDifferent data={homeData?.comparison} />

      {/* Programs Themes Slider */}
      <ProgramsSlider />

      {/* Typical STEM Programs — program cards */}
      <ProgramsOverview data={programs} />

      {/* Edu Events Section */}
      <LatestInsights />

      {/* Real Session Moments gallery/slider */}
      <RealMoments data={gallery} />

      {/* Testimonials Slider */}
      <TestimonialsSlider data={testimonials} />

      {/* Closing CTA: Schedule Visit + Join Community */}
      <FinalCTA />

      <Footer data={settings} />
    </main>
  )
}
