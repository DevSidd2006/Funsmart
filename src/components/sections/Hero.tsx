import { Button } from '../ui/Button'
import { Beaker, Atom, Settings, Lightbulb, Cpu, Microscope, Rocket, Binary } from 'lucide-react'
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
            <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-mono mb-6 border border-white/10 rounded-sm">
              [ SCIENTIST_INSPIRED_THINKING_LAB · AGES 8–16 ]
            </div>
            
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
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Join Community
              </a>
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
