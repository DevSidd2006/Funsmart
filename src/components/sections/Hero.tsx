import Image from 'next/image'
import { HeroCarousel } from '../ui/HeroCarousel'
import { Button } from '../ui/Button'
import { Beaker, Atom, Settings, Lightbulb, Rocket, Binary, Check } from 'lucide-react'
import { JoinCommunity } from '../ui/JoinCommunity'
import Link from 'next/link'

export function Hero({ data }: { data?: any }) {
  const headline = "Beyond Rote Learning. Beyond Marks."

  const images = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/gallery/chandrayaan-img.png",
  ]

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-[#1E2A44] overflow-hidden pt-28 md:pt-40 lg:pt-52 pb-16 md:pb-24 text-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 lab-grid opacity-[0.05] z-0" />

      {/* Background Floating Elements */}
      <div className="absolute top-[15%] left-[5%] text-[#2FB5A3]/10 animate-float-slow hidden lg:block">
        <Rocket size={100} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[10%] left-[20%] text-[#2FB5A3]/5 animate-float-delayed hidden lg:block">
        <Binary size={130} strokeWidth={0.5} />
      </div>

      <div className="container-fluid relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <p className="text-accent-teal font-bold tracking-widest uppercase text-sm md:text-base mb-4">
              Beyond Rote Learning. Beyond Marks.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif font-bold text-[#2FB5A3] mb-5 md:mb-8 leading-[1.05] text-balanced">
              A Hands-On RoboSTEM <span className="whitespace-nowrap">Thinking Lab</span> in Pune.
            </h1>

            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#B7E3DD] mb-8 md:mb-12 max-w-2xl leading-relaxed font-light opacity-90 space-y-2">
              <p className="text-white font-medium">For children aged 8–15.</p>
              <p>A place where children build projects, experiment, and solve real challenges - interact with scientists and innovators, while mentors observe how they think and help parents understand it.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mt-4">
              <div className="w-full md:w-auto">
                <Link href="/schedule-visit" className="w-full">
                  <Button
                    size="lg"
                    className="px-8 md:px-12 py-5 md:py-6 shadow-2xl shadow-accent-teal/20 bg-accent-teal hover:bg-[#28A392] text-white border-none w-full md:w-auto rounded-xl font-bold text-base md:text-lg"
                  >
                    Schedule a Visit
                  </Button>
                </Link>
              </div>

              <div className="hidden md:block w-full md:w-auto">
                <JoinCommunity size="lg" />
              </div>
            </div>
          </div>

          {/* Mobile: Small hero image below text */}
          <div className="lg:hidden relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-4">
            <HeroCarousel images={images} headline={headline} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right: Asymmetrical Image Container — desktop only */}
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
                <HeroCarousel images={images} headline={headline} hoverEffect={true} />
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

