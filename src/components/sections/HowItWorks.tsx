import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HowItWorks({ data }: { data?: any }) {
  const title = data?.title || "Your Child's Learning Journey"
  
  const steps = data?.steps || [
    {
      stepNumber: 'Step 1',
      title: 'Parent orientation.',
      description: 'Come in. Meet us. See how FunSmartism RoboSTEM Thinking Lab works. Ask everything.',
      image: null
    },
    {
      stepNumber: 'Step 2',
      title: '10-Day Thinking Reset Workshop.',
      description: 'Building sustainable logic. Where thinking habits become visible over time.',
      image: null
    },
    {
      stepNumber: 'Step 3',
      title: 'FunSmartism RoboSTEM Thinking Lab — Year-Long.',
      description: 'One theme per month. Weekly sessions, real projects, thinking observations, scientist interactions.',
      image: null
    }
  ]

  return (
    <section className="section-spacing bg-accent-surface">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step: any, idx: number) => {
            const stepImage = step.image 
              ? urlForImage(step.image).width(600).height(400).url() 
              : `/images/step-${idx + 1}.png`

            return (
              <div key={idx} className="bg-white rounded-[32px] overflow-hidden shadow-huge border border-neutral-100 flex flex-col group">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image 
                    src={stepImage} 
                    alt={step.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {step.stepNumber || `Step ${idx + 1}`}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="w-12 h-1 bg-accent-teal mb-6 rounded-full" />
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-500 mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed mb-8 flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary-500 font-bold mb-6">Want to explore the full structure first?</p>
          <Link href="/programs">
            <span className="inline-flex items-center gap-2 text-accent-teal font-bold hover:gap-4 transition-all duration-300">
              See all program details <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
