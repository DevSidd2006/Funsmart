import Image from 'next/image'
import Link from 'next/link'
import { Grid, Settings, Users, MessageSquare } from 'lucide-react'

export function EduEvents() {
  const people = ['Scientists', 'Researchers', 'Innovators', 'Engineers', 'Startup Founders', 'Industry Experts']
  const orgs = ['ISRO', 'DRDO', 'NIV', 'IMD', 'IISER', 'and other innovation ecosystems']

  const opportunities = [
    { label: 'Interact directly with experts', icon: MessageSquare },
    { label: 'Ask questions during Edu-events', icon: MessageSquare },
    { label: 'Showcase projects', icon: Grid },
    { label: 'Participate in event management', icon: Users },
  ]

  return (
    <section className="py-20 bg-[#151F32] text-white overflow-hidden relative border-y border-accent-teal/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 lab-grid opacity-[0.04] pointer-events-none mix-blend-overlay" />
      {/* Animated glowing orbs for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
      
      <div className="container-fluid relative z-10">
        <div className="max-w-5xl mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Children Don’t Just Learn Concepts. <br />
            <span className="text-accent-teal italic font-light opacity-90">They Interact with actual experts, people Building The Future.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#B7E3DD] max-w-2xl leading-relaxed font-light mb-12">
            Throughout the academic year, FunSmartism hosts special edu-events where students interact with:
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            {people.map((person, i) => (
              <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/90 text-sm font-medium tracking-wide">
                {person}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
            <div className="flex-1">
              <p className="text-lg text-[#B7E3DD] leading-relaxed font-light mb-6">
                Guests may include experts associated with organisations such as:
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {orgs.map((org, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-teal opacity-60" />
                    <span className="text-white/80 font-medium italic">{org}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-80 relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl border border-white/10">
              <Image 
                src="/images/iterative-thinking.png" 
                alt="Scientist interaction at FunSmartism" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <Link href="/gallery" className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-full text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                  View More Moments →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 rounded-[3rem] max-w-5xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-teal" />
          
          <h3 className="text-2xl font-serif font-bold text-white mb-10 text-center">
            Year-long students receive priority opportunities to:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {opportunities.map((opp, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.08] hover:border-accent-teal/40 transition-all duration-500 shadow-lg group/card">
                <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal mb-5 group-hover/card:bg-accent-teal group-hover/card:text-white transition-all duration-500">
                  <opp.icon size={24} />
                </div>
                <span className="text-sm font-bold text-white/90 leading-relaxed group-hover/card:text-white transition-colors">
                  {opp.label}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center pt-8 border-t border-white/10">
            <p className="text-xl text-accent-teal italic font-light">
              Experience real-world innovation culture beyond textbooks
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
