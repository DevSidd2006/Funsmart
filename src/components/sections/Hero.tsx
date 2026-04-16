import { Button } from '../ui/Button'
import { Beaker, Atom, Settings, Lightbulb, Cpu, Microscope, Rocket, Binary } from 'lucide-react'
import { JoinCommunity } from '../ui/JoinCommunity'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'

export function Hero({ data }: { data?: any }) {
  const headline = data?.headline || (
    <>
      Many capable children struggle{' '}
      <span className="text-white/70 font-light italic">in the wrong environment.</span>
    </>
  )
  const subline = data?.subline || 'Children build and solve hands-on STEM challenges inspired by how scientists think. We guide parent response in ways that support independent problem-solving beyond rote learning.'
  const supportText = data?.supportText || 'A RoboSTEM Thinking Lab where children build real things, face real challenges, and parents learn how to support independent thinking.'
  const ctaText = data?.ctaText || 'Schedule a Visit →'

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-[#1E2A44] overflow-hidden pt-24 pb-12 text-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white mb-6 leading-[1.1] text-balanced">
               {headline}
            </h1>

            <p className="text-base md:text-lg text-[#B7E3DD] mb-4 max-w-2xl leading-relaxed">
              {subline}
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
              {supportText}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Scientist-Style Problem Solving', 'Ages 8–16', 'Bibwewadi, Pune', 'Real Builds'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono border border-white/15 text-white/60 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
              <Link href="/schedule-visit">
                <Button
                  size="lg"
                  className="px-8 py-4 text-base shadow-xl shadow-[#2FB5A3]/20 bg-[#2FB5A3] hover:bg-[#28A392] text-white border-none w-full sm:w-auto"
                >
                  {ctaText}
                </Button>
              </Link>
              <JoinCommunity />
            </div>

            <p className="text-xs text-white/40 font-mono">
              Free Parent Orientation · 30–45 minutes · 📍 Bibwewadi, Pune
            </p>
          </div>

          {/* Right: Asymmetrical Image Container */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              {/* Floating Icons around the image */}
              <div className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-xl shadow-xl animate-float text-[#2FB5A3]">
                <Beaker size={26} />
              </div>
              
              <div className="absolute top-[20%] -right-8 z-20 bg-[#1E2A44] border border-white/10 p-3 rounded-xl shadow-xl animate-float-delayed text-white">
                <Atom size={26} />
              </div>

              <div className="absolute -bottom-4 -left-8 z-20 bg-white p-3 rounded-xl shadow-xl animate-float-slow text-[#1E2A44]">
                <Settings size={26} className="animate-spin-slow" />
              </div>

              <div className="absolute bottom-[15%] -right-4 z-20 bg-[#2FB5A3] p-3 rounded-xl shadow-xl animate-float text-white">
                <Lightbulb size={26} />
              </div>

              <div className="absolute top-[50%] -left-12 z-20 bg-[#1E2A44] border border-white/10 p-3 rounded-xl shadow-xl animate-float-delayed text-[#2FB5A3]">
                <Cpu size={22} />
              </div>

              <div className="absolute -top-10 right-10 z-20 bg-white p-2.5 rounded-xl shadow-xl animate-float text-[#1E2A44]">
                <Microscope size={22} />
              </div>

              {/* Main Image */}
              <div className="absolute inset-0 z-10 rounded-sm overflow-hidden shadow-2xl bg-[#0F172A] border border-white/5 transform lg:translate-x-8 lg:-translate-y-8 transition-transform duration-700 hover:translate-x-4 hover:-translate-y-4">
                <img 
                  src={data?.image ? urlForImage(data.image).width(800).height(1000).url() : "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070"} 
                  alt={data?.headline || "Child discovery"} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Decorative Accent */}
              <div className="absolute -inset-4 border-2 border-white/5 rounded-sm z-0 lg:translate-x-2 lg:-translate-y-2" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#2FB5A3]/10 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
