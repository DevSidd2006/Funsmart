import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { Grid, Settings, Users, MessageSquare } from 'lucide-react'

export function EduEvents({ data }: { data?: any }) {
  const heading = data?.heading || "Year-long students don't just attend events."
  const subheading = data?.subheading || "They run them."
  const description = data?.description || "Priority access to real edu events — scientists, industry experts, researchers. And children aren't just in the audience."
  const whyItMatters = data?.whyItMatters || "Real responsibility. Real audiences. Real experience — ahead of when most children encounter any of it in life"

  const features = data?.features || [
    { label: 'Set up the event', icon: Settings },
    { label: 'Run a stall or exhibit', icon: Grid },
    { label: 'Guide visitors', icon: Users },
    { label: 'Interact with Experts', icon: MessageSquare },
  ]

  const gridImages = data?.gridImages?.map((img: any) => urlForImage(img).width(600).height(600).url()) || [
    '/images/edu-event-1.png',
    '/images/edu-event-2.png',
    '/images/edu-event-3.png',
    '/images/edu-event-4.png',
  ]

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-fluid">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-2 leading-tight">
            {heading}
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent-teal mb-8">
            {subheading}
          </h3>
          <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature: any, i: number) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 bg-accent-surface border border-neutral-100 rounded-2xl text-center group hover:bg-white hover:shadow-huge transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-accent-teal mb-4 shadow-sm group-hover:bg-accent-teal group-hover:text-white transition-colors duration-500">
                {feature.icon ? <feature.icon size={24} /> : <Grid size={24} />}
              </div>
              <span className="text-sm font-bold text-primary-500 tracking-wide">{feature.label || feature}</span>
            </div>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {gridImages.map((src: string, i: number) => (
            <div key={i} className="aspect-square relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group">
              <Image 
                src={src} 
                alt={`Edu Event ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="bg-[#B7E3DD]/20 border border-accent-teal/10 p-8 rounded-[32px] max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-primary-500 leading-relaxed text-center">
            <span className="font-bold text-accent-teal uppercase tracking-widest text-xs block mb-3">Why it matters:</span>
            {whyItMatters}
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-600 italic">Not a one-time talk — repeated exposure to real experts over time.</p>
        </div>
      </div>
    </section>
  )
}
