import { AlertCircle, CheckCircle } from 'lucide-react'

const parentConcerns = [
  "“My child studies only for exams.”",
  "“He keeps asking what to do next.”",
  "“She memorises but struggles to apply.”",
  "“Everything has become screen-based.”",
  "“School never really shows how things work.”",
  "“My child likes building things but has no proper environment.”"
]

const needs = [
  "build things with their own hands",
  "test ideas independently",
  "solve unfamiliar problems",
  "retry after mistakes",
  "explore how real systems work",
  "ask deeper questions",
  "think beyond step-by-step instructions"
]

export function TheProblem() {
  return (
    <section id="problem" className="section-spacing bg-[#1E2A44] text-white relative overflow-hidden">
      <div className="absolute inset-0 lab-grid opacity-[0.04] z-0" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#2FB5A3]/10 rounded-full blur-3xl z-0" />

      <div className="container-fluid relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Most children are trained to memorise answers. But real life requires much more.
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Schools and tuition classes often focus on syllabus completion, exams, and fixed answers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: What children need */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#2FB5A3]">But children also need environments where they can:</h3>
            <ul className="space-y-4">
              {needs.map((need, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 min-w-6 flex-shrink-0">
                    <CheckCircle className="text-[#2FB5A3]" size={20} />
                  </div>
                  <span className="text-lg text-white/90">{need}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xl font-medium text-white/90 italic border-l-4 border-[#2FB5A3] pl-6 py-2">
              That is why FunSmartism exists.
            </p>
          </div>

          {/* Right: Parent Relatability Cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {parentConcerns.map((concern, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <p className="text-white/80 italic text-sm md:text-base">{concern}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-[#2FB5A3]/10 border border-[#2FB5A3]/30 rounded-full px-8 py-4">
            <h3 className="text-lg md:text-xl font-serif font-bold text-[#2FB5A3]">
              FunSmartism creates environments where children actively use thinking instead of only consuming information.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
