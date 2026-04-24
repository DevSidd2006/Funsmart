import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Brain, Milestone } from 'lucide-react'
import { Button } from '../ui/Button'

export function HowItWorks({ data }: { data?: any }) {
  const title = data?.title || "The FunSmartism Journey"
  const intro = data?.intro || "A 3-step pathway to unlearn rote methods and build sustainable logic."
  
  const steps = [
    {
      stepNumber: 'Step 1 — For parents',
      title: 'Parent orientation.',
      description: 'Come in. Meet us. See how FunSmartism RoboSTEM Thinking Lab works. Ask everything.',
      details: '30–45 min · Free · No commitment',
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
      image: null
    },
    {
      stepNumber: 'Step 2 — For your child',
      title: '10-Day Thinking Reset Workshop.',
      description: '10 days. 10 themes. 10 different challenges. Real materials. Children build, test, and solve while we observe real problem-solving. Observation note for parents included.',
      subtext: 'Children engage in foundational problem-solving tasks to unlearn standard rote methods.',
      icon: <Brain className="w-6 h-6" />,
      color: "bg-teal-50 text-teal-600",
      image: null
    },
    {
      stepNumber: 'Step 3 — The year-long program',
      title: 'FunSmartism RoboSTEM Thinking Lab — Year-Long.',
      description: 'One theme per month. Weekly sessions. Real projects, thinking observations, scientist interactions, and monthly parent guidance for home.',
      subtext: 'Building sustainable logic. Where thinking habits become visible over time.',
      icon: <Milestone className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
      image: null
    }
  ]

  return (
    <section className="py-24 bg-accent-surface overflow-hidden" id="journey">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[120px] left-[15%] right-[15%] h-0.5 bg-neutral-200 -z-0" />
          
          {steps.map((step: any, idx: number) => {
            return (
              <div key={idx} className="flex flex-col relative z-10 group">
                {/* Step Marker */}
                <div className="flex justify-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 bg-white`}>
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-[32px] overflow-hidden shadow-huge border border-neutral-100 flex flex-col flex-grow transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {step.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                  )}
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-4">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-500 mb-4 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-base leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {step.details && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary-500 bg-primary-50 px-3 py-2 rounded-lg self-start mb-6">
                        <Clock className="w-4 h-4" />
                        {step.details}
                      </div>
                    )}

                    {step.subtext && (
                      <p className="text-sm italic text-neutral-500 mt-auto pt-4 border-t border-neutral-100">
                        {step.subtext}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#1E2A44] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <p className="text-white font-bold text-xl mb-6">Want to explore the full structure first?</p>
              <Link href="/programs">
                <span className="inline-flex items-center gap-2 text-accent-teal font-bold hover:gap-4 transition-all duration-300 text-lg cursor-pointer">
                  See all program details <ArrowRight size={20} />
                </span>
              </Link>
            </div>
            <div className="relative z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
              <p className="text-white/80 mb-6 text-lg">Not sure which path fits your child? Schedule a visit once and we’ll guide you</p>
              <Link href="/schedule-visit">
                <Button className="bg-accent-teal hover:bg-[#28A392] text-white rounded-full px-8 py-4 font-bold w-full sm:w-auto">
                  Schedule a visit →
                </Button>
              </Link>
              <p className="text-white/40 text-xs mt-4 font-mono uppercase tracking-widest">
                Free · 30–45 minutes · WhatsApp confirmation within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


