import { Users, Microscope, Rss, ArrowRight } from 'lucide-react'

const experts = [
  "scientists",
  "researchers",
  "innovators",
  "engineers",
  "startup founders",
  "industry experts"
]

const orgs = [
  "ISRO", "DRDO", "Indian Institute of Tropical Meteorology", "IMD", "IISER", "and other innovation ecosystems"
]

const opportunities = [
  "interact directly with experts",
  "ask questions during live sessions",
  "showcase projects",
  "participate in event management",
  "experience real-world innovation culture beyond textbooks"
]

export function EduEvents() {
  return (
    <section className="py-24 bg-[#151F32] text-white">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Children Don’t Just Learn Concepts. <br className="hidden md:block" />
            <span className="text-accent-teal">They Interact With People Building The Future.</span>
          </h2>
          <p className="text-lg text-[#B7E3DD] max-w-3xl mx-auto">
            Throughout the academic year, FunSmartism hosts special edu-events where students interact with:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {experts.map((expert, i) => (
            <span key={i} className="bg-white/10 px-6 py-3 rounded-full text-white/90 font-medium">
              {expert}
            </span>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h3 className="text-xl text-[#B7E3DD] mb-6">Guests may include experts associated with organisations such as:</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {orgs.map((org, i) => (
              <span key={i} className="text-white/80 font-bold uppercase tracking-wider text-sm">
                {org}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center">
            Year-long students receive priority opportunities to:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opp, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl">
                <ArrowRight className="text-accent-teal mt-1 flex-shrink-0" size={20} />
                <span className="text-white/90 text-lg leading-snug">{opp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
