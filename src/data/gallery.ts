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
    title: 'Precision in Action',
    caption: 'A moment of deep focus. Exploring the mechanical feedback of an automated gear system to build logical foresight.',
    tag: 'LOGIC & ROBOTICS',
    span: 'md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    id: 2,
    image: '/images/lab-observation.png',
    title: 'The Art of Observation',
    caption: 'Facilitators quietly map cognitive approaches rather than intervening to correct solutions.',
    tag: 'LAB INSIGHT',
    span: 'md:col-span-4 md:row-span-1 aspect-square',
  },
  {
    id: 3,
    image: '/images/discovery-moment.png',
    title: 'The Spark of Curiosity',
    caption: 'Peer collaboration revealing unscripted discoveries in a high-engagement environment.',
    tag: 'COGNITIVE REVELATION',
    span: 'md:col-span-4 md:row-span-1 aspect-square',
  },
  {
    id: 4,
    image: '', // Needs photo: e.g., '/images/aeromodeling.jpg'
    title: 'Focus Validation',
    caption: 'Concentrated effort in translating abstract logic into tangible motion.',
    tag: 'AEROMODELING',
    span: 'md:col-span-4 md:row-span-1 aspect-square bg-[#F8F9FB]',
  },
  {
    id: 5,
    image: '', // Needs photo
    title: 'Pattern Recognition',
    caption: 'Deciphering complex configurations independently without a manual.',
    tag: 'SPATIAL REASONING',
    span: 'md:col-span-4 md:row-span-1 aspect-square bg-[#F8F9FB]',
  },
  {
    id: 6,
    image: '', // Needs photo
    title: 'Iterative Thinking',
    caption: 'Trial, error, reflection, and adjustment. The core of unscripted discovery.',
    tag: 'SCIENTIFIC METHOD',
    span: 'md:col-span-4 md:row-span-1 aspect-square bg-[#F8F9FB]',
  }
]
