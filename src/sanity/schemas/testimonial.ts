import { defineField, defineType } from 'sanity'
import { MessageSquareQuote } from 'lucide-react'

export default defineType({
  name: 'testimonial',
  title: 'Parent Testimonial',
  type: 'document',
  icon: MessageSquareQuote,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The actual feedback from the parent. Keep it authentic and emotive.',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      description: 'The parent\'s name (e.g., Anjali P.)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Bangalore, Mumbai',
    }),
    defineField({
      name: 'childName',
      title: 'Child Name (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'childAge',
      title: 'Child Age (Optional)',
      type: 'number',
    }),
  ],
})
