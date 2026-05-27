import { CheckCircle2 } from 'lucide-react'
import { SectionReveal } from '../ui/SectionReveal'

export function Outcomes() {
  const outcomes = [
    'more independent while solving problems',
    'less afraid of making mistakes',
    'more curious about how things work',
    'more willing to retry difficult tasks',
    'more confident in unfamiliar situations',
    'more interested in building and experimenting at home',
    'more comfortable asking deeper questions',
  ]

  const OutcomeBlock = ({ outcome }: { outcome: string }) => (
    <div className="flex flex-col items-center text-center gap-4 bg-white px-6 py-8 rounded-3xl shadow-sm border border-neutral-100 group hover:border-accent-teal/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
      <div className="text-accent-teal w-14 h-14 bg-accent-teal/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent-teal/10 transition-all duration-300">
        <CheckCircle2 size={28} />
      </div>
      <p className="text-base md:text-lg text-primary-500 font-medium font-serif italic leading-relaxed">
        {outcome}
      </p>
    </div>
  )

  return (
    <section className="py-24 bg-accent-surface overflow-hidden relative">
      <div className="absolute inset-0 lab-grid opacity-30" />
      
      <SectionReveal className="container-fluid max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6">
            What Parents Often Notice Over Time
          </h2>
          <p className="text-xl text-neutral-600 font-light mt-4 italic">Parents often notice children becoming:</p>
          <div className="w-24 h-1 bg-accent-teal mx-auto opacity-30 mt-8" />
        </div>

        {/* Desktop Zig-Zag Grid */}
        <div className="hidden lg:flex flex-col gap-6 w-full">
          {/* Row 1: 4 blocks */}
          <div className="grid grid-cols-4 gap-6">
            {outcomes.slice(0, 4).map((outcome, i) => (
              <OutcomeBlock key={i} outcome={outcome} />
            ))}
          </div>
          {/* Row 2: 3 blocks centered perfectly in the gaps */}
          <div className="grid grid-cols-3 gap-6 w-[75%] mx-auto">
            {outcomes.slice(4, 7).map((outcome, i) => (
              <OutcomeBlock key={i + 4} outcome={outcome} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Fallback Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden max-w-3xl mx-auto">
          {outcomes.map((outcome, i) => (
            <OutcomeBlock key={i} outcome={outcome} />
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
