import { Calendar, Eye, Users, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import Link from 'next/link'

export function OneDayChallenge() {
  const observations = [
    'how they respond to difficulty',
    'whether they retry independently',
    'how they test ideas',
    'how they react when answers are not immediately available',
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="bg-primary-500 rounded-[3rem] p-10 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-huge">
          <div className="absolute inset-0 lab-grid opacity-[0.05]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-accent-teal text-sm font-bold uppercase tracking-widest mb-8 border border-white/10">
                <Calendar size={16} />
                One-Day Gateway
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Experience FunSmartism <br />
                <span className="text-accent-teal italic font-light">Before Joining Long-Term</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10">
                The 1-Day Parent Observation STEM Challenge gives families a glimpse into how children approach unfamiliar problem-solving situations.
              </p>
              
              <div className="space-y-4 mb-12">
                <p className="text-sm font-bold text-accent-teal uppercase tracking-widest opacity-80">Children participate while parents observe:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {observations.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                      <span className="text-white/90 text-sm font-medium italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 p-8 rounded-2xl border border-white/10 italic text-xl md:text-2xl font-serif text-accent-teal mb-10">
                “This is the kind of environment my child actually needs.”
              </div>
              
              <Link href="/schedule-visit">
                <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] text-white px-12 py-6 rounded-full font-bold shadow-huge shadow-accent-teal/20">
                  Book 1-Day STEM Challenge →
                </Button>
              </Link>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="aspect-square bg-white/5 rounded-[4rem] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="text-center p-12">
                   <div className="w-24 h-24 bg-accent-teal/20 rounded-3xl flex items-center justify-center text-accent-teal mx-auto mb-8 shadow-inner">
                     <Eye size={48} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-white mb-6">Parent Observation</h3>
                   <p className="text-white/60 leading-relaxed font-light">
                     A rare window into your child's natural thinking habits when facing something new.
                   </p>
                 </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-huge text-primary-500 animate-float">
                <Users size={32} className="text-accent-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
