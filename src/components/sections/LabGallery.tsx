import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function getGalleryImageSrc(image: unknown): string {
  if (typeof image === 'string') {
    return image
  }

  return '/images/lab-observation.png'
}

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
            <p className="text-lg text-neutral-600 leading-relaxed">
              Every session reveals a different way of approaching the unknown. Here is a glimpse into the process of discovery from our Thinking Lab.
            </p>
          </div>
          <Link href="/gallery" className="group flex items-center gap-3 text-accent-teal font-bold uppercase text-xs tracking-widest hover:gap-5 transition-all">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {displayItems.map((item, i) => (
            <div 
              key={item._id || i} 
              className={`relative group overflow-hidden rounded-[2.5rem] border border-neutral-100 shadow-sm transition-all duration-700 ${
                i === 0 ? 'md:col-span-8 md:row-span-2' : 
                i === 1 ? 'md:col-span-4 md:row-span-1' :
                i === 2 ? 'md:col-span-4 md:row-span-2' :
                i === 3 ? 'md:col-span-4 md:row-span-1' :
                i === 4 ? 'md:col-span-4 md:row-span-1' :
                'md:col-span-12 md:row-span-1'
              }`}
            >
              {item.image ? (
                <Image 
                  src={getGalleryImageSrc(item.image)} 
                  alt={item.title} 
                  fill
                  className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" 
                />
              ) : (
                <div className="w-full h-full bg-neutral-50 flex items-center justify-center text-neutral-300 italic">No Image</div>
              )}
              
              {/* Premium Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0">
                 <span className="text-[11px] font-mono font-bold text-accent-teal tracking-[0.3em] mb-3 uppercase">
                   {item.tag || 'LAB_MOMENT'}
                 </span>
                 <h3 className="text-2xl font-serif font-bold text-white leading-tight mb-3">
                   {item.title}
                 </h3>
                 <p className="text-sm text-white/70 font-light italic leading-relaxed line-clamp-2">
                   {item.caption}
                 </p>
              </div>

              {/* Subtle persistent label for the 'Spark' image (i===2) as seen in user request */}
              {i === 2 && (
                <div className="absolute bottom-8 left-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-[8px] font-mono font-bold text-accent-teal/60 tracking-[0.4em] uppercase mb-1">COGNITIVE REVELATION</div>
                  <div className="text-sm font-serif font-bold text-white/80">The Spark of Curiosity</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
