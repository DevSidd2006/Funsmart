import { defineField, defineType } from 'sanity'
import { Layout } from 'lucide-react'

export default defineType({
  name: 'hero',
  title: 'Homepage Hero',
  type: 'document',
  icon: Layout,
  fields: [
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      description: 'The big bold text at the top of the homepage.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-headline',
      type: 'text',
      description: 'The smaller text below the headline.',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Schedule a Visit',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
