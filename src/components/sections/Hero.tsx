import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center bg-[#1E2A44] overflow-hidden pt-24 text-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 lab-grid opacity-[0.05] z-0" />
      
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-mono mb-8 border border-white/10 rounded-sm">
              [ SCIENTIST_INSPIRED_THINKING_LAB_AGES_8–16 ]
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] text-balanced">
               Many capable children struggle in the wrong environment. <br />
               <span className="text-white/60 font-light italic">Not because they lack ability,</span> <br />
               <span className="text-[#2FB5A3]">Because their thinking habits are rarely observed.</span>
            </h1>

            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-xl">
              A RoboSTEM Thinking Lab where children build real things, face real challenges inspired by how scientists solve problems, and parents learn how to support independent thinking.
            </p>

            <div className="mb-12">
              <p className="text-sm text-white/50 mb-4 font-medium uppercase tracking-widest">Supporting micro-copy</p>
              <p className="text-lg text-white/80">
                For children aged 8–16 in Pune. <br />
                <span className="text-white/40 italic">Not a tuition class. Not a coaching center. Not another class. Scientist-inspired real problem-solving.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex flex-col gap-4">
                <Button size="lg" className="px-10 py-5 text-lg shadow-xl shadow-[#2FB5A3]/10 bg-[#2FB5A3] hover:bg-[#28A392] text-white border-none">
                  Schedule a visit →
                </Button>
                <p className="text-xs text-white/50 px-2 font-mono">
                  Free Parent Orientation · 30–45 minutes <br />📍 Bibwewadi, Pune
                </p>
              </div>
            </div>
          </div>

          {/* Right: Asymmetrical Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 z-10 rounded-sm overflow-hidden shadow-2xl bg-[#0F172A] border border-white/5 transform lg:translate-x-8 lg:-translate-y-8 transition-transform duration-700 hover:translate-x-4 hover:-translate-y-4">
                <img 
                  src="/images/hero-child-discovery.png" 
                  alt="Child working with an actual object — gears, circuits, something taken apart" 
                  className="w-full h-full object-cover"
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

