import { SectionReveal } from '../ui/SectionReveal'

export function WhatStudentsDo() {


  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <SectionReveal className="container-fluid max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-serif font-bold text-accent-teal mb-8 italic">
            No other robotics or STEM class in Pune offers this. Most offer kits and certificates. We offer access to the people who actually do science.
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 leading-tight">
            What Happens Inside FunSmartism?
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-light mb-6">
            Children do not sit through long lectures or copy fixed steps from notebooks or screens.
          </p>
          <p className="text-2xl md:text-3xl text-accent-teal italic font-bold leading-relaxed">
            They build, open, test, redesign, discuss, and experiment through hands-on RoboSTEM themes across the academic year.
          </p>
        </div>



        <div className="mt-16 text-center mb-24">
           <div className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold shadow-lg">
              All projects made are take-home creations.
           </div>
        </div>

        {/* Observation Section */}
        <div className="max-w-4xl mx-auto bg-neutral-50 rounded-[3rem] p-10 md:p-14 border border-neutral-100 text-center relative overflow-hidden shadow-sm">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-[80px]" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px]" />
           
           <div className="relative z-10">
             <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-500 mb-8 leading-tight">
               While Children Build and Solve, We Also Observe <br className="hidden md:block" />
               <span className="text-accent-teal italic font-light">How They Think.</span>
             </h3>
             
             <div className="text-base md:text-lg text-neutral-600 leading-relaxed space-y-6 mb-10 font-light">
               <p>During activities and challenges, facilitators naturally observe patterns that often come up at home too, but get unnoticed by parents.</p>
               <p className="font-medium text-primary-500">These observations are shared with parents through examples and discussions — helping parents support learning without over-helping.</p>
             </div>
             
             <div className="inline-flex items-center gap-2 text-sm text-neutral-500 bg-white px-6 py-3 rounded-full border border-neutral-100 shadow-sm">
               <span className="text-accent-teal text-base font-bold">!</span>
               <em>FunSmartism is <strong className="font-bold text-neutral-700">not</strong> a therapy, diagnostic, or psychological assessment center.</em>
             </div>
           </div>
        </div>
      </SectionReveal>
    </section>
  )
}
