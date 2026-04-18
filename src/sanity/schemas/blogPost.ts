import { defineField, defineType } from 'sanity'
import { FileText } from 'lucide-react'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mental Models', value: 'MENTAL_MODELS' },
          { title: 'Philosophy', value: 'PHILOSOPHY' },
          { title: 'Leadership', value: 'LEADERSHIP' },
          { title: 'Child Development', value: 'CHILD_DEVELOPMENT' },
          { title: 'Lab Insights', value: 'LAB_INSIGHTS' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for the blog list page.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `Published on ${new Date(author).toLocaleDateString()}` }
    },
  },
})
