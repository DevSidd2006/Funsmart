import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { JoinCommunity } from '../ui/JoinCommunity'
import Link from 'next/link'

export function TrustStrip() {
  const items = [
    'Hands-on Builds',
    'Scientist Interaction Sessions',
    'Parent Guidance',
    'Real-World Thinking'
  ]

  return (
    <section className="py-12 bg-[#1E2A44] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 lab-grid opacity-[0.03]" />
      <div className="container-fluid relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
            <Link href="/schedule-visit" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="px-12 py-6 text-lg shadow-2xl shadow-accent-teal/20 bg-accent-teal hover:bg-[#28A392] text-white border-none w-full rounded-full font-bold"
              >
                Schedule a visit →
              </Button>
            </Link>
            <JoinCommunity />
          </div>

          {/* Trust Strip */}
          <div className="border-t border-white/10 pt-12 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 mb-12">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-all duration-300">
                    <Check className="text-accent-teal group-hover:text-white transition-colors" size={14} />
                  </div>
                  <span className="text-[11px] md:text-xs font-bold text-white/90 uppercase tracking-[0.2em] leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-[11px] md:text-sm text-white/70 font-mono bg-white/5 w-fit px-8 py-4 rounded-full border border-white/5 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-teal shadow-[0_0_10px_rgba(47,181,163,0.6)] animate-pulse" />
              Free Parent Orientation · 30–45 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
