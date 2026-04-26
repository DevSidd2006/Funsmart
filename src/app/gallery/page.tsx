import Image from 'next/image'
import { JoinCommunity } from '@/components/ui/JoinCommunity'
import { galleryItems } from '@/data/gallery'

export default function GalleryPage() {
  const displayItems = galleryItems

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="pt-40 pb-24 bg-accent-surface border-b border-neutral-100 relative overflow-hidden mb-20">
        <div className="absolute inset-0 lab-grid opacity-[0.03]" />
        <div className="container-fluid relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-500 leading-tight tracking-tight mb-8">
                A gallery of <br />
                <span className="text-accent-teal italic font-light">pure focus.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light">
                Explore authentic moments from our Thinking Lab. We capture the process of discovery, the focus of unscripted problem-solving, and the quiet joy of the "Aha!" moment.
              </p>
            </div>
            <div className="hidden lg:block pb-2">
              <JoinCommunity variant="solid" className="px-12 py-6 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section>
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
              {displayItems.map((item: any) => (
                <div key={item.id} className={`relative group overflow-hidden rounded-lg shadow-sm border border-neutral-100 ${item.span || 'md:col-span-4'}`}>
                  {item.image ? (
                    <Image 
                       src={item.image} 
                       alt={item.title} 
                       fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center border-dashed border-2 border-neutral-200">
                      <span className="text-mono text-neutral-300 text-xs mb-2">IMAGE_PLACEHOLDER</span>
                      <span className="text-sm text-neutral-400 font-medium">{item.title}</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1E2A44]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-start mb-4">
                         <span className="text-mono text-[#2FB5A3] text-[12px] font-bold tracking-widest uppercase">{item.tag}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Bottom CTA for Mobile or extra visibility */}
          <div className="mt-20 text-center md:hidden">
            <JoinCommunity variant="solid" className="w-full py-5" />
          </div>
        </div>
      </section>
    </div>
  )
}
