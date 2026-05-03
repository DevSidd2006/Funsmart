import { Eye, Users, Sparkles, Handshake } from 'lucide-react'

const teamMembers = [
  {
    icon: Eye,
    title: 'Observation Leads',
    desc: 'They notice how each child explores, pauses, tests and chooses the next step — not only what they build.',
  },
  {
    icon: Users,
    title: 'Learning Guides',
    desc: 'They help students stay curious, ask better questions and treat every challenge as a thinking opportunity.',
  },
  {
    icon: Sparkles,
    title: 'Scientist Mentors',
    desc: 'They bring real-world thinking habits into the lab and help children connect ideas to experiments.',
  },
  {
    icon: Handshake,
    title: 'Parent Partners',
    desc: 'They coach families on how to support independent thinking at home, not just how to finish the task.',
  },
]

export function OurTeam() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            People who pay attention.
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            This is the team that watches how your child thinks, not only what they produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamMembers.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="group rounded-3xl border border-neutral-200 bg-accent-surface p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-3xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
