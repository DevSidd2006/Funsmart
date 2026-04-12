export default {
  name: 'labPage',
  title: 'Thinking Lab Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Admin Title',
      type: 'string',
      initialValue: 'Thinking Lab Page Content',
      hidden: true
    },
    {
      name: 'hero',
      title: 'Lab Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Top Headline (Line 1)', type: 'string' },
        { name: 'italicLine', title: 'Italic Headline (Line 2)', type: 'string' },
      ]
    },
    {
      name: 'theGap',
      title: 'Current Education Gap Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 4 },
      ]
    },
    {
      name: 'firstTenMinutes',
      title: 'The First 10 Minutes Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'time', title: 'Time Slot (e.g., Minute 1-2)', type: 'string' },
            { name: 'title', title: 'Phase Title', type: 'string' },
            { name: 'description', title: 'Phase Description', type: 'text', rows: 3 },
          ]
        }
      ]
    },
    {
      name: 'notList',
      title: 'What it is NOT (Checklist)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Item Title', type: 'string' },
            { name: 'description', title: 'Item Description', type: 'text', rows: 2 },
          ]
        }
      ]
    }
  ]
}
