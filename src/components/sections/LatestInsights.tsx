import { Calendar, LayoutGrid, Presentation, Users, Sparkles } from 'lucide-react'

const eventCapabilities = [
  {
    icon: LayoutGrid,
    title: 'Set up the event',
    desc: 'They build the space — arrange, prepare, organise.',
  },
  {
    icon: Presentation,
    title: 'Run a stall or exhibit',
    desc: 'They present their own work to the public.',
  },
  {
    icon: Users,
    title: 'Guide visitors',
    desc: 'They explain, demonstrate, answer questions.',
  },
  {
    icon: Sparkles,
    title: 'Interact with scientists',
    desc: 'Ask Questions, discuss their work and understand real-world applications.',
  },
]

export function LatestInsights() {
  return (
    <section id="edu-events" className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-4 leading-tight">
            Year-long students don't just attend events. <span className="text-accent-teal">They run them.</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Priority access to real edu events — scientists, industry experts, researchers. And children aren't just in the audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventCapabilities.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group p-8 rounded-2xl border border-neutral-100 bg-neutral-50 transition-all duration-300 hover:bg-[#1E2A44] hover:text-white hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:bg-accent-teal shadow-sm transition-colors">
                  <Icon size={24} className="text-[#1E2A44] group-hover:text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-accent-surface border border-accent-teal/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow">
              <p className="text-lg text-primary-500 font-medium mb-2 italic">
                "Not a one-time talk — repeated exposure to real experts over time."
              </p>
              <p className="text-sm text-neutral-500 max-w-2xl">
                <strong className="text-primary-500">Why it matters:</strong> Real responsibility. Real audiences. Real experience — ahead of when most children encounter any of it in life.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="h-1 w-24 bg-accent-teal/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
