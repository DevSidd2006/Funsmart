import { CheckCircle } from 'lucide-react'

const outcomes = [
  "more independent while solving problems",
  "less afraid of making mistakes",
  "more curious about how things work",
  "more willing to retry difficult tasks",
  "more confident in unfamiliar situations",
  "more interested in building and experimenting at home",
  "more comfortable asking deeper questions"
]

export function Outcomes() {
  return (
    <section className="section-spacing bg-neutral-50 text-center">
      <div className="container-fluid max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
          What Parents Often Notice Over Time
        </h2>
        <p className="text-lg text-neutral-600 mb-12">Parents often notice children becoming:</p>
        
        <div className="bg-white border flex flex-col items-center border-neutral-200 rounded-[40px] p-8 md:p-12 shadow-xl text-left">
          <ul className="space-y-6 max-w-2xl w-full">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-accent-teal" size={18} />
                </div>
                <span className="text-lg md:text-xl text-neutral-700 font-medium leading-snug">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
