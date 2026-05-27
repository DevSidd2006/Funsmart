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
    <section className="py-8 md:py-10 bg-[#1E2A44] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 lab-grid opacity-[0.03]" />
      <div className="container-fluid relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust Strip */}
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 mb-12">

              {items.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal transition-all duration-300">
                    <Check className="text-accent-teal group-hover:text-white transition-colors" size={14} />
                  </div>
                  <span className="text-[12px] md:text-xs font-bold text-white/90 uppercase tracking-[0.2em] leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            


          </div>
        </div>
      </div>
    </section>
  )
}
