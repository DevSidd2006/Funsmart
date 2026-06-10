import { Metadata } from 'next'
import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Insights on Child Development & STEM | FunSmartism',
  description: 'Read our latest articles on improving problem-solving in children, STEM activities in Pune, and how observation-driven learning builds independent thinkers.',
  keywords: ['STEM education blog', 'parenting insights Pune', 'problem-solving children', 'RoboSTEM blog'],
}

const posts = [
  {
    title: 'Robotics Class vs. Thinking Lab: What’s the Difference?',
    slug: 'robotics-class-vs-thinking-lab',
    excerpt: 'Many parents sign up for robotics classes expecting problem-solving, but often children just follow instruction manuals. Learn why a Thinking Lab focuses on the process of creation.',
    date: 'Jun 10, 2026',
    category: 'STEM Education'
  },
  {
    title: 'How to Improve Problem Solving in Children',
    slug: 'improve-problem-solving-children',
    excerpt: 'Is your child struggling when they encounter an unfamiliar problem? Discover actionable ways to help them build resilience and think independently.',
    date: 'Jun 05, 2026',
    category: 'Child Development'
  },
  {
    title: 'Signs Your Child is Over-Dependent on Instructions',
    slug: 'signs-child-over-dependent-instructions',
    excerpt: 'Does your child freeze without a step-by-step guide? Here’s how to identify instruction-dependency and foster self-directed exploration.',
    date: 'May 28, 2026',
    category: 'Parenting Insights'
  },
  {
    title: 'Best STEM Activities for 10-Year-Olds in Pune',
    slug: 'stem-activities-10-year-olds-pune',
    excerpt: 'Looking for engaging STEM activities in Pune? Move beyond screens and explore hands-on challenges that genuinely excite 10-year-olds.',
    date: 'May 15, 2026',
    category: 'Local Guide'
  }
]

export default function BlogIndex() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24">
      <div className="container-fluid max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-500 mb-6 tracking-tight">
              Insights & Observations
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mx-auto">
              Articles on how children learn, the hidden gaps in traditional education, and building independent thinkers.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <SectionReveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block h-full group bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">{post.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4 group-hover:text-accent-teal transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary-500 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} className="ml-1" />
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
