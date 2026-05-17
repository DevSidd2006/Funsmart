import { Quote, Star, ThumbsUp } from 'lucide-react'

const defaultTestimonials = [
  {
    quote: "I came expecting a progress report like school. What I got was a conversation about how my daughter spends 10 minutes examining something before she ever tries to use it. That's not something any school has ever told me.",
    author: "Priya M.",
    role: "Parent · 11-year-old",
    initial: "PM",
  },
  {
    quote: "My son has been 'easily distracted' according to every teacher he's had. The team showed me he isn't distracted — he loses interest when the challenge isn't deep enough. That reframe changed everything.",
    author: "Arvind M.",
    role: "Parent · 13-year-old",
    initial: "AM",
  },
  {
    quote: "She built a working model on Day 4 and then quietly started dismantling it to see if she could build it differently. Nobody asked her to.",
    author: "Sunita R.",
    role: "Parent · 10-year-old",
    initial: "SR",
  },
  {
    quote: "At first he kept asking for help every few minutes. Slowly he started retrying on his own. That shift was gradual — and it's stayed.",
    author: "Parent",
    role: "Parent · 9-year-old",
    initial: "P",
  },
  {
    quote: "She came home and started opening old toys just to understand how they worked. I didn't expect that from a 10-day workshop.",
    author: "Parent",
    role: "Parent · 11-year-old",
    initial: "P",
  },
]

export function TestimonialsBlend({ data }: { data?: any[] }) {
  const testimonials = data && data.length > 0 ? data : defaultTestimonials

  return (
    <section className="section-spacing bg-[#d6c7b9] text-primary-500 relative overflow-hidden">
      <div className="container-fluid relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 leading-tight">
              Trusted by thinking parents.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-8 md:gap-6 lg:gap-8 pt-8">
              {/* Pill Shape - Testimonial 1 */}
              <div className="bg-white rounded-[3rem] p-6 pr-8 shadow-sm relative flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full bg-accent-teal flex items-center justify-center text-white font-serif text-xl flex-shrink-0 -ml-2 shadow-md border-4 border-white">
                  {testimonials[1]?.initial}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">{testimonials[1]?.author}</h4>
                  <div className="flex text-yellow-400 my-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-neutral-600 italic line-clamp-3 leading-relaxed">
                    "{testimonials[1]?.quote}"
                  </p>
                </div>
              </div>

              {/* Square Shape - Testimonial 3 */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm text-center relative mt-4">
                <h4 className="font-serif font-bold text-2xl mb-4">Top-notch!</h4>
                <p className="text-neutral-600 italic leading-relaxed text-sm mb-6">
                  "{testimonials[3]?.quote}"
                </p>
                <div className="flex justify-center text-neutral-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <div className="flex items-center gap-4 bg-neutral-50 p-3 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-accent-teal flex items-center justify-center text-white font-serif text-sm flex-shrink-0">
                    {testimonials[3]?.initial}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">{testimonials[3]?.author}</p>
                    <p className="text-[10px] text-neutral-500">{testimonials[3]?.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8 md:gap-6 lg:gap-8 relative mt-12 md:mt-0">
              {/* Large Central Card - Testimonial 0 */}
              <div className="bg-white rounded-[3rem] rounded-tl-3xl p-10 pt-16 shadow-lg text-center relative mt-10">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-accent-teal flex items-center justify-center text-white font-serif text-3xl shadow-xl border-8 border-[#d6c7b9]">
                  {testimonials[0]?.initial}
                </div>
                <h4 className="font-serif font-bold text-2xl tracking-widest uppercase mb-3">Excellent!</h4>
                <div className="flex justify-center text-[#d6c7b9] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-neutral-600 italic leading-relaxed mb-8">
                  "{testimonials[0]?.quote}"
                </p>
                <div className="font-serif text-2xl text-neutral-400 italic">
                  {testimonials[0]?.author}
                </div>
              </div>

              {/* Speech Bubble - Testimonial 4 */}
              <div className="bg-white rounded-[2rem] rounded-bl-none p-8 shadow-sm relative mt-4 ml-6 mr-4">
                <div className="absolute -bottom-4 left-0 w-8 h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-serif text-xl border-4 border-white shadow-sm">
                  {testimonials[4]?.initial}
                </div>
                <h4 className="font-serif font-bold text-lg tracking-widest uppercase mb-3 ml-6">Testimonial</h4>
                <p className="text-neutral-600 italic leading-relaxed text-sm mb-4">
                  "{testimonials[4]?.quote}"
                </p>
                <p className="font-bold text-sm text-right">@{testimonials[4]?.author.replace(' ', '')}</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8 md:gap-6 lg:gap-8 pt-4">
              {/* Wide Rectangle - Testimonial 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-serif font-bold text-lg">Parent Review</h4>
                  <p className="text-xs text-neutral-400">@{testimonials[2]?.author.replace(' ', '')}</p>
                </div>
                <p className="text-neutral-600 italic leading-relaxed text-sm mb-6">
                  "{testimonials[2]?.quote}"
                </p>
                <div className="flex items-center text-xs font-bold text-accent-teal uppercase tracking-widest">
                  Read More &rarr;
                </div>
              </div>

              {/* Pill Shape 2 - Additional item or reuse */}
              <div className="bg-white rounded-[3rem] p-6 pr-10 shadow-sm relative mt-4 ml-4 flex gap-4 items-center">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#a39180] flex items-center justify-center text-white shadow-md border-4 border-[#d6c7b9]">
                  <ThumbsUp size={20} />
                </div>
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 font-serif text-lg flex-shrink-0">
                  {testimonials[0]?.initial}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-md">{testimonials[0]?.author}</h4>
                  <p className="text-xs text-neutral-500 mb-2">{testimonials[0]?.role}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>

               {/* Quotation Bubble */}
               <div className="bg-white rounded-3xl rounded-br-none p-8 shadow-sm relative mt-6 mr-6">
                <div className="absolute -bottom-6 right-0 w-10 h-10 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                <Quote className="absolute -bottom-4 left-6 text-[#d6c7b9] rotate-180" size={50} />
                <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-accent-teal flex items-center justify-center text-white font-serif text-xl border-4 border-[#d6c7b9] shadow-sm">
                  {testimonials[2]?.initial}
                </div>
                <p className="text-neutral-600 italic leading-relaxed text-sm mb-6">
                  "{testimonials[2]?.quote}"
                </p>
                <p className="font-serif text-right text-lg">{testimonials[2]?.author}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
