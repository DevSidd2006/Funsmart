import Image from 'next/image'
import { cn } from '@/lib/cn'

const experts = [
  {
    name: 'Dr. R. Mashelkar',
    img: '/images/gallery/scientist-raghunath-mashelkar.jpg',
    pos: 'object-[center_10%]',
    role: 'Former DG, CSIR',
    note: 'A conversation on curiosity-driven innovation and why India needs more makers, not just test-takers.',
  },
  {
    name: 'Dr. Anil Kakodkar',
    img: '/images/gallery/scientist-anil-kakodkar.png',
    pos: 'object-[75%_20%]',
    role: 'Former Chairman, Atomic Energy Commission',
    note: 'Discussions on scientific temperament and building a culture of deep thinking from a young age.',
  },
  {
    name: 'Prof. Jayant Narlikar',
    img: '/images/gallery/scientist-jayant-naralikar.jpg',
    pos: 'object-[70%_center]',
    role: 'Astrophysicist & Science Communicator',
    note: 'Inspired by his belief that wonder is the first step to science — a principle FunSmartism carries into every session.',
  },
  {
    name: 'S. Somanath',
    img: '/images/scientists/somnath.jpg',
    pos: 'object-[85%_center]',
    role: 'Chairman, ISRO',
    note: 'A reminder that every great mission starts with children who dare to ask "what if?"',
  },
  {
    name: 'Arvind Gupta',
    img: '/images/scientists/arvind-gupta.jpg',
    pos: 'object-[35%_center]',
    role: 'Educator & Toy Inventor',
    note: 'His philosophy of learning through simple, hands-on making deeply shapes how FunSmartism designs its projects.',
  },
  {
    name: 'A.K. Sinha',
    img: '/images/scientists/ak-sinha.jpg',
    pos: 'object-center',
    role: 'Scientist & Educator',
    note: 'Conversations around the value of persistence and experimentation in building real understanding.',
  },
  {
    name: 'Kashinath Deodhar',
    img: '/images/scientists/kashinath-deodhar.jpg',
    pos: 'object-center',
    role: 'Innovator',
    note: 'An inspiring exchange on grassroots innovation and how local problems are the best classrooms.',
  },
  {
    name: 'Pramod Khandekar',
    img: '/images/scientists/pramod-khandekar.jpg',
    pos: 'object-center',
    role: 'Science Communicator',
    note: 'A discussion that reinforced the idea: if you can explain it simply, you truly understand it.',
  },
  {
    name: 'Shirish Deshmukh',
    img: '/images/scientists/shirish-deshmukh.jpg',
    pos: 'object-center',
    role: 'Educator & Mentor',
    note: 'Interactions focused on nurturing independent thought and reducing over-dependence on instruction.',
  },
  {
    name: 'Dr. Mukund Muharir',
    img: '/images/scientists/dr-mukund-muharir.jpg',
    pos: 'object-center',
    role: 'Researcher',
    note: 'Conversations on how structured curiosity leads to meaningful discovery — in labs and in life.',
  },
  {
    name: 'Shrirang Gokhale',
    img: '/images/scientists/shrirang-gokhale.jpg',
    pos: 'object-center',
    role: 'Author & Thinker',
    note: 'An exchange that reminded us: stories and science are not opposites — both begin with imagination.',
  },
  {
    name: 'Bal Patil',
    img: '/images/scientists/bal-patil.jpg',
    pos: 'object-[center_20%]',
    role: 'Scientist',
    note: 'Inspired by his dedication to applied science and bridging the gap between theory and real-world use.',
  },
  {
    name: 'Jayesh Rathore',
    img: '/images/scientists/jayesh-rathore.jpg',
    pos: 'object-center',
    role: 'Educator & STEM Advocate',
    note: 'A shared belief in project-based learning as the most effective way to build real capability.',
  },
  {
    name: 'Uday Deshpande',
    img: '/images/scientists/uday-deshpande.jpg',
    pos: 'object-center',
    role: 'Innovator & Mentor',
    note: 'Discussions on mentorship — how the right question at the right moment can change a child\'s trajectory.',
  },
]

export function InspirationSection() {
  return (
    <section className="py-20 bg-[#151F32] text-white overflow-hidden relative border-y border-accent-teal/20">
      {/* Background depth effects */}
      <div className="absolute inset-0 lab-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent-teal/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/25 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />

      <div className="container-fluid max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
            Experts & Mentors Who{' '}
            <span className="text-accent-teal italic font-light">Inspired FunSmartism</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-light">
            FunSmartism draws inspiration from conversations, meetings, and learning moments with some
            of India's most accomplished scientists, educators, and innovators. These interactions
            continue to shape how we think about curiosity, building, and teaching children to think.
          </p>
        </div>

        {/* Expert Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-16">
          {experts.map((expert, i) => (
            <div
              key={i}
              className="group relative rounded-[1.5rem] overflow-hidden bg-white/5 border border-white/10 hover:border-accent-teal/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className={cn('object-cover transition-transform duration-700 group-hover:scale-110', expert.pos)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[11px] font-bold text-white uppercase tracking-[0.18em] leading-tight text-center drop-shadow-lg">
                    {expert.name}
                  </p>
                  <p className="text-[10px] text-accent-teal text-center mt-0.5 font-medium opacity-90">
                    {expert.role}
                  </p>
                </div>
              </div>

              {/* Note — slides up on hover */}
              <div className="absolute inset-0 bg-[#0d1624]/95 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[13px] text-white/85 leading-relaxed text-center italic">
                  &ldquo;{expert.note}&rdquo;
                </p>
              </div>
            </div>
          ))}

          {/* Extra interaction card */}
          <div className="group relative rounded-[1.5rem] overflow-hidden bg-white/5 border border-white/10 hover:border-accent-teal/50 transition-all duration-500">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/gallery/scientist-interaction.jpg"
                alt="Expert Interaction"
                fill
                sizes="20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] font-bold text-white uppercase tracking-[0.18em] leading-tight text-center drop-shadow-lg">
                  Expert Interaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="bg-white/[0.04] border border-white/10 rounded-[2rem] p-8 md:p-10 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-teal rounded-l-[2rem]" />
          <p className="text-base md:text-lg text-white/75 leading-relaxed font-light mb-4">
            FunSmartism values learning from people who have pushed the boundaries of science,
            education, and human potential. We believe that exposure to such minds — even through
            a single conversation — can spark something lasting in a child.
          </p>
          <p className="text-accent-teal italic font-medium text-base">
            We continue to seek interactions with exceptional scientists, educators, and innovators,
            and may collaborate with similar personalities in the future.
          </p>
        </div>

      </div>
    </section>
  )
}
