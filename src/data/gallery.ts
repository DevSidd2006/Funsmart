import { type GalleryItem } from '../lib/types'

/**
 * CLIENT EDITING GUIDE:
 * To add a new photo to your gallery:
 * 1. Upload the photo to the 'public/images/' folder.
 * 2. Add a new block here { ... } with the correct 'image' file name.
 * 3. 'span' controls the size. Most use 'md:col-span-4' for a square.
 */

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/images/hero-child-discovery.png',
    title: 'Robotics & Electronics',
    caption: 'Children building robots, testing sensors, experimenting with circuits, and exploring electronics hands-on.',
    tag: 'ROBOTICS & ELECTRONICS',
    span: 'lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    image: '/images/discovery-moment.png',
    title: 'STEM Challenges & Problem Solving',
    caption: 'Moments from hands-on challenges where students test ideas, retry solutions, redesign structures, and solve unfamiliar problems.',
    tag: 'STEM CHALLENGES',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  },
  {
    id: 3,
    image: '/images/lab-observation.png',
    title: 'Reverse Engineering & How Stuff Works',
    caption: 'Children opening appliances, understanding mechanisms, exploring systems, and learning how real-world objects function.',
    tag: 'HOW STUFF WORKS',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  },
  {
    id: 4,
    image: '/images/aeromodeling.png',
    title: 'Rockets, Aeroplanes & Space Science',
    caption: 'Hands-on activities connected to flight, space science, astronomy, rockets, and model-building explorations.',
    tag: 'SPACE & AEROMODELLING',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  },
  {
    id: 5,
    image: '/images/pattern-recognition.png',
    title: 'Design Thinking & Innovation Activities',
    caption: 'Creative building, redesign tasks, brainstorming activities, and innovation-focused workshops.',
    tag: 'INNOVATION',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  },
  {
    id: 6,
    image: '/images/iterative-thinking.png',
    title: 'Edu-Events & Scientist Interactions',
    caption: 'Sessions, exhibitions, showcases, and interactions with scientists, innovators, engineers, and experts from real-world fields.',
    tag: 'EDU-EVENTS',
    span: 'lg:col-span-2 lg:row-span-1 md:col-span-1',
  },
  {
    id: 7,
    image: '/images/discovery-moment.png',
    title: 'Student Projects & Take-Home Creations',
    caption: 'Projects designed, built, tested, and taken home by students across different STEM themes.',
    tag: 'STUDENT PROJECTS',
    span: 'lg:col-span-2 lg:row-span-1 md:col-span-1',
  }
]

