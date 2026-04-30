import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fursmartism.vercel.app'

export const metadata: Metadata = {
  title: 'What is the FunSmartism RoboSTEM Thinking Lab? | FunSmartism',
  description: "We don't teach. We observe. The FunSmartism RoboSTEM Thinking Lab makes real-world problem-solving visible through real challenges, parent insight observations, and interaction sessions.",
  keywords: [
    'thinking lab for kids in Pune',
    'STEM thinking lab Pune',
    'hands-on learning for children',
    'child problem solving workshop Pune',
    'hands-on robotics thinking lab',
    'how children think during problem solving',
    'RoboSTEM Thinking Lab',
    'scientist interaction sessions',
    'problem-solving skills',
    'parent insight observations',
    'Pune',
  ],
  openGraph: {
    title: 'What is the FunSmartism RoboSTEM Thinking Lab?',
    description: 'Schools show what children know. The FunSmartism RoboSTEM Thinking Lab reveals how they think when the path is unclear.',
    url: `${siteUrl}/thinking-lab`,
    type: 'article',
  },
}
