import { AlertTriangle, BookX, UserX } from 'lucide-react'

const problems = [
  {
    icon: BookX,
    title: 'Schools measure outcomes, not thinking',
    body: 'A child can score well and still freeze when facing an unfamiliar problem. Marks reveal what was memorised — not how the child thinks.',
  },
  {
    icon: AlertTriangle,
    title: 'Capable children go unnoticed',
    body: 'Many children who seem distracted, slow, or "average" are simply in the wrong environment. Their thinking habits are rarely observed or understood.',
  },
  {
    icon: UserX,
    title: 'Parents have no language for what they see',
    body: 'You know something is different about how your child processes the world — but schools only hand you a number. That gap deserves better.',
  },
]

export function TheProblem() {
  return (
    <section id="problem" className="section-spacing bg-[#1E2A44] text-white relative overflow-hidden">
      <div className="absolute inset-0 lab-grid opacity-[0.04] z-0" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#2FB5A3]/10 rounded-full blur-3xl z-0" />

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-mono text-[#2FB5A3] mb-5 uppercase tracking-widest">[ THE_CHALLENGE ]</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Children follow instructions but don’t think independently.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Parents tell us the same story again and again: the child can complete a worksheet, but freezes with a new problem. FunSmartism helps bridge that gap with a thinking-first experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#2FB5A3]/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 text-mono text-white/20 text-[10px]">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#2FB5A3]/15 flex items-center justify-center mb-6 group-hover:bg-[#2FB5A3]/25 transition-colors duration-300">
                  <Icon size={24} className="text-[#2FB5A3]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
