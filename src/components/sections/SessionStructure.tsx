import { Calendar, Monitor, Users } from 'lucide-react'

export function SessionStructure() {
  const cards = [
    {
      title: 'Weekend Format',
      description: '3-hour sessions conducted on weekends during the academic year.',
      icon: Calendar,
    },
    {
      title: '3 Offline Sessions Every Month',
      description: 'Hands-on building, RoboSTEM projects, experiments, challenges, testing, and discussions.',
      icon: Users,
    },
    {
      title: '1 Online STEM Challenge Session',
      description: 'Flexible challenge-based sessions designed to encourage independent thinking even outside the classroom.',
      icon: Monitor,
    },
  ]

  return (
    <section className="py-16 bg-accent-surface overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-8">
              Structured Like a Workshop. <br />
              <span className="text-accent-teal italic font-light">Not a Tuition Class.</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6 font-medium">
              FunSmartism follows a focused exploratory approach.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6 font-light">
              Projects per themes and problems are pre-planned, but children are encouraged to explore different ways of building, testing, and solving as per their ideas.
            </p>
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-4 opacity-70">For example:</p>
            <ul className="space-y-4 mb-8">
              {[
                'the project kit may be the same for everyone but how children experiment with them can vary',
                'students may combine ideas, redesign structures, or test different approaches',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-neutral-600 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 bg-white border-l-4 border-accent-teal shadow-sm rounded-r-2xl italic text-primary-500 font-medium">
              Children are guided— but not spoon-fed fixed answers.
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {cards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex items-start gap-6 group hover:shadow-md hover:border-accent-teal/30 transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0 group-hover:bg-accent-teal group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">{card.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
