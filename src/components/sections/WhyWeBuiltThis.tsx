export function WhyWeBuiltThis() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-fluid max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-12">
          Why We Built This Environment
        </h2>
        
        <div className="bg-neutral-50 rounded-[40px] p-8 md:p-16 border border-neutral-100 shadow-sm text-left max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-10 font-medium">
            Again and again, we noticed children becoming deeply engaged the moment learning became physical, exploratory, and real.
          </p>

          <div className="flex flex-col gap-4 mb-10 border-l-4 border-accent-teal pl-6">
            <span className="text-lg text-neutral-600 font-serif italic">A robot to test.</span>
            <span className="text-lg text-neutral-600 font-serif italic">A puzzle to solve.</span>
            <span className="text-lg text-neutral-600 font-serif italic">A structure to redesign.</span>
            <span className="text-lg text-neutral-600 font-serif italic">A question without one fixed answer.</span>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Children who seemed passive in traditional learning settings often became highly active inside these environments. Parents noticed the difference too. Many would say:
          </p>

          <blockquote className="text-2xl md:text-3xl font-serif font-bold text-primary-500 my-10 text-center">
            “I haven’t seen my child this engaged in a long time.”
          </blockquote>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            That repeated pattern became the foundation of FunSmartism.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-neutral-500 line-through decoration-neutral-400">Not as a tuition class.</p>
            <p className="text-lg text-neutral-500 line-through decoration-neutral-400">Not as a robotics coaching center.</p>
            <p className="text-xl font-bold text-accent-teal mt-4">
              But as a hands-on RoboSTEM thinking lab where children actively participate in learning through experimentation, projects, challenges, and real-world exploration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
