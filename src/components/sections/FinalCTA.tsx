import { Button } from '../ui/Button'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-32 md:py-48 bg-primary-500 text-white relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-teal/5 transform skew-x-12 translate-x-1/2 z-0" />
      
      <div className="container-fluid relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-mono text-accent-teal mb-8 uppercase tracking-widest">[ TAKE_THE_NEXT_STEP ]</div>
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-[1.1] text-balanced">
            Marks show outcomes. <br />Thinking habits shape futures.
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex flex-col gap-4">
              <Button size="lg" className="px-12 py-5 text-lg bg-accent-teal shadow-2xl shadow-black/30 border-none text-white">
                Schedule a visit →
              </Button>
              <p className="text-xs text-primary-200/50 font-mono">
                Free. 30–45 minutes. <br />We confirm within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

