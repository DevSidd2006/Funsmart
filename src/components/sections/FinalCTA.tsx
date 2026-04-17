import { Button } from '../ui/Button'
import Link from 'next/link'
import { JoinCommunity } from '../ui/JoinCommunity'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#1E2A44] text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 lab-grid opacity-[0.03] z-0" />
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] z-0" />
      
      <div className="container-fluid relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.1] text-balanced text-white">
            Marks show outcomes.<br />
            <span className="text-accent-teal italic font-light opacity-90">
              Thinking habits shape futures.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed">
            Come experience how scientist-style problem-solving looks in real RoboSTEM action.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Schedule Visit */}
            <div className="flex flex-col items-center gap-4">
              <Link href="/schedule-visit" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="px-12 py-5 text-base bg-accent-teal hover:bg-[#28A392] shadow-huge shadow-accent-teal/20 border-none text-white w-full"
                >
                  Schedule a visit →
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/70 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                Free · 30–45 min · We confirm within 2 hours
              </div>
            </div>

            <JoinCommunity />
          </div>
        </div>
      </div>
    </section>
  )
}
