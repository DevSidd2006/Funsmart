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
import { homePageQuery, settingsQuery, faqsQuery, testimonialsQuery, programsQuery, galleryQuery } from '../sanity/lib/queries'


export default async function HomePage() {
  // Fetch data with caching disabled for testing
  const [homeData, settings, faqs, testimonials, programs, gallery] = await Promise.all([
    client.fetch(homePageQuery, {}, { cache: 'no-store' }),
    client.fetch(settingsQuery, {}, { cache: 'no-store' }),
    client.fetch(faqsQuery, {}, { cache: 'no-store' }),
    client.fetch(testimonialsQuery, {}, { cache: 'no-store' }),
    client.fetch(programsQuery, {}, { cache: 'no-store' }),
    client.fetch(galleryQuery, {}, { cache: 'no-store' }),
  ])




  return (
    <main className="w-full">
      <Hero data={homeData?.hero} />
      <StatsRow />

      <Comparison data={homeData?.comparison} />
      <HowItWorks data={homeData?.methodology} />
      <ProgramsOverview data={programs} />
      <RealMoments data={gallery} />
      <Testimonials data={testimonials} />
      <LatestInsights />
      <FinalCTA />
      <Footer data={settings} />
    </main>

  )
}
