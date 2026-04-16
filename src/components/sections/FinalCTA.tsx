import { Button } from '../ui/Button'
import Link from 'next/link'
import { JoinCommunity } from '../ui/JoinCommunity'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-br from-[#1E2A44] via-[#1a3a4a] to-[#1E2A44] text-white relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2FB5A3]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FB5A3]/5 rounded-full blur-3xl z-0 pointer-events-none" />
      
      <div className="container-fluid relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-[1.15] text-balanced">
            Marks show outcomes.<br />
            <span className="text-[#2FB5A3] italic font-light">Thinking habits shape futures.</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            Start with a free parent orientation. See the lab. Meet the team. No commitment needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Schedule Visit */}
            <div className="flex flex-col items-center gap-3">
              <Link href="/schedule-visit">
                <Button
                  size="lg"
                  className="px-10 py-4 text-base bg-[#2FB5A3] hover:bg-[#28A392] shadow-2xl shadow-[#2FB5A3]/25 border-none text-white w-full sm:w-auto"
                >
                  Schedule a Visit →
                </Button>
              </Link>
              <p className="text-xs text-white/30 font-mono">
                Free · 30–45 min · We confirm within 2 hours
              </p>
            </div>

            <JoinCommunity />
          </div>
        </div>
      </div>
    </section>
  )
}
