import Image from 'next/image'
import { Calendar, Eye, Users } from 'lucide-react'
import { Button } from '../ui/Button'
import Link from 'next/link'

export function OneDayChallenge() {
  const observations = [
    'How they respond to difficulty',
    'Whether they retry independently',
    'How they test ideas',
    'How they react when answers are not immediately available',
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="bg-primary-500 rounded-[3rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-huge">
          <div className="absolute inset-0 lab-grid opacity-[0.05]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px]" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-accent-teal text-sm font-bold uppercase tracking-widest mb-10 border border-white/10">
              <Calendar size={16} />
              One-Day Gateway
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Experience FunSmartism <br />
              <span className="text-accent-teal italic font-light">Before Joining Long-Term</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
              The 1-Day Parent Observation STEM Challenge gives families a glimpse into how children approach unfamiliar problem-solving situations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
              {/* Parent Observation Focus */}
              <div className="bg-white/5 p-8 md:p-10 rounded-[2rem] border border-white/10 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent-teal/20 rounded-2xl flex items-center justify-center text-accent-teal">
                      <Eye size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold">Parent Observation</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed font-light mb-6">
                    A rare window into your child's natural thinking habits when facing something new. Children participate while parents observe:
                  </p>
                </div>
                
                <div className="relative aspect-video rounded-2xl overflow-hidden group">
                  <Image 
                    src="/images/lab-observation.png" 
                    alt="Parent observing child" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Link href="/gallery" className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[8px] font-bold text-primary-500 uppercase tracking-widest hover:bg-white transition-colors">
                    Gallery →
                  </Link>
                </div>
              </div>

              {/* Observation Points */}
              <div className="grid grid-cols-1 gap-3">
                {observations.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent-teal flex-shrink-0" />
                    <span className="text-white/90 text-sm font-medium italic">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 p-8 md:p-10 rounded-[2rem] border border-white/10 italic text-xl md:text-3xl font-serif text-accent-teal mb-12">
              “This is the kind of environment my child actually needs.”
            </div>
            
            <Link href="/schedule-visit">
              <Button size="lg" className="bg-accent-teal hover:bg-[#28A392] text-white px-16 py-7 rounded-full font-bold shadow-huge shadow-accent-teal/20 text-lg">
                Book 1-Day STEM Challenge →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
