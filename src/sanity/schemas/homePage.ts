import { Home } from 'lucide-react'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Admin Title',
      type: 'string',
      initialValue: 'Homepage Content',
      hidden: true
    },
    // --- SECTION 01: HERO ---
    {
      name: 'hero',
      title: 'Section 01: Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Primary Headline', type: 'string', description: 'e.g., Where children build scientist-inspired future-ready thinking.' },
        { name: 'subheadline', title: 'Secondary Headline (Accent)', type: 'string', description: 'Green accented line (e.g., And parents learn when to step in—and when to step back.)' },
        { name: 'subline', title: 'Paragraph Subline', type: 'text', rows: 3, description: 'Hands-on RoboSTEM challenges...' },
        { name: 'microCopy', title: 'Supporting Micro-copy', type: 'string', description: 'Small italic text (e.g., For children aged 8–16 in Pune.)' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
      ]
    },
    // --- SECTION 02: WHAT MAKES THIS DIFFERENT ---
    {
      name: 'different',
      title: 'Section 02: What Makes This Different',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'A Different Kind of Learning' },
        { name: 'subheading', title: 'Sub-heading', type: 'string', initialValue: 'Will your child\'s true potential go unnoticed?' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        { name: 'image', title: 'Comparison Split Image', type: 'image', options: { hotspot: true } },
        {
          name: 'comparisonRows',
          title: 'Comparison Table Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Feature Text', type: 'string' }
              ]
            }
          ]
        }
      ]
    },
    // --- SECTION 03: LEARNING JOURNEY ---
    {
      name: 'journey',
      title: 'Section 03: Your Child\'s Learning Journey',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Your Child\'s Learning Journey' },
        {
          name: 'steps',
          title: 'Journey Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'stepNumber', title: 'Step Number', type: 'string' },
                { name: 'title', title: 'Step Title', type: 'string' },
                { name: 'description', title: 'Step Description', type: 'text', rows: 3 },
                { name: 'image', title: 'Step Image', type: 'image', options: { hotspot: true } }
              ]
            }
          ]
        }
      ]
    },
    // --- SECTION 04: MID-PAGE CTA ---
    {
      name: 'midPageCTA',
      title: 'Section 04: Mid-Page CTA',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string', initialValue: 'Wait, is this right for my child?' },
        { name: 'subheadline', title: 'Subheadline', type: 'string', initialValue: 'The best way to know is to see them in action.' },
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Book a Free Parent Orientation →' },
      ]
    },
    // --- SECTION 05: EDU EVENTS ---
    {
      name: 'eduEvents',
      title: 'Section 05: Edu Events',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'Year-long students don\'t just attend events. They run them.' },
        { name: 'subheading', title: 'Sub-heading (Accent)', type: 'string', initialValue: 'They run them.' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        {
          name: 'features',
          title: 'Event Roles/Features',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'gridImages',
          title: 'Photo Grid (4 images)',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: (Rule: any) => Rule.max(4)
        },
        { name: 'whyItMatters', title: 'Why it matters text', type: 'string' }
      ]
    },
    // --- SECTION 07: CLOSING CTA ---
    {
      name: 'closingCTA',
      title: 'Section 07: Closing CTA',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string', initialValue: 'Marks show outcomes.' },
        { name: 'subheadline', title: 'Subheadline', type: 'string', initialValue: 'Thinking habits shape futures.' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 }
      ]
    }
  ]
}
