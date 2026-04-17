import { Card } from '../ui/Card'

const moments = [
  {
    title: "A 10-year-old and a gear system she'd never seen before.",
    text: "She didn't touch it for the first eight minutes. Just looked. Tilted her head. Looked from a different angle. When she finally reached out, her first move was to turn the largest gear — testing the system before committing to it. Her parent had described her as 'slow to start things'. We described it as a real problem solving way of first observing the system. Same child. Different lens.",
  },
  {
    title: "A 12-year-old who failed four times and kept going.",
    text: "His fourth attempt didn't work either. He sat back, stared at the ceiling for about thirty seconds, then picked up the materials and tried something genuinely different. Not a variation — a different approach entirely. That shift is harder than it sounds. Most adults default to trying the same thing faster. He did it at twelve, without being asked.",
  },
  {
    title: "A 14-year-old who explained her project to a scientist during one of our school and edu innovation events.",
    text: "She'd spent a month building a working model during the year-long program. At the event, a researcher asked her how it worked. She answered — clearly, confidently, technically. And then asked the researcher a question back. Her mother said she'd never heard her daughter speak to an adult that way. We weren't surprised. We'd been watching her think for eight weeks.",
  },
]

export function RealSessionMoments() {
  return (
    <section className="relative bg-white py-[80px]">
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-600 leading-tight">
            Three moments from real sessions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {moments.map((moment) => (
            <Card
              key={moment.title}
              className="relative overflow-hidden rounded-[20px] bg-neutral-50 border border-neutral-200 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 rounded-r-xl bg-primary-600" />
              <div className="relative">
                <h3 className="text-2xl font-serif font-bold text-[#16213B] mb-4">
                  {moment.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {moment.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
