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
    // --- SECTION 01: HERO ---
    {
      name: 'hero',
      title: 'Section 01: Lab Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Top Headline (Line 1)', type: 'string', initialValue: 'We don\'t teach.' },
        { name: 'italicLine', title: 'Italic Headline (Line 2)', type: 'string', initialValue: 'We observe.' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }
      ]
    },
    // --- SECTION 03: WHAT HAPPENS INSIDE (Vignettes) ---
    {
      name: 'vignettes',
      title: 'Section 03: What Happens Inside',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'What Happens Inside the Lab?' },
        {
          name: 'stories',
          title: 'Vignette Stories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Story Title', type: 'string' },
                { name: 'description', title: 'Story Description', type: 'text', rows: 4 },
                { name: 'image', title: 'Story Image', type: 'image', options: { hotspot: true } }
              ]
            }
          ]
        }
      ]
    },
    // --- SECTION: FIRST TEN MINUTES ---
    {
      name: 'firstTenMinutes',
      title: 'Section: The First Ten Minutes',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'The First Ten Minutes' },
        {
          name: 'timeline',
          title: 'Timeline Phases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'time', title: 'Time Slot (e.g., Minute 1-2)', type: 'string' },
                { name: 'title', title: 'Phase Title', type: 'string' },
                { name: 'image', title: 'Phase Image', type: 'image', options: { hotspot: true } }
              ]
            }
          ]
        }
      ]
    },
    // --- SECTION: HOW WE OBSERVE (Icons) ---
    {
      name: 'observation',
      title: 'Section: How We Observe',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'How We Observe' },
        {
          name: 'items',
          title: 'Observation Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Item Title', type: 'string' },
                { name: 'icon', title: 'Icon Name (eye, arrows, question, retry)', type: 'string' }
              ]
            }
          ]
        }
      ]
    },
    // --- SECTION 06: WHAT PARENTS RECEIVE ---
    {
      name: 'parentInsights',
      title: 'Section 06: What Parents Receive',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'Not a score. Not a rank. Something more useful.' },
        {
          name: 'cards',
          title: 'Insight Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question Heading', type: 'string' },
                { name: 'answer', title: 'Observation Answer', type: 'text', rows: 3 }
              ]
            }
          ]
        }
      ]
    },
    // --- SECTION: SCIENTIST INTERACTION STRIP ---
    {
      name: 'scientistStrip',
      title: 'Scientist Interaction Strip',
      type: 'object',
      fields: [
        { name: 'title', title: 'Strip Title', type: 'string', initialValue: 'Scientist interaction beyond the lab' },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        { name: 'institutions', title: 'Institution Logos/Names', type: 'string', description: 'e.g., ISRO · DRDO · IISER' },
        { name: 'image', title: 'Representative Photo', type: 'image', options: { hotspot: true } }
      ]
    },
    // --- SECTION 07: CLOSING CTA ---
    {
      name: 'closingCTA',
      title: 'Section 07: Closing CTA',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subheadline', title: 'Subheadline', type: 'string' },
        { name: 'primaryButton', title: 'Primary Button Text', type: 'string' },
        { name: 'secondaryButton', title: 'Secondary Button Text', type: 'string' }
      ]
    }
  ]
}
