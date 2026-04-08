import { Card } from '../ui/Card'

const stats = [
  { number: '500+', label: 'Parents Impacted' },
  { number: '2000+', label: 'Kids Observed' },
  { number: '15+', label: 'Years of Growth' },
  { number: '98%', label: 'Report Insight' },
]

export function StatsRow() {
  return (
    <section className="w-full bg-accent-surface border-y border-neutral-100">
      <div className="container-fluid py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-2">
                {stat.number}
              </p>
              <p className="text-mono text-accent-teal group-hover:text-primary-500 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
