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
            Marks show outcomes. <br /><span className="text-accent-teal italic font-light italic">Thinking habits</span> shape futures.
          </h2>

          <p className="text-xl text-primary-100/70 mb-16 leading-relaxed max-w-2xl mx-auto">
            Give your child the unfair advantage of intelligence. Start with a complimentary orientation.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" className="px-12 py-5 text-lg bg-accent-teal shadow-2xl shadow-black/30">
              Schedule your first session →
            </Button>
            <div className="text-left">
               <p className="text-xs text-primary-200/50 uppercase tracking-widest font-bold">NEXT ORIENTATION</p>
               <p className="font-serif font-bold text-lg text-white">This Saturday, 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
