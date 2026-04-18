import { Counter } from '../ui/Counter'

export function StatsRow({ data }: { data?: any }) {
  const stats = data?.stats?.length > 0 
    ? data.stats 
    : [
        { number: '500+', label: 'Parents Impacted', color: 'text-accent-teal' },
        { number: '2000+', label: 'Kids Observed', color: 'text-[#FF6B6B]' },
        { number: '15+', label: 'Years of Growth', color: 'text-[#4D96FF]' },
        { number: '98%', label: 'Report Insight', color: 'text-[#6BCB77]' },
      ]

  return (
    <section className="w-full bg-accent-surface border-y border-neutral-100">
      <div className="container-fluid py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat: any) => (
            <div key={stat.label} className="text-center group">
              <Counter 
                value={stat.number} 
                className={`text-3xl md:text-5xl font-serif font-bold mb-2 block ${stat.color}`} 
              />
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
