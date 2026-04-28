import { Hero } from '../components/sections/Hero'
import { TheProblem } from '../components/sections/TheProblem'
import { WhatHappens } from '../components/sections/WhatHappens'
import { HowSessionsWork } from '../components/sections/HowSessionsWork'
import { ObservationUSP } from '../components/sections/ObservationUSP'
import { EduEvents } from '../components/sections/EduEvents'
import { YearLongThemes } from '../components/sections/YearLongThemes'
import { Outcomes } from '../components/sections/Outcomes'
import { OneDaySTEM } from '../components/sections/OneDaySTEM'
import { ThinkingReset } from '../components/sections/ThinkingReset'
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { FinalCTA } from '../components/sections/FinalCTA'

import { testimonials } from '../data/testimonials'

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <TheProblem />
      <WhatHappens />
      <HowSessionsWork />
      <ObservationUSP />
      <EduEvents />
      <YearLongThemes />
      <Outcomes />
      <OneDaySTEM />
      <ThinkingReset />
      <TestimonialsSlider data={testimonials} />
      <FinalCTA />
    </main>
  )
}
