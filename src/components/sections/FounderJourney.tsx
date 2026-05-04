import { Award, Sparkles, BookOpen, Globe } from 'lucide-react'
import Image from 'next/image'

const founderNotes = [
  {
    icon: Award,
    title: 'Founder-led vision',
    desc: 'Dipali Akolkar moved from software product design to child development to make thinking visible for every child.',
  },
  {
    icon: Sparkles,
    title: 'Gurukul + modern lab',
    desc: 'The lab blends observation-led learning with real tools, not kits — just like the founder first imagined.',
  },
  {
    icon: BookOpen,
    title: 'From reports to conversations',
    desc: 'Parents get insight into how their child thinks, not just what they produced on paper.',
  },
]

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
    <section className="section-spacing bg-[#F8FBFF]">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E2A44] mb-6 leading-tight">
                The idea started with one question: why do smart children stop thinking when the answer is not already given?
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                This is the founder story for FunSmartism — a lab built to observe thinking, support discovery, and help parents translate every moment into a new habit.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {founderNotes.map((note) => {
                  const Icon = note.icon
                  return (
                    <div key={note.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-4">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#1E2A44] mb-3 leading-snug">
                        {note.title}
                      </h3>
                      <p className="text-neutral-500 leading-relaxed text-sm">
                        {note.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative group">
              <div className="rounded-[3rem] overflow-hidden border border-neutral-100 bg-white p-10 md:p-14 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl" />

                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-10 shadow-xl border border-neutral-100">
                  <Image 
                    src="/images/dipali-real.jpg" 
                    alt="Dipali Akolkar - Founder of FunSmartism"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-mono text-accent-teal mb-4 uppercase tracking-[0.2em] text-xs font-bold">
                    <div className="w-8 h-px bg-accent-teal/30" />
                    Our Founder
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-[#1E2A44] mb-4">Dipali Akolkar</h3>
                  <p className="text-neutral-500 leading-relaxed mb-8 text-base font-light">
                    Masters in Computer Management with deep software product experience. She transitioned into child development to bring precision, observation, and authentic thinking to the learning journey.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    <span className="rounded-full bg-accent-teal/10 px-5 py-2 text-[10px] font-bold text-accent-teal uppercase tracking-widest border border-accent-teal/5">MCM · Software Dev</span>
                    <span className="rounded-full bg-accent-teal/10 px-5 py-2 text-[10px] font-bold text-accent-teal uppercase tracking-widest border border-accent-teal/5">Child Development Expert</span>
                  </div>

                  <div className="relative p-8 bg-[#FAF9F6] rounded-3xl border border-neutral-100 italic">
                    <div className="absolute -top-4 -left-2 text-6xl text-accent-teal/20 font-serif leading-none">“</div>
                    <p className="text-[#1E2A44] leading-relaxed text-sm font-medium relative z-10">
                      FunSmartism was born because we saw too many children solving the way they were told, instead of thinking for themselves. Our lab is designed to change that.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {storyBoxes.map((box) => (
              <div key={box.title} className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-mono text-accent-teal mb-4 text-sm uppercase tracking-[0.24em]">{box.step}</div>
                <h3 className="text-2xl font-serif font-bold text-[#1E2A44] mb-4 leading-snug">
                  {box.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
