import { defineField, defineType } from 'sanity'
import { Image as ImageIcon } from 'lucide-react'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Moment',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Short Title',
      type: 'string',
      description: 'e.g. Precision in Action',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Full Caption',
      type: 'text',
      description: 'The story behind this image.',
    }),
    defineField({
      name: 'image',
      title: 'The Photograph',
      type: 'image',
      options: {
        hotspot: true, // Enables focal point selection
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Internal Tag',
      type: 'string',
      description: 'e.g. SCIENTIFIC_METHOD, COLLABORATION',
    }),
    defineField({
      name: 'span',
      title: 'Display Size',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'col-span-1' },
          { title: 'Extra Wide', value: 'col-span-2' },
        ],
      },
      initialValue: 'col-span-1',
    }),
  ],
})
