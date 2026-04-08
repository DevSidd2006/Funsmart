import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'

export default function ThinkingLabPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-[#1E2A44] text-white relative overflow-hidden flex items-center min-h-[70vh]">
        <div className="absolute inset-0 lab-grid opacity-[0.05]" />
        <div className="container-fluid relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-mono text-accent-teal mb-6 uppercase tracking-widest">[ METHODOLOGY ]</div>
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8">
              We don’t teach. <br />
              <span className="text-accent-teal italic font-light">We observe.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-8 leading-tight">
              Schools measure knowledge, not thinking.
            </h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Children explore real systems without instructions. We observe how they interact with unfamiliar complexity, how they respond to failure, and how they bridge the gap between "I don't know" and "I understand."
            </p>
          </div>
        </div>
      </section>

      {/* First 10 Minutes */}
      <section className="section-spacing bg-accent-surface">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-500 mb-16 text-center">The First 10 Minutes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { time: 'Minute 1–2', title: 'Observation', desc: 'The child encounters the system. We watch their initial mental model formation.' },
                { time: 'Minute 3–6', title: 'Exploration', desc: 'Testing boundaries. Trial and error with real materials.' },
                { time: 'Minute 7–10', title: 'Adaptation', desc: 'Adjusting strategies based on feedback from the system.' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-10 rounded-sm border border-neutral-100 shadow-sm">
                  <div className="text-mono text-accent-teal text-xs mb-4 uppercase tracking-widest font-bold">{step.time}</div>
                  <h3 className="text-2xl font-serif font-bold text-primary-500 mb-4">{step.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What this is not */}
      <section className="section-spacing">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500">What this is NOT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Not coaching', desc: 'No one tells them what to do. The system gives the feedback.' },
              { title: 'Not remedial', desc: 'It’s not because a child is "behind." It’s because they need a different weight of challenge.' },
              { title: 'Not gifted-only', desc: 'Intelligence is a habit, not a fixed category. Every child benefits from better thinking.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-bold text-primary-500 mb-4">✕ {item.title}</h3>
                <p className="text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing text-center bg-primary-500 text-white">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">Observe your child's thinking.</h2>
          <Button size="lg" className="mx-auto block sm:inline-block px-10 py-5 bg-accent-teal border-none text-white shadow-xl">
            Schedule a visit →
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
