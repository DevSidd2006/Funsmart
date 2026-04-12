import { Hero } from '../components/sections/Hero'
import { StatsRow } from '../components/sections/StatsRow'
import { Comparison } from '../components/sections/Comparison'
import { HowItWorks } from '../components/sections/HowItWorks'
import { ProgramsOverview } from '../components/sections/FeaturedActivities' 
import { RealMoments } from '../components/sections/RealMoments'
import { Testimonials } from '../components/sections/Testimonials'
import { LatestInsights } from '../components/sections/LatestInsights'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Footer } from '../components/sections/Footer'

import { client } from '../sanity/lib/client'
import { heroQuery, faqsQuery, testimonialsQuery, programsQuery, galleryQuery } from '../sanity/lib/queries'

export default async function HomePage() {
  // Fetch data in parallel
  const [hero, faqs, testimonials, programs, gallery] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(faqsQuery),
    client.fetch(testimonialsQuery),
    client.fetch(programsQuery),
    client.fetch(galleryQuery),
  ])


  return (
    <main className="w-full">
      <Hero data={hero} />
      <StatsRow />

      <Comparison />
      <HowItWorks />
      <ProgramsOverview data={programs} />
      <RealMoments data={gallery} />
      <Testimonials data={testimonials} />
      <LatestInsights />
      <FinalCTA />
      <Footer />
    </main>
  )
}

