import { Home } from 'lucide-react'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // Use a custom icon if available, or just a string
  fields: [
    {
      name: 'title',
      title: 'Admin Title',
      type: 'string',
      initialValue: 'Homepage Content',
      hidden: true
    },
    // --- HERO SECTION ---
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string', description: 'Main tagline on the homepage' },
        { name: 'subheadline', title: 'Sub-headline', type: 'text', rows: 3 },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
      ]
    },
    // --- METHODOLOGY SECTION ---
    {
      name: 'methodology',
      title: 'Methodology (Discovery Journey)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'The Journey of Discovery' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Step Title', type: 'string' },
                { name: 'description', title: 'Step Description', type: 'text', rows: 3 },
                { 
                  name: 'icon', 
                  title: 'Icon Type', 
                  type: 'string', 
                  options: {
                    list: [
                      { title: 'Eye (Observation)', value: 'eye' },
                      { title: 'Beaker (Lab)', value: 'beaker' },
                      { title: 'Lightbulb (Idea)', value: 'lightbulb' },
                      { title: 'Brain (Thinking)', value: 'brain' },
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    // --- COMPARISON SECTION ---
    {
      name: 'comparison',
      title: 'Comparison Tracker (Traditional vs Thinking Lab)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'School vs. The Thinking Lab' },
        {
          name: 'rows',
          title: 'Comparison Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Category (Left)', type: 'string', placeholder: 'Focus' },
                { name: 'traditional', title: 'Traditional Approach', type: 'string' },
                { name: 'thinkingLab', title: 'Thinking Lab Approach', type: 'string' },
              ]
            }
          ]
        }
      ]
    }
  ]
}
