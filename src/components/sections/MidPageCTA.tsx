import { Button } from '../ui/Button'
import Link from 'next/link'

export function MidPageCTA({ data }: { data?: any }) {
  const headline = data?.headline || "Wait, is this right for my child?"
  const subheadline = data?.subheadline || "The best way to know is to see them in action."
  const buttonText = data?.buttonText || "Schedule a visit →"

  return (
    <section className="py-20 bg-accent-surface border-y border-neutral-100">
      <div className="container-fluid">
        <div className="max-w-5xl mx-auto bg-[#1E2A44] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-huge">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {headline}
            </h2>
            <p className="text-xl md:text-2xl text-[#B7E3DD] mb-10 opacity-90 font-light">
              {subheadline}
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Link href="/schedule-visit">
                <Button 
                  size="lg" 
                  className="px-12 py-6 text-lg bg-accent-teal hover:bg-[#28A392] text-white border-none rounded-full shadow-2xl shadow-accent-teal/20"
                >
                  {buttonText}
                </Button>
              </Link>
              <p className="text-xs font-mono text-white/70 uppercase tracking-[0.2em]">
                Free · 30–45 mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
