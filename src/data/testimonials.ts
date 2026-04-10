import { type Testimonial } from '../lib/types'

/**
 * CLIENT EDITING GUIDE:
 * To add a new testimonial, copy a block (everything from { to },) and paste it at the bottom.
 * Make sure to give it a unique ID number.
 */

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "I realized my son wasn't shy—he just needed real problems. Watching him solve this, I felt proud.",
    author: 'Rahul M', // Parent's name
    location: 'Mumbai',
    child: 'Adarsh',   // Child's name
    childAge: 10,      // Child's age
  },
  {
    id: '2',
    quote:
      "She doesn't give up as quickly now. The confidence is coming from inside.",
    author: 'Anjali P',
    location: 'Bangalore',
    child: 'Sejal',
    childAge: 9,
  },
  {
    id: '3',
    quote:
      'The feedback was so detailed. I finally understand why we clash over homework.',
    author: 'Vikram K',
    location: 'Pune',
    child: 'Diya',
    childAge: 12,
  },
  {
    id: '4',
    quote:
      "He actually wants to work on problems now. That's the real win.",
    author: 'Priya R',
    location: 'Delhi',
    child: 'Vikram',
    childAge: 11,
  },
]
