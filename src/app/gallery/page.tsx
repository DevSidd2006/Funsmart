import { Card } from '@/components/ui/Card'
import { ZoomIn } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    image: '/images/hero-child-discovery.png',
    title: 'Precision in Action',
    caption: 'A moment of deep focus. Exploring the mechanical feedback of an automated gear system to build logical foresight.',
    tag: 'LOGIC & ROBOTICS',
    span: 'md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    id: 2,
    image: '/images/lab-observation.png',
    title: 'The Art of Observation',
    caption: 'Facilitators quietly map cognitive approaches rather than intervening to correct solutions.',
    tag: 'LAB INSIGHT',
    span: 'md:col-span-4 md:row-span-1 aspect-square',
  },
  {
    id: 3,
    image: '/images/discovery-moment.png',
    title: 'The Spark of Curiosity',
    caption: 'Peer collaboration revealing unscripted discoveries in a high-engagement environment.',
    tag: 'COGNITIVE REVELATION',
    span: 'md:col-span-4 md:row-span-1 aspect-square',
  },
  {
    id: 4,
    image: '', // Placeholder to maintain grid
    title: 'Focus Validation',
    caption: 'Concentrated effort in translating abstract logic into tangible motion.',
    tag: 'AEROMODELING',
    span: 'md:col-span-4 md:row-span-1 aspect-square bg-[#F8F9FB]',
  },
  {
    id: 5,
    image: '', // Placeholder
    title: 'Pattern Recognition',
    caption: 'Deciphering complex configurations independently without a manual.',
    tag: 'SPATIAL REASONING',
    span: 'md:col-span-4 md:row-span-1 aspect-square bg-[#F8F9FB]',
  },
  {
    id: 6,
    image: '', // Placeholder
    title: 'Iterative Thinking',
    caption: 'Trial, error, reflection, and adjustment. The core of unscripted discovery.',
    tag: 'SCIENTIFIC METHOD',
    span: 'md:col-span-4 md:row-span-1 aspect-square bg-[#F8F9FB]',
  }
]

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="mb-20">
        <div className="container-fluid">
          <div className="max-w-2xl">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ LAB_MOMENTS ]</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1E2A44] leading-[1.1] mb-8">
              A gallery of <span className="text-[#2FB5A3] italic font-light">pure focus</span>.
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Explore authentic moments from our Thinking Lab. We capture the process of discovery, the focus of unscripted problem-solving, and the quiet joy of the "Aha!" moment.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section>
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
             {galleryItems.map((item) => (
               <div key={item.id} className={`relative group overflow-hidden rounded-lg shadow-sm border border-neutral-100 ${item.span}`}>
                  {item.image ? (
                    <img 
                       src={item.image} 
                       alt={item.title} 
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
                         <span className="text-mono text-[#2FB5A3] text-[10px] font-bold tracking-widest uppercase">{item.tag}</span>
                         <ZoomIn className="text-white/50" size={20} />
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
        </div>
      </section>
    </div>
  )
}
