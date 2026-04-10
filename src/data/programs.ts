import { type Program } from '../lib/types'

/**
 * CLIENT EDITING GUIDE:
 * To change program details, edit the text inside the quotation marks ("").
 * To add a new feature, add a new line inside the 'features' list with quotes and a comma.
 * DO NOT delete the curly braces {} or square brackets [].
 */

export const programs: Program[] = [
  {
    id: 'workshop-10day',
    title: '10-Day Workshop', // The name of the program
    price: '₹12,000',           // The cost
    duration: '/ 10 days',      // The time period
    description: 'Intensive thinking exploration', // Short summary
    features: [
      'Quick intro to thinking framework',
      'Summer camp intensive',
      'Try before committing',
      'Live sessions daily',
      'Detailed observation report',
      'Insights call with facilitator',
    ],
    cta: 'Learn More', // Text on the button
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
