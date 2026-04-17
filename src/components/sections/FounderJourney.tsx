import { Award, Sparkles, BookOpen, Globe } from 'lucide-react'

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
    title: 'The Problem',
    desc: "We saw parents frustrated, wondering why their child's initial spark for logic had faded into rote memorization. The problem wasn't the children — it was the environment.",
  },
  {
    step: '02',
    title: 'The Solution',
    desc: 'So we built an environment where thinking was the subject, not the by-product. Where the goal was to understand how a child arrived at a result, not just the result itself.',
  },
  {
    step: '03',
    title: 'The Experience',
    desc: 'The Thinking Lab is where children build, test, and solve real challenges while we observe how they think — helping parents support independent thinking in real life.',
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
                Why we built this.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                We noticed it again and again: a child who struggled in a classroom would become active the moment you put something real in their hands. A mechanical puzzle. A circuit board. A question without a single correct answer.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed font-semibold text-accent-teal">
                See how this becomes real inside the FunSmartism RoboSTEM Thinking Lab →
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

            <div className="rounded-[2rem] overflow-hidden border border-neutral-200 bg-white p-8 shadow-lg">
              <div className="mb-8">
                <div className="w-full h-80 rounded-2xl mb-6 overflow-hidden relative shadow-inner bg-neutral-50 border border-neutral-100">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" 
                    alt="Dipali Akolkar" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent pointer-events-none" />
                </div>
                <div className="text-mono text-accent-teal mb-3 uppercase tracking-widest">From software systems to child thinking systems</div>
                <h3 className="text-3xl font-serif font-bold text-[#1E2A44] mb-3">Dipali Akolkar, Founder</h3>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  After years in software development and hands-on parenting, Dipali went deeper into child development through formal learning experiences in both Pune and the USA. What stood out was simple: the right environment can completely change how a child observes, persists, and solves. That insight led her to build FunSmartism in Pune.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <span className="rounded-3xl bg-accent-teal/10 px-4 py-3 text-sm text-accent-teal">MCM · Software Dev</span>
                  <span className="rounded-3xl bg-accent-teal/10 px-4 py-3 text-sm text-accent-teal">Child Development</span>
                </div>
              </div>
              <div className="rounded-3xl bg-accent-surface p-6">
                <p className="text-neutral-600 leading-relaxed text-sm">
                  "FunSmartism was born because we saw too many children solving the way they were told, instead of thinking for themselves. Our lab is designed to change that."
                </p>
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
