import { Button } from '../ui/Button'
import Link from 'next/link'
import { SectionReveal } from '../ui/SectionReveal'

export function FinalCTA({ data }: { data?: any }) {
  const headline = data?.headline || "Marks show outcomes."
  const subheadline = data?.subheadline || "Real-world learning experiences shape confidence, curiosity, and independent problem-solving — not rote learning."
  const description = data?.description || "Experience how children build, test, and solve unfamiliar challenges in person."

  return (
    <section className="py-24 md:py-32 bg-[#1E2A44] text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 lab-grid opacity-[0.03] z-0" />
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] z-0" />
      
      <SectionReveal className="container-fluid relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight text-white">
            {headline}
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-accent-teal mb-10 opacity-95 italic">
            {subheadline}
          </h3>
          
          <p className="text-base md:text-lg text-[#B7E3DD] mb-12 max-w-2xl mx-auto leading-relaxed italic opacity-80">
            {description}
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link href="/schedule-visit" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="px-16 py-6 bg-accent-teal hover:bg-[#28A392] shadow-huge shadow-accent-teal/20 border-none text-white w-full rounded-full font-bold"
              >
                Schedule a Visit
              </Button>
            </Link>

          </div>

        </div>
      </SectionReveal>
    </section>
  )
}
