import { CheckCircle2 } from 'lucide-react'

export function Outcomes() {
  const outcomes = [
    'More independent while solving problems',
    'Less afraid of making mistakes',
    'More curious about how things work',
    'More willing to retry difficult tasks',
    'More confident in unfamiliar situations',
  ]

  return (
    <section className="py-20 bg-accent-surface overflow-hidden">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6">
            What Parents Often Notice Over Time
          </h2>
          <p className="text-xl text-neutral-600 font-light mt-4 italic">Parents often notice children becoming:</p>
          <div className="w-24 h-1 bg-accent-teal mx-auto opacity-30 mt-8" />
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-center gap-6 bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-neutral-100 group hover:border-accent-teal/30 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all duration-300">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-xl text-neutral-700 font-medium font-serif italic leading-relaxed">
                {outcome}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
