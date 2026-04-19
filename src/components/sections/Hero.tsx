import Image from 'next/image'
import { Button } from '../ui/Button'
import { Beaker, Atom, Settings, Lightbulb, Rocket, Binary, Check } from 'lucide-react'
import { JoinCommunity } from '../ui/JoinCommunity'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'

export function Hero({ data }: { data?: any }) {
  const headline = data?.headline || "Where children build scientist-inspired future-ready thinking."
  const subheadline = data?.subheadline || "And parents learn when to step in—and when to step back."
  const subline = data?.subline || "Hands-on RoboSTEM challenges and scientist interaction sessions help children grow confidence beyond marks, while our live observations help parents support thinking without over-helping."
  const microCopyLine1 = "Intelligence Center"
  const microCopyLine2 = "Not a tuition class. Not a coaching. Scientist-inspired problem-solving with real parent guidance."
  const ctaText = data?.ctaText || "Schedule a visit →"

  const heroImage = data?.image 
    ? urlForImage(data.image).width(1200).height(1500).url() 
    : "/images/hero-scientist.png"

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-[#1E2A44] overflow-hidden pt-52 pb-32 text-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 lab-grid opacity-[0.05] z-0" />
      
      {/* Background Floating Elements */}
      <div className="absolute top-[15%] left-[5%] text-[#2FB5A3]/10 animate-float-slow hidden lg:block">
        <Rocket size={100} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[10%] left-[20%] text-[#2FB5A3]/5 animate-float-delayed hidden lg:block">
        <Binary size={130} strokeWidth={0.5} />
      </div>

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            {/* Micro Copy replaced with headline directly or space */}
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.05] text-balanced">
               {headline}
               <span className="block text-3xl md:text-4xl lg:text-5xl text-accent-teal mt-4 opacity-95 font-medium italic">
                 {subheadline}
               </span>
            </h1>

            <p className="text-lg md:text-2xl text-[#B7E3DD] mb-8 max-w-2xl leading-relaxed font-light opacity-90">
              {subline}
            </p>
            
            <p className="text-sm text-white/60 mb-12 max-w-xl italic border-l-2 border-accent-teal/30 pl-6 py-2">
              {microCopyLine2}
            </p>
            

          </div>

          {/* Right: Asymmetrical Image Container */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[4/5] w-full max-w-lg ml-auto">
              
              {/* Glassmorphic Floating Icons */}
              <div className="absolute -top-12 -left-12 z-20 backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-3xl shadow-huge animate-float text-accent-teal">
                <Beaker size={32} />
              </div>
              
              <div className="absolute top-[20%] -right-16 z-20 backdrop-blur-xl bg-[#1E2A44]/60 border border-white/10 p-5 rounded-3xl shadow-huge animate-float-delayed text-white">
                <Atom size={32} />
              </div>

              <div className="absolute -bottom-10 -left-16 z-20 backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-3xl shadow-huge animate-float-slow text-white">
                <Settings size={32} className="animate-spin-slow" />
              </div>

              <div className="absolute bottom-[10%] -right-12 z-20 backdrop-blur-xl bg-accent-teal/60 border border-white/20 p-5 rounded-3xl shadow-huge animate-float text-white">
                <Lightbulb size={32} />
              </div>

              {/* Main Image with softened frame */}
              <div className="absolute inset-0 z-10 rounded-[60px] overflow-hidden shadow-huge bg-[#0F172A] border border-white/10 transform translate-x-4 -translate-y-4 transition-transform duration-1000 hover:translate-x-0 hover:-translate-y-0 group">
                <Image 
                  src={heroImage} 
                  alt={headline} 
                  fill
                  priority
                  sizes="50vw"
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-2000 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -inset-12 border border-white/5 rounded-[80px] z-0 pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent-teal/20 rounded-full blur-[120px] z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
