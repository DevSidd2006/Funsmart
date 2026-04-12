import { type SchemaTypeDefinition } from 'sanity'

import faq from './schemas/faq'
import testimonial from './schemas/testimonial'
import program from './schemas/program'
import galleryItem from './schemas/galleryItem'
import hero from './schemas/hero'
import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, program, testimonial, faq, galleryItem, siteSettings],
}
