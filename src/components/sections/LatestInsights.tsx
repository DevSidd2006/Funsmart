import { Button } from '../ui/Button'
import Link from 'next/link'

const insights = [
  { title: 'The Intelligence Gap', date: '02.04.26', image: 'image-blog-1' },
  { title: 'Space Science in Gurukul', date: '28.03.26', image: 'image-blog-2' },
]

export function LatestInsights() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <div className="text-mono text-primary-400 mb-4">[ LAB_JOURNAL ]</div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8 leading-tight">Latest <br />Insights</h2>
             <p className="text-neutral-600 mb-10 leading-relaxed">Thoughts from our Chief Thinking Officer on the future of skill-based child development.</p>
             <Link href="/blogs">
               <Button variant="secondary">Go to Blog</Button>
             </Link>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((ins) => (
               <div key={ins.title} className="group cursor-pointer">
                  <div className="aspect-square bg-accent-surface rounded-sm mb-6 flex items-center justify-center border border-primary-50 relative overflow-hidden">
                     <span className="font-mono text-neutral-400 text-xs">{ins.image}</span>
                     <div className="absolute inset-0 bg-primary-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-5" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-mono text-[10px] text-primary-400 font-bold">{ins.date}</span>
                     <div className="w-10 h-px bg-primary-100" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 group-hover:text-primary-500 transition-colors">{ins.title}</h3>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
