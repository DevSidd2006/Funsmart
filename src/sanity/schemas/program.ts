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
      description: 'Small text above title (e.g. "THE PROGRAM")',
    }),
    defineField({
      name: 'tagDetail',
      title: 'Tag Detail',
      type: 'string',
      description: 'e.g. "Entry program · 10 consecutive days"',
    }),
    defineField({
      name: 'subline',
      title: 'Short Subline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'childrenDo',
      title: 'Children Do (List)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'parentsReceive',
      title: 'Parents Receive (List)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'variant',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Teal (Workshop)', value: 'teal' },
          { title: 'Indigo (Year-Long)', value: 'indigo' },
        ],
      },
      initialValue: 'teal',
    }),
    defineField({
      name: 'themes',
      title: 'Monthly/Daily Themes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'theme', title: 'Theme Name', type: 'string' },
            { name: 'desc', title: 'What the child encounters', type: 'text', rows: 2 },
          ]
        }
      ]
    }),
  ],
})
