import { ClipboardList } from 'lucide-react'

export default {
  name: 'programsPage',
  title: 'Programs Page',
  type: 'document',
  icon: ClipboardList,
  fields: [
    {
      name: 'title',
      title: 'Admin Title',
      type: 'string',
      initialValue: 'Programs Page Content',
      hidden: true
    },
    // --- SECTION 01: HERO ---
    {
      name: 'hero',
      title: 'Section 01: Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subline', title: 'Subline', type: 'text', rows: 3 },
      ]
    },
    // --- SECTION 06: FAQ ---
    {
      name: 'faqs',
      title: 'Section 06: FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ]
        }
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
      ]
    }
  ]
}
