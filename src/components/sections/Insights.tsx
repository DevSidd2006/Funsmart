import { Eye, TrendingUp, Sparkles } from 'lucide-react'

const insights = [
  {
    icon: Eye,
    title: 'Approach',
    description:
      'How does your child tackle unfamiliar problems? Do they ask questions first? Dive in? Plan?',
  },
  {
    icon: TrendingUp,
    title: 'Resilience',
    description:
      'What happens when they encounter difficulty? Do they retry, adapt, or give up? How long do they persist?',
  },
  {
    icon: Sparkles,
    title: 'Interests',
    description:
      'What does your child actually enjoy? Which problems engage her the most?',
  },
]

export function Insights() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-16 text-center leading-tight">
          You'll Understand
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div
                key={insight.title}
                className="text-center p-8 rounded-md hover:shadow-md transition-shadow"
              >
                <Icon size={56} className="text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
