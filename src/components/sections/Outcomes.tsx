import { CheckCircle2 } from 'lucide-react'

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

  return (
    <section className="py-16 bg-accent-surface overflow-hidden">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6">
            What Parents Often Notice Over Time
          </h2>
          <p className="text-xl text-neutral-600 font-light mt-4 italic">Parents often notice children becoming:</p>
          <div className="w-24 h-1 bg-accent-teal mx-auto opacity-30 mt-8" />
        </div>

        {/* Vertical card list */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-white px-8 py-5 rounded-2xl shadow-sm border border-neutral-100 group hover:border-accent-teal/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-accent-teal flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-lg text-neutral-700 font-medium font-serif italic leading-relaxed">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
