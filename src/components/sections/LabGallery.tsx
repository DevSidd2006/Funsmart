import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

export function LabGallery({ items }: { items: any[] }) {
  const displayItems = items?.slice(0, 6) || []

  return (
    <section className="section-spacing bg-white">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-6">
              Real moments from <br /><span className="text-accent-teal italic font-light">our lab.</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Every session reveals a different way of approaching the unknown. Here is a glimpse into the process of discovery from our Thinking Lab.
            </p>
          </div>
          <Link href="/gallery" className="group flex items-center gap-3 text-accent-teal font-bold uppercase text-xs tracking-widest hover:gap-5 transition-all">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          {displayItems.map((item, i) => (
            <div 
              key={item._id || i} 
              className={`relative group overflow-hidden rounded-[2rem] border border-neutral-100 shadow-sm transition-all duration-500 ${
                i === 0 ? 'md:col-span-8 md:row-span-2' : 
                i === 1 ? 'md:col-span-4 md:row-span-1' :
                i === 2 ? 'md:col-span-4 md:row-span-2' :
                'md:col-span-4'
              }`}
            >
              {item.image ? (
                <img 
                  src={urlForImage(item.image).width(800).height(800).url()} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s]" 
                />
              ) : (
                <div className="w-full h-full bg-neutral-50 flex items-center justify-center text-neutral-300 italic">No Image</div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <span className="text-mono text-accent-teal text-[10px] font-bold tracking-widest mb-2">{item.tag || 'LAB_MOMENT'}</span>
                 <h3 className="text-xl font-serif font-bold text-white leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
