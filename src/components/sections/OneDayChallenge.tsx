import { Calendar, Eye, Users, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import Link from 'next/link'

export function OneDayChallenge() {
  const observations = [
    { label: 'Response to difficulty', desc: 'how they handle something unfamiliar' },
    { label: 'Independent retry', desc: 'whether they try again on their own' },
    { label: 'Testing ideas', desc: 'how they approach experimenting' },
    { label: 'Uncertainty handling', desc: 'how they react without ready answers' },
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="bg-primary-500 rounded-[3rem] overflow-hidden shadow-huge relative">
          <div className="absolute inset-0 lab-grid opacity-[0.05]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />

          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-accent-teal text-sm font-bold uppercase tracking-widest border border-white/10 w-fit">
                <Calendar size={16} />
                One-Day Gateway
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Copy */}
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Experience FunSmartism{' '}
                  <span className="text-accent-teal italic font-light block">Before Joining Long-Term</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed font-light mb-10">
                  The 1-Day Parent Observation STEM Challenge gives families a glimpse into how children approach unfamiliar problem-solving situations — while parents watch, not instruct.
                </p>

                <div className="bg-white/10 p-8 rounded-2xl border border-white/10 italic text-xl md:text-2xl font-serif text-accent-teal mb-10">
                  "This is the kind of environment my child actually needs."
                </div>

                <Link href="/schedule-visit">
                  <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] text-white px-12 py-6 rounded-full font-bold shadow-huge shadow-accent-teal/20">
                    Book 1-Day STEM Challenge →
                  </Button>
                </Link>
              </div>

              {/* Right: Observation Points */}
              <div>
                <p className="text-sm font-bold text-accent-teal uppercase tracking-widest mb-6 opacity-80">
                  Children participate while parents observe:
                </p>
                <div className="space-y-4">
                  {observations.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-accent-teal mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-white/60 text-xs mt-0.5 font-light italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual accent */}
                <div className="mt-10 bg-white/5 rounded-[2rem] border border-white/10 p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent-teal/20 rounded-2xl flex items-center justify-center text-accent-teal flex-shrink-0">
                    <Eye size={32} />
                  </div>
                  <div>
                    <p className="text-white font-serif font-bold text-lg mb-1">Parent Observation</p>
                    <p className="text-white/60 text-sm font-light">A rare window into your child's natural thinking habits when facing something new.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
