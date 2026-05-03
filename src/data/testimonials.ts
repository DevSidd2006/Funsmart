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
]
