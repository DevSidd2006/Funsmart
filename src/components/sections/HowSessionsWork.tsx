import { CheckCircle } from 'lucide-react'

const bulletPoints = [
  "the robot kit may be the same for everyone",
  "the sensors may be the same",
  "but how children experiment with them can vary",
  "students may combine ideas, redesign structures, or test different approaches"
]

export function HowSessionsWork() {
  return (
    <section className="section-spacing bg-neutral-50 border-t border-neutral-100">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-500 mb-6 leading-tight">
              Structured Like a Lab.<br /> Not a Tuition Class.
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              FunSmartism follows a controlled exploratory approach.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              Projects and themes are pre-planned, but children are encouraged to explore different ways of building, testing, and solving.
            </p>
            <h3 className="text-xl font-bold text-primary-500 mb-4">For example:</h3>
            <ul className="space-y-4 mb-8">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-accent-teal" size={20} />
                  </div>
                  <span className="text-neutral-700 leading-snug">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-medium text-primary-500 italic border-l-4 border-accent-teal pl-6 py-2">
              Children are guided throughout the process — but not spoon-fed fixed answers.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-primary-500 mb-2">3 Offline Sessions Every Month</h4>
              <p className="text-neutral-600">Hands-on building, RoboSTEM projects, experiments, challenges, testing, and discussions.</p>
            </div>
            <div className="bg-[#1E2A44] border-none rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow text-white">
              <h4 className="text-xl font-bold text-white mb-2">1 Online STEM Challenge Session</h4>
              <p className="text-white/80">Flexible challenge-based sessions designed to encourage independent thinking even outside the classroom.</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-primary-500 mb-2">Weekend Format</h4>
              <p className="text-neutral-600">3-hour sessions conducted across weekends during the academic year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
