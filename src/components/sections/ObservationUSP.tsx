import { Eye, ShieldAlert } from 'lucide-react'

export function ObservationUSP() {
  const observations = [
    'Does the child retry independently?',
    'Do they jump-start before observing?',
    'Do they experiment patiently or give up quickly?',
    'Do they wait for instructions at every step?',
    'Do they test different ideas confidently?',
  ]

  return (
    <section className="py-16 bg-white relative">
      <div className="container-fluid max-w-5xl mx-auto">
        <div className="bg-[#FAF9F6] border border-neutral-100 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[80px]" />
          
          <div className="flex justify-center mb-10">
            <div className="w-16 h-16 bg-white border border-neutral-100 rounded-full shadow-sm flex items-center justify-center text-primary-300">
              <Eye size={28} />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-500 leading-tight mb-8">
              While Children Build and Solve, We Also Observe How They Approach Challenges.
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              During activities and challenges, facilitators naturally observe patterns that often come up at home too, but get unnoticed by parents
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-100 mb-12 relative z-10">
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 text-center">For example:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {observations.map((obs, i) => (
                <li key={i} className="flex gap-4 items-center bg-[#FAF9F6] p-4 rounded-xl border border-neutral-100">
                  <div className="w-2 h-2 rounded-full bg-accent-teal flex-shrink-0" />
                  <span className="text-neutral-700 font-medium italic">{obs}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center max-w-2xl mx-auto relative z-10 mb-12">
            <p className="text-xl text-primary-500 font-serif italic leading-relaxed">
              These observations are shared with parents through examples and discussions — helping parents support learning without over-helping.
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-6 py-3 rounded-full text-sm font-medium border border-red-100">
              <ShieldAlert size={16} />
              FunSmartism is not a therapy, diagnostic, or psychological assessment center.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
