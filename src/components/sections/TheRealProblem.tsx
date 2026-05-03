import { AlertTriangle, BookX, UserX, MonitorOff, Wrench, Search } from 'lucide-react'

export function TheRealProblem() {
  const painPoints = [
    { icon: BookX, quote: "My child studies only for exams." },
    { icon: Search, quote: "He keeps asking what to do next." },
    { icon: AlertTriangle, quote: "She memorises but struggles to apply." },
    { icon: MonitorOff, quote: "Everything has become screen-based." },
    { icon: Wrench, quote: "School never really shows how things work." },
    { icon: UserX, quote: "My child likes building things but has no proper environment." },
  ]

  return (
    <section className="py-16 bg-neutral-50 relative overflow-hidden">
      <div className="container-fluid max-w-6xl mx-auto">
        
        {/* Main Heading & Intro */}
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            Most children are trained to memorise answers. <br className="hidden md:block" />
            <span className="text-accent-teal italic font-light">But real life requires much more.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 font-light">
            Schools and tuition classes often focus on syllabus completion, exams, and fixed answers.
          </p>
          
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-neutral-100 text-left mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-full blur-3xl" />
             <p className="text-lg text-primary-500 font-bold mb-6">But children also need environments where they can:</p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 'build things with their own hands',
                 'test ideas independently',
                 'solve unfamiliar problems',
                 'retry after mistakes',
                 'explore how real systems work',
                 'ask deeper questions',
                 'think beyond step-by-step instructions'
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-neutral-600">
                   <div className="w-2 h-2 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                   <span className="leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
             <p className="text-xl font-serif font-bold text-primary-500 mt-8 italic border-t border-neutral-100 pt-6">
               That is why FunSmartism exists.
             </p>
          </div>
        </div>

        {/* Parent Relatability Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

          <div className="bg-primary-500 rounded-[2rem] p-10 md:p-12 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 lab-grid opacity-10" />
             <p className="text-lg md:text-xl font-light italic mb-4 relative z-10 text-white/80">
               Sometimes parents accidently over help and child stops thinking. Parents don’t know when to step in and when to step back.
             </p>
             <h3 className="text-2xl md:text-3xl font-serif font-bold relative z-10 leading-tight text-white">
               FunSmartism creates environments where children actively use thinking instead of only consuming information.
             </h3>
          </div>
        </div>
        
      </div>
    </section>
  )
}
