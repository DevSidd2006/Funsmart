import { defineField, defineType } from 'sanity'
import { HelpCircle } from 'lucide-react'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircle,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The short, punchy question parents ask.',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      description: 'The detailed, reassuring answer.',
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Higher numbers appear later in the list.',
      initialValue: 0,
    }),
  ],
})
