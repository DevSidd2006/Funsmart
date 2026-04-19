import { Button } from '../ui/Button'
import Link from 'next/link'

export function FinalCTA({ data }: { data?: any }) {
  const headline = data?.headline || "Marks show outcomes."
  const subheadline = data?.subheadline || "Thinking habits shape futures."
  const description = data?.description || "Come experience how independent problem-solving looks in real RoboSTEM action."

  return (
    <section className="py-24 md:py-32 bg-[#1E2A44] text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 lab-grid opacity-[0.03] z-0" />
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] z-0" />
      
      <div className="container-fluid relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-4 leading-tight text-white">
            {headline}
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-accent-teal mb-12 opacity-90">
            {subheadline}
          </h3>
          
          <p className="text-lg md:text-xl text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed italic opacity-80">
            {description}
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link href="/schedule-visit" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="px-16 py-6 text-lg bg-accent-teal hover:bg-[#28A392] shadow-huge shadow-accent-teal/20 border-none text-white w-full rounded-full"
              >
                Schedule a visit →
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-xs font-mono text-white/70 tracking-[0.2em] uppercase">
              Free · 30–45 minutes · We confirm within 2 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
