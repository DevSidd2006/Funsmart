import { Eye, Sparkles, Handshake, LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

const defaultBeliefs = [
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

export function CoreBeliefs({ data }: { data?: any[] }) {
  const beliefs = data && data.length > 0
    ? data.map((b: any) => ({
        ...b,
        icon: (LucideIcons as any)[b.icon] || Sparkles
      }))
    : defaultBeliefs

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {beliefs.map((belief: any, i: number) => (
            <div key={i} className="group">
              <div className="w-16 h-16 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-8 group-hover:bg-accent-teal group-hover:text-white transition-all duration-500">
                <belief.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                {belief.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {belief.description || belief.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
