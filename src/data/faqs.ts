import { type FAQItem } from '../lib/types'

/**
 * CLIENT EDITING GUIDE:
 * To add a new FAQ, copy a block (everything from { to },) and paste it at the bottom.
 * Ensure the ID is unique (e.g., '5', '6', etc.)
 */

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'What if my child fails?',
    answer:
      'Failure is part of thinking. We observe how they handle it—not to judge, but to understand. That insight helps you at home and guides how you respond when they face challenges.',
  },
  {
    id: '2',
    question: 'Is my child falling behind?',
    answer:
      'This is about thinking patterns, not marks. We help you understand your child\'s approach to learning, which often reveals they\'re not behind—just different. Many "slow starters" are actually thoughtful problem-solvers.',
  },
  {
    id: '3',
    question: 'Will this affect school marks?',
    answer:
      'Many parents report that as children grow more confident in problem-solving, school performance improves naturally. But our focus is on thinking habits, not test scores. Better thinking habits lead to better everything.',
  },
  {
    id: '4',
    question: 'What if my child is shy?',
    answer:
      'Shyness is often misread as inability. Our facilitators create safe spaces where reserved children often surprise their parents. Many introverted kids shine when they\'re problem-solving rather than performing.',
  },
]
