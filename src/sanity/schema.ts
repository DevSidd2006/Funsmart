import { type SchemaTypeDefinition } from 'sanity'

import faq from './schemas/faq'
import testimonial from './schemas/testimonial'
import program from './schemas/program'
import galleryItem from './schemas/galleryItem'
import homePage from './schemas/homePage'
import aboutPage from './schemas/aboutPage'
import labPage from './schemas/labPage'
import programsPage from './schemas/programsPage'
import blogPost from './schemas/blogPost'
import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, aboutPage, labPage, programsPage, program, testimonial, faq, galleryItem, blogPost, siteSettings],
}



