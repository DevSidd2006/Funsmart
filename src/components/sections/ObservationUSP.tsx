import { Eye, ShieldAlert } from 'lucide-react'

const observations = [
  "Does the child retry independently?",
  "Do they rush before observing?",
  "Do they experiment patiently or give up quickly?",
  "Do they wait for instructions at every step?",
  "Do they test different ideas confidently?"
]

export function ObservationUSP() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 mb-6 max-w-4xl mx-auto leading-tight">
            While Children Build and Solve, We Also Observe How They Approach Challenges.
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            During activities and challenges, facilitators naturally notice patterns that parents often observe at home too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-neutral-100 aspect-[4/3] bg-neutral-200">
            <div className="absolute inset-0 flex items-center justify-center text-white/50">
              <Eye size={64} className="text-accent-teal/40" />
            </div>
            {/* Can add Image here later if needed */}
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-6">For example:</h3>
            <ul className="space-y-4 mb-8">
              {observations.map((obs, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-accent-teal" />
                  </div>
                  <span className="text-lg text-neutral-700">{obs}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-neutral-600 italic">
              These observations are shared with parents through examples and discussions — helping parents support learning without over-helping.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-center gap-4 max-w-3xl mx-auto">
          <ShieldAlert className="text-amber-500 flex-shrink-0" size={24} />
          <p className="text-amber-800 font-medium m-0">
            FunSmartism is not a therapy, diagnostic, or psychological assessment center.
          </p>
        </div>
      </div>
    </section>
  )
}
