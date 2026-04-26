import Image from 'next/image'
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

  const gridImages = [
    '/images/edu-event-1.png',
    '/images/edu-event-2.png',
    '/images/edu-event-3.png',
    '/images/edu-event-4.png',
  ]

  return (
    <section className="py-32 bg-[#151F32] text-white overflow-hidden relative border-y border-accent-teal/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 lab-grid opacity-[0.04] pointer-events-none mix-blend-overlay" />
      {/* Animated glowing orbs for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
      
      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Year-long students don't <br /> just attend events. <br />
            <span className="text-accent-teal italic font-light opacity-90">They run them.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#B7E3DD] max-w-2xl leading-relaxed font-light italic">
            {description}
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative z-10">
          {features.map((feature: any, i: number) => (
            <div key={i} className="flex flex-col items-center justify-center p-10 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2.5rem] text-center group hover:bg-white/[0.08] hover:border-accent-teal/40 hover:-translate-y-3 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(47,181,163,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal mb-6 group-hover:bg-accent-teal group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(47,181,163,0.1)]">
                {feature.icon ? <feature.icon size={28} /> : <Grid size={28} />}
              </div>
              <span className="text-sm font-bold text-white/90 tracking-widest uppercase relative z-10 group-hover:text-white transition-colors">{feature.label || feature}</span>
            </div>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {gridImages.map((src: string, i: number) => (
            <div key={i} className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-huge border border-white/10 group">
              <Image 
                src={src} 
                alt={`Edu Event ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[3rem] max-w-5xl mx-auto shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-teal" />
          <div className="text-center relative z-10">
            <span className="font-bold text-accent-teal uppercase tracking-[0.4em] text-[12px] block mb-6">Why it matters</span>
            <p className="text-xl md:text-2xl text-white leading-tight font-serif italic">
              "{whyItMatters}"
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/40 font-mono text-[12px] uppercase tracking-[0.3em] font-bold">
            Not a one-time talk — repeated exposure to real experts over time.
          </p>
        </div>
      </div>
    </section>
  )
}
