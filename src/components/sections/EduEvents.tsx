import { Grid, Users, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SectionReveal } from '../ui/SectionReveal'

export function EduEvents() {
  const people = ['Scientists', 'Researchers', 'Innovators', 'Engineers', 'Startup Founders', 'Industry Experts']
  const orgs = ['ISRO', 'DRDO', 'NIV', 'IMD', 'IISER', 'and other innovation ecosystems']

  const opportunities = [
    { label: 'Exclusive interaction before Edu-events', icon: MessageSquare },
    { label: 'Showcase projects', icon: Grid },
    { label: 'Participate in event management', icon: Users },
    { label: 'Experience real-world innovation culture beyond textbooks', icon: MessageSquare },
  ]

  return (
    <section className="py-20 bg-[#151F32] text-white overflow-hidden relative border-y border-accent-teal/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 lab-grid opacity-[0.04] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />

      <SectionReveal className="container-fluid relative z-10">
        <div className="max-w-5xl mx-auto mb-16 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden sm:block">
          <Image src="/images/gallery/teaser-7.jpg" fill alt="Children working on a STEM bridge" className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto mb-16 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Children Don't Just Learn Concepts. <br />
            <span className="text-accent-teal italic font-light opacity-90">They Interact with Actual Experts <br className="hidden md:block" /> Building The Future.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#B7E3DD] max-w-2xl leading-relaxed font-light mb-6">
            Throughout the academic year, FunSmartism hosts special edu-events where students interact with:
          </p>
          <Link href="/about" className="inline-block text-accent-teal hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-10">
            Learn more about how this shapes the FunSmartism approach →
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {people.map((person, i) => (
              <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/90 text-sm font-medium tracking-wide">
                {person}
              </span>
            ))}
          </div>

          <p className="text-lg text-[#B7E3DD] leading-relaxed font-light mb-6">
            Guests may include experts associated with organisations such as:
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-4 mb-16 max-w-4xl">
            {orgs.map((org, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-teal drop-shadow-[0_0_8px_rgba(47,181,163,0.8)]" />
                <span className="text-white font-bold text-base md:text-xl tracking-wide">{org}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 rounded-[3rem] max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-teal" />

          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10 text-center">
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

          <div className="mt-12 text-center pt-8 border-t border-white/10" />
        </div>
      </SectionReveal>
    </section>
  )
}
