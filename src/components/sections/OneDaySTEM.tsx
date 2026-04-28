import { Button } from '../ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const observes = [
  "how they respond to difficulty",
  "whether they retry independently",
  "how they test ideas",
  "how they react when answers are not immediately available"
]

export function OneDaySTEM() {
  return (
    <section className="py-24 bg-[#1E2A44] border-t border-white/10 text-white relative overflow-hidden">
      <div className="absolute inset-0 lab-grid opacity-[0.04] mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2FB5A3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-fluid max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Experience FunSmartism <br /> Before Joining Long-Term
        </h2>
        <p className="text-lg md:text-xl text-[#B7E3DD] max-w-3xl mx-auto leading-relaxed mb-12">
          The 1-Day Parent Observation STEM Challenge gives families a glimpse into how children approach unfamiliar problem-solving situations.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 text-left max-w-4xl mx-auto shadow-2xl mb-12">
          <h3 className="text-xl font-bold text-white mb-8 text-center">Children participate in hands-on STEM challenges while parents observe:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {observes.map((obs, i) => (
              <div key={i} className="flex flex-col gap-2 p-6 bg-white/5 rounded-2xl">
                <span className="text-accent-teal font-bold opacity-70">0{i + 1}</span>
                <span className="text-white/90 text-lg leading-snug">{obs}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/10 text-center p-6 rounded-2xl">
            <p className="text-[#B7E3DD] text-lg italic mb-2">This is often the first moment parents realise:</p>
            <p className="text-2xl md:text-3xl font-bold text-white font-serif">“This is the kind of environment my child actually needs.”</p>
          </div>
        </div>

        <Link href="/schedule-visit">
          <Button size="lg" className="px-12 py-6 bg-accent-teal hover:bg-[#28A392] text-white border-none rounded-full font-bold shadow-2xl">
            Book 1-Day STEM Challenge <ArrowRight className="ml-2 inline" size={20} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
