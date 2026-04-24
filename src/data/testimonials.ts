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
      "I came expecting a progress report like school. What I got was a conversation about how my daughter spends 10 minutes examining something before she ever tries to use it. That's not something any school has ever told me.",
    author: 'Priya M.',
    location: 'Pune',
    childAge: 11,
    program: 'Thinking Reset Workshop',
  },
  {
    id: '2',
    quote:
      "My son has been 'easily distracted' according to every teacher he's had. The team showed me he isn't distracted - he loses interest when the challenge isn't deep enough. That reframe changed everything.",
    author: 'Arvind M.',
    location: 'Pune',
    childAge: 13,
    program: 'FunSmartism RoboSTEM Thinking Lab Year-Long',
  },
  {
    id: '3',
    quote:
      'She built a working model on Day 4 and then quietly started dismantling it to see if she could build it differently. Nobody asked her to. That moment told me more than three years of school report cards.',
    author: 'Sunita R.',
    location: 'Pune',
    childAge: 10,
    program: 'Thinking Reset Workshop',
  },
]
