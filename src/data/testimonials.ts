import { type Testimonial } from '../lib/types'

/**
 * CLIENT EDITING GUIDE:
 * To add a new testimonial, copy a block (everything from { to },) and paste it at the bottom.
 * Make sure to give it a unique ID number.
 */

export const testimonials: Testimonial[]
 = [
  {
    id: '1',
    quote: "At first he kept asking for help every few minutes. Slowly he started retrying on his own.",
    author: 'Parent',
    location: 'Pune',
    childAge: 9,
    program: 'Year-Long Program',
  },
  {
    id: '2',
    quote: "She came home and started opening old toys just to understand how they worked.",
    author: 'Parent',
    location: 'Pune',
    childAge: 11,
    program: '10-Day Workshop',
  },
  {
    id: '3',
    quote: "I realised I was giving instructions too quickly before letting her think.",
    author: 'Parent',
    location: 'Pune',
    childAge: 10,
    program: 'Parent Orientation',
  },
  {
    id: '4',
    quote: "He now tries multiple ideas before saying ‘I can’t do it.’",
    author: 'Parent',
    location: 'Pune',
    childAge: 12,
    program: 'STEM Challenge',
  },

  {
    id: '5',
    quote: "I came expecting a progress report like school. What I got was a conversation about how my daughter spends 10 minutes examining something before she ever tries to use it. That's not something any school has ever told me.",
    author: 'Priya M.',
    location: 'Pune',
    childAge: 11,
    program: 'Thinking Reset Workshop',
  },
  {
    id: '6',
    quote: "My son has been 'easily distracted' according to every teacher he's had. The team showed me he isn't distracted - he loses interest when the challenge isn't deep enough. That reframe changed everything.",
    author: 'Arvind M.',
    location: 'Pune',
    childAge: 13,
    program: 'FunSmartism RoboSTEM Thinking Lab Year-Long',
  },
  {
    id: '7',
    quote: 'She built a working model on Day 4 and then quietly started dismantling it to see if she could build it differently. Nobody asked her to. That moment told me more than three years of school report cards.',
    author: 'Sunita R.',
    location: 'Pune',
    childAge: 10,
    program: 'Thinking Reset Workshop',
  },
]

