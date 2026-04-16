import { Eye, Sparkles, Handshake } from 'lucide-react'

const beliefs = [
  {
    icon: Eye,
    title: 'Curiosity before correctness',
    desc: 'We center every activity on asking better questions rather than teaching the “right” answer first.',
  },
  {
    icon: Sparkles,
    title: 'Thinking habits that stick',
    desc: 'Habit-building through challenge, reflection, and guided parent actions — not rote repetition.',
  },
  {
    icon: Handshake,
    title: 'Parents as thinking partners',
    desc: 'We coach parents on how to support independent exploration at home, without taking over the problem.',
  },
]

export function CoreBeliefs() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="text-mono text-accent-teal mb-4 uppercase tracking-widest">[ OUR BELIEFS ]</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            Three core beliefs that shape every session.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beliefs.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-accent-surface">
                <div className="w-14 h-14 rounded-3xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
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
