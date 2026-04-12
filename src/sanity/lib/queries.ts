import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0]`
export const settingsQuery = groq`*[_type == "siteSettings"][0]`
export const faqsQuery = groq`*[_type == "faq"] | order(order asc)`
export const testimonialsQuery = groq`*[_type == "testimonial"]`
export const programsQuery = groq`*[_type == "program"]{
  ...,
  ageRange
}`
export const galleryQuery = groq`*[_type == "galleryItem"]{
  ...,
  "image": image.asset->url
}`
