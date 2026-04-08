import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-accent-surface overflow-hidden pt-24">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 lab-grid opacity-[0.03] z-0" />
      
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-[#1E2A44]/5 text-[#1E2A44] text-mono mb-8 border border-[#1E2A44]/10 rounded-sm">
              [ SCIENTIST_INSPIRED_THINKING_LAB_AGES_8–14 ]
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1E2A44] mb-8 leading-[1.1] text-balanced">
               The world doesn't care about marks. <br />
               It cares about <span className="text-[#2FB5A3] italic font-light italic">how your child thinks</span>.
            </h1>

            <p className="text-xl text-neutral-500 mb-12 leading-relaxed max-w-xl">
              We help children move from "learning for marks" to "making their own mark" through hands-on exploration of STEM, Space Science, and Robotics.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <Button size="lg" className="px-10 py-5 text-lg shadow-xl shadow-[#2FB5A3]/20">
                Schedule a Visit →
              </Button>
              <Button variant="ghost" size="lg" className="flex items-center gap-2 group text-neutral-400 hover:text-[#1E2A44]">
                Explore Activities
                <span className="group-hover:translate-x-1 duration-300">→</span>
              </Button>
            </div>
          </div>

          {/* Right: Asymmetrical Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 z-10 rounded-lg overflow-hidden shadow-base bg-white border border-neutral-100 transform lg:translate-x-8 lg:-translate-y-8 transition-transform duration-700 hover:translate-x-4 hover:-translate-y-4">
                <img 
                  src="/images/hero-child-discovery.png" 
                  alt="Child working with robotic arm and gears" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -inset-4 border-2 border-[#1E2A44]/5 rounded-lg z-0 lg:translate-x-2 lg:-translate-y-2" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#2FB5A3]/5 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
