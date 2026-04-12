import { defineField, defineType } from 'sanity'
import { Beaker } from 'lucide-react'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  icon: Beaker,
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      description: 'e.g., 10-Day Thinking Reset Workshop',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag Line',
      type: 'string',
      description: 'Small text above title (e.g. "AGE 8-16")',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 10 Days, Every Weekend',
    }),
    defineField({
      name: 'ageRange',
      title: 'Recommended Age',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price Info',
      type: 'string',
      description: 'Optional price or "Contact for details"',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      description: 'Detailed explanation of what happens in the program.',
    }),
    defineField({
      name: 'features',
      title: 'Key Highlights',
      type: 'array',
      description: 'Bullet points of what kids get.',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action Button',
      type: 'string',
      initialValue: 'Schedule a Visit',
    }),
    defineField({
      name: 'variant',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Normal (White)', value: 'surface' },
          { title: 'Featured (Dark)', value: 'indigo' },
        ],
      },
      initialValue: 'surface',
    }),
  ],
})
