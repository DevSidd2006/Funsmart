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

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <StatsRow />
      <Comparison />
      <HowItWorks />
      <ProgramsOverview />
      <RealMoments />
      <Testimonials />
      <LatestInsights />
      <FinalCTA />
      <Footer />
    </main>
  )
}
