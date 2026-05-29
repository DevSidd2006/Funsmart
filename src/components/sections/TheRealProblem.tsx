import { AlertTriangle, BookX, UserX, MonitorOff, Wrench, Search } from 'lucide-react'
import { SectionReveal } from '../ui/SectionReveal'

export function TheRealProblem() {
  const painPoints = [
    { icon: BookX, quote: "My child studies only for exams." },
    { icon: Search, quote: "He keeps asking what to do next." },
    { icon: AlertTriangle, quote: "She memorises but struggles to apply." },
    { icon: MonitorOff, quote: "Everything has become screen-based." },
    { icon: Wrench, quote: "School never really shows how things work." },
    { icon: UserX, quote: "My child talks of lot of ideas, but doesn’t yet know how to actually build anything" },
  ]

  return (
    <section className="py-16 bg-neutral-50 relative overflow-hidden">
      <SectionReveal className="container-fluid max-w-6xl mx-auto">
        
        {/* Main Heading & Intro */}
        <div className="max-w-4xl mb-12 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Most children are trained to memorise answers. <br className="hidden md:block" />
            <span className="text-accent-teal italic font-light">But life, work, and real challenges don't have answer keys</span>
          </h2>
          
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8 font-light">
            Schools and tuition classes often focus on syllabus completion, exams, and fixed answers.
          </p>
        </div>

        {/* Parent Relatability Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-10 text-center">
            The real problem is
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 group hover:border-accent-teal/30 transition-colors">
                  <Icon size={24} className="text-neutral-300 mb-4 group-hover:text-accent-teal transition-colors" />
                  <p className="text-neutral-700 italic font-medium leading-relaxed">
                    “{point.quote}”
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-w-4xl mb-20 text-center mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-neutral-100 text-left mb-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-full blur-3xl" />
             <p className="text-lg text-primary-500 font-bold mb-6">But children also need environments where they can:</p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 'Get inspired by experts closely',
                 'build things with their own hands',
                 'test ideas independently even after mistake',
                 'solve unfamiliar problems',
                 'retry after mistakes',
                 'explore how real systems work',
                 'ask deeper questions to find solutions',
                 'think beyond step-by-step instructions'
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-neutral-600">
                   <div className="w-2 h-2 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                   <span className="leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
          </div>

          <div className="bg-[#1E2A44] p-8 md:p-16 rounded-[2rem] shadow-huge text-center mb-12 relative overflow-hidden">
             <div className="absolute inset-0 lab-grid opacity-[0.04]" />
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-teal/10 rounded-full blur-[80px]" />
             <div className="relative z-10 max-w-3xl mx-auto space-y-8">

               {/* Line 1 — heading */}
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                 Marks show outcomes.
               </h3>

               {/* Line 2 — cyan bold */}
               <p className="text-xl md:text-2xl font-bold text-accent-teal leading-snug">
                 They don't show what your child does when stuck, confused, or facing something completely new.
               </p>

               {/* Line 3 — white big */}
               <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                 Most parents have never watched their child solve a problem with no hints, no steps, and no correct answer waiting.
               </p>

               <div className="w-12 h-px bg-white/20 mx-auto" />

               {/* Line 4 & 5 — dimmed */}
               <p className="text-base text-white/50 font-light leading-relaxed">
                 That gap — between performing on a test and thinking through a real challenge — is what schools don't show you.
               </p>
               <p className="text-base text-white/50 font-light leading-relaxed">
                 Thinking habits form early and quietly. Most parents only notice them once they're already set.
               </p>

               <div className="pt-4 border-t border-white/10">
                 <p className="text-[10px] text-white/30 font-sans uppercase tracking-widest mb-3">The invisible problem</p>
                 <p className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
                   You can't guide what you can't see.{' '}
                   <span className="text-accent-teal">We help you see it.</span>
                 </p>
               </div>
             </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-primary-500 rounded-[2rem] p-10 md:p-12 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 lab-grid opacity-10" />
             <p className="text-lg md:text-xl font-light italic relative z-10 text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
               Sometimes parents accidentally over-help and the child stops thinking. <br className="hidden md:block" />
               Parents don’t know when to <strong className="text-white font-bold not-italic">step in</strong> and when to <strong className="text-white font-bold not-italic">step back</strong>.
             </p>
             <h3 className="text-3xl md:text-4xl font-serif font-bold relative z-10 leading-tight text-white">
               FunSmartism creates environments where children actively use thinking instead of only consuming information.
             </h3>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}

