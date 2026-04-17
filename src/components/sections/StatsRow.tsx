import { Card } from '../ui/Card'

const stats = [
  { number: '500+', label: 'Parents Impacted', color: 'text-accent-teal' },
  { number: '2000+', label: 'Kids Observed', color: 'text-[#FF6B6B]' },
  { number: '15+', label: 'Years of Growth', color: 'text-[#4D96FF]' },
  { number: '98%', label: 'Report Insight', color: 'text-[#6BCB77]' },
]

export function StatsRow() {
  return (
    <section className="w-full bg-accent-surface border-y border-neutral-100">
      <div className="container-fluid py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className={`text-3xl md:text-5xl font-serif font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </p>
              <p className="text-mono text-neutral-400 group-hover:text-primary-500 transition-colors uppercase tracking-widest text-[10px] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
