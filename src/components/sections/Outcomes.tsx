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
    <section className="py-24 bg-accent-surface overflow-hidden">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-6">
            What Parents Often Notice Over Time
          </h2>
          <div className="w-24 h-1 bg-accent-teal mx-auto opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 group hover:border-accent-teal/30 transition-colors">
              <div className="text-accent-teal group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-lg text-neutral-700 font-medium font-serif italic leading-relaxed">
                {outcome}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-400 font-mono uppercase tracking-[0.2em] font-bold">
            Real growth happens through repeated exposure to challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
