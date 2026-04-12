export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Admin Title',
      type: 'string',
      initialValue: 'About Page Content',
      hidden: true
    },
    {
      name: 'hero',
      title: 'About Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'text', rows: 3 },
        { name: 'description', title: 'Description', type: 'text', rows: 4 },
      ]
    },
    {
      name: 'beliefs',
      title: 'Our Beliefs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Belief Title', type: 'string' },
            { name: 'description', title: 'Belief Content', type: 'text', rows: 3 },
          ]
        }
      ]
    },
    {
      name: 'philosophy',
      title: 'Philosophy Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subheading', title: 'Sub-heading', type: 'string' },
        { name: 'detail', title: 'Detailed Text', type: 'text', rows: 5 },
      ]
    }
  ]
}
