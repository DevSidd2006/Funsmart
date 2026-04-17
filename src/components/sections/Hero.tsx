import Image from 'next/image'
import { Button } from '../ui/Button'
import { Beaker, Atom, Settings, Lightbulb, Cpu, Microscope, Rocket, Binary, Check } from 'lucide-react'
import { JoinCommunity } from '../ui/JoinCommunity'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'

export function Hero({ data }: { data?: any }) {
  const headline = data?.headline || "Where children build scientist-inspired future-ready thinking."
  const subheadline = data?.subheadline || "And parents learn when to step in—and when to step back."
  const subline = data?.subline || "Hands-on RoboSTEM challenges and scientist interaction sessions help children grow confidence beyond marks, while our live observations help parents support thinking without over-helping."
  const microCopy = data?.microCopy || "Not a tuition class. Not a coaching. Scientist-inspired problem-solving with real parent guidance."
  const ctaText = data?.ctaText || "Schedule a visit →"

  const heroImage = data?.image 
    ? urlForImage(data.image).width(800).height(1000).url() 
    : "/images/hero-thinking.png"

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-[#1E2A44] overflow-hidden pt-24 pb-16 text-white">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-teal text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
              For children aged 8–16 in Pune
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white mb-3 leading-[1.1] text-balanced">
               {headline}
               <span className="block text-3xl md:text-4xl lg:text-4xl text-accent-teal mt-2 opacity-90 font-medium">
                 {subheadline}
               </span>
            </h1>

            <p className="text-lg md:text-xl text-[#B7E3DD] mb-6 max-w-2xl leading-relaxed font-light">
              {subline}
            </p>
            
            <p className="text-sm text-white/80 mb-10 max-w-xl italic border-l-2 border-accent-teal/30 pl-4 py-1">
              {microCopy}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 items-center mb-16">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="px-10 py-5 text-base shadow-2xl shadow-accent-teal/20 bg-accent-teal hover:bg-[#28A392] text-white border-none w-full"
                >
                  {ctaText}
                </Button>
              </Link>
              <JoinCommunity />
            </div>

            {/* Trust Strip */}
            <div className="border-t border-white/10 pt-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  'Hands-on Builds',
                  'Scientist Sessions',
                  'Parent Guidance',
                  'Real-World Thinking'
                ].map((item) => (
                  <div key={item} className="flex flex-col gap-2">
                    <Check className="text-accent-teal" size={18} />
                    <span className="text-[12px] font-bold text-white/80 uppercase tracking-wider leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-white/60 font-mono bg-white/5 w-fit px-4 py-2 rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                Free Parent Orientation · 30–45 minutes · 📍 Bibwewadi, Pune
              </div>
            </div>
          </div>

          {/* Right: Asymmetrical Image Container */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              
              {/* Glassmorphic Floating Icons */}
              <div className="absolute -top-10 -left-10 z-20 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl shadow-2xl animate-float text-accent-teal">
                <Beaker size={28} />
              </div>
              
              <div className="absolute top-[20%] -right-12 z-20 backdrop-blur-md bg-[#1E2A44]/60 border border-white/10 p-4 rounded-2xl shadow-2xl animate-float-delayed text-white">
                <Atom size={28} />
              </div>

              <div className="absolute -bottom-6 -left-12 z-20 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl shadow-2xl animate-float-slow text-white">
                <Settings size={28} className="animate-spin-slow" />
              </div>

              <div className="absolute bottom-[10%] -right-10 z-20 backdrop-blur-md bg-accent-teal/60 border border-white/20 p-4 rounded-2xl shadow-2xl animate-float text-white">
                <Lightbulb size={28} />
              </div>

              {/* Main Image with softened frame */}
              <div className="absolute inset-0 z-10 rounded-[40px] overflow-hidden shadow-huge bg-[#0F172A] border border-white/10 transform lg:translate-x-4 lg:-translate-y-4 transition-transform duration-1000 hover:translate-x-0 hover:-translate-y-0">
                <Image 
                  src={heroImage} 
                  alt={data?.headline || "Child discovery"} 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/40 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -inset-8 border border-white/5 rounded-[50px] z-0 pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-teal/10 rounded-full blur-[100px] z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
