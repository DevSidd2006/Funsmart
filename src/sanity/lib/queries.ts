import { groq } from 'next-sanity'

export const homePageQuery = groq`*[_type == "homePage"][0]`
export const aboutPageQuery = groq`*[_type == "aboutPage"][0]`
export const labPageQuery = groq`*[_type == "labPage"][0]`
export const settingsQuery = groq`*[_type == "siteSettings"][0]`
export const faqsQuery = groq`*[_type == "faq"] | order(order asc)`
export const testimonialsQuery = groq`*[_type == "testimonial"]`
export const programsQuery = groq`*[_type == "program"]`
export const galleryQuery = groq`*[_type == "galleryItem"]`
