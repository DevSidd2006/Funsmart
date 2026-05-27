import { Award, Sparkles, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { SectionReveal } from '../ui/SectionReveal'

const storyBoxes = [
  {
    step: '01',
    title: 'The problem we saw',
    desc: 'Many children looked capable, but they only shined when the environment asked them to think independently.',
  },
  {
    step: '02',
    title: 'A new way to observe',
    desc: 'Instead of teaching a result, we began documenting how children decide, retry and explain their next move.',
  },
  {
    step: '03',
    title: 'A thinking-first lab',
    desc: 'FunSmartism became the space where the process is the outcome and every team member is a careful observer.',
  },
]

export function FounderJourney() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#F8FBFF] overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <SectionReveal className="container-fluid">
        <div className="max-w-7xl mx-auto">
          {/* TOP SECTION — STORY + FOUNDER CARD */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1E2A44] mb-6 leading-[1.1]">
                From software systems to child thinking systems
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-accent-teal mb-10 font-medium">
                Dipali Akolkar, Founder — FunSmartism Intelligence Center
              </h3>
              
              <div className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light space-y-6">
                <p>
                  After years in software development and hands-on parenting, Dipali went deeper into child development through formal learning experiences in both <strong className="font-bold text-[#1E2A44]">Pune</strong> and the <strong className="font-bold text-[#1E2A44]">USA</strong>.
                </p>
                <p>
                  What stood out was simple: the right environment can completely change how a child observes, persists, and solves.
                </p>
                <p>
                  That insight led her to build FunSmartism in <strong className="font-bold text-[#1E2A44]">Pune</strong> — a scientist-inspired RoboSTEM environment where real problem-solving becomes visible and parents learn how to support independent thinking in everyday life.
                </p>
              </div>
            </div>

            <div className="relative group">
              {/* Decorative elements behind card */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
              
              <div className="rounded-[3.5rem] overflow-hidden border border-neutral-100 bg-white p-6 md:p-10 shadow-huge relative z-10">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-100">
                  <Image 
                    src="/images/dipali-real.jpg" 
                    alt="Dipali Akolkar - Founder of FunSmartism"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44]/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="inline-flex items-center gap-3 text-mono text-white/90 mb-2 uppercase tracking-[0.2em] text-xs font-bold">
                      <div className="w-8 h-px bg-white/50" />
                      Our Founder
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Dipali Akolkar</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION — THREE PILLARS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyBoxes.map((box) => (
              <div key={box.title} className="group h-full flex flex-col rounded-[2.5rem] border border-neutral-200 bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-mono text-accent-teal mb-6 text-base font-bold uppercase tracking-[0.3em]">{box.step}</div>
                <h3 className="text-2xl font-serif font-bold text-[#1E2A44] mb-4 leading-tight">
                  {box.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-base font-light">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
