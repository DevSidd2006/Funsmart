import { type Program } from '../lib/types'

export const programs: Program[] = [
  {
    id: 'workshop-10day',
    title: '10-Day Workshop',
    price: '₹12,000',
    duration: '/ 10 days',
    description: 'Intensive thinking exploration',
    features: [
      'Quick intro to thinking framework',
      'Summer camp intensive',
      'Try before committing',
      'Live sessions daily',
      'Detailed observation report',
      'Insights call with facilitator',
    ],
    cta: 'Learn More',
  },
  {
    id: 'program-yearlong',
    title: 'Year-Long Program',
    price: '₹8,000',
    duration: '/ month',
    description: 'Ongoing deep growth',
    features: [
      'Deep, ongoing growth',
      'Continuous learning',
      'Long-term insights',
      'Weekly check-ins',
      'Monthly progress reports',
      'Progress tracking over time',
    ],
    cta: 'Learn More',
  },
]
