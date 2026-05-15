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
    image: '/images/gallery/stem-challenge-bibwewadi.jpg',
    title: 'STEM Challenge Bibwewadi',
    caption: 'Children engaging in hands-on STEM challenges, building structures and testing their designs.',
    tag: 'STEM CHALLENGES',
    span: 'lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2',
  },
  {
    id: 3,
    image: '/images/gallery/robotics-review.jpg',
    title: 'Robotics Design Review',
    caption: 'Children discussing their robot designs and troubleshooting code during a robotics workshop.',
    tag: 'ROBOTICS',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  },
  {
    id: 5,
    image: '/images/gallery/stem-bridge-challenge.jpg',
    title: 'Bridge Engineering Challenge',
    caption: 'A moment from our bridge building challenge where students learn about structural integrity.',
    tag: 'ENGINEERING',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  },
  {
    id: 7,
    image: '/images/gallery/student-project-1.jpg',
    title: 'Hands-on Learning Moments',
    caption: 'Every project is an opportunity for children to solve unfamiliar problems independently.',
    tag: 'STUDENT PROJECTS',
    span: 'lg:col-span-2 lg:row-span-1 md:col-span-1',
  },
  {
    id: 11,
    image: '/images/gallery/workshop-mass.jpg',
    title: 'Large Group Challenge',
    caption: 'Dozens of students proudly showcasing their finished projects at the conclusion of a major hands-on workshop.',
    tag: 'WORKSHOP',
    span: 'lg:col-span-2 lg:row-span-1 md:col-span-2',
  },
  {
    id: 12,
    image: '/images/gallery/student-project-2.jpg',
    title: 'Innovative Prototype',
    caption: 'A close-up look at a student-designed prototype during our advanced robotics challenge.',
    tag: 'STUDENT PROJECTS',
    span: 'lg:col-span-1 lg:row-span-1 md:col-span-1',
  }
]

export const newsItems: GalleryItem[] = [
  {
    id: 101,
    image: '/images/news/abhyuday-times.jpg',
    title: 'Abhyuday Times News',
    caption: 'Coverage of FunSmartism innovative RoboSTEM approach in Abhyuday Times.',
    tag: 'MEDIA COVERAGE',
  },
  {
    id: 102,
    image: '/images/news/dailyhunt.png',
    title: 'DailyHunt Feature',
    caption: 'FunSmartism reaching thousands of students via the DailyHunt digital platform.',
    tag: 'DIGITAL MEDIA',
  },
  {
    id: 103,
    image: '/images/news/dainik-bhaskar.png',
    title: 'Dainik Bhaskar Coverage',
    caption: 'Featured in Dainik Bhaskar for our hands-on learning workshops.',
    tag: 'NEWS',
  },
  {
    id: 105,
    image: '/images/news/hindustan-saga.png',
    title: 'Hindustan Saga',
    caption: 'Spreading the vision of RoboSTEM Thinking through Hindustan Saga.',
    tag: 'MEDIA',
  },
  {
    id: 106,
    image: '/images/news/mumbai-tarun-news.png',
    title: 'Mumbai Tarun Bharat',
    caption: 'Mumbai Tarun Bharat highlighting the importance of independent thinking in children.',
    tag: 'NEWS',
  },
  {
    id: 107,
    image: '/images/news/lokmat-news.png',
    title: 'Lokmat News',
    caption: 'Coverage in Lokmat newspaper regarding FunSmartism activities.',
    tag: 'NEWS',
  },
  {
    id: 108,
    image: '/images/gallery/chandrayan-workshop-news.jpg',
    title: 'Chandrayan 3 Workshop',
    caption: 'News coverage of our Chandrayan 3 model making workshop where students built their own lunar missions.',
    tag: 'MEDIA COVERAGE',
  },
  {
    id: 109,
    image: '/images/gallery/dipali-news.jpg',
    title: 'Founder in News',
    caption: 'Dipali Akolkar featured in Navrashtra news, discussing the importance of hands-on RoboSTEM thinking labs.',
    tag: 'MEDIA COVERAGE',
  },
  {
    id: 110,
    image: '/images/news/deccan-business.png',
    title: 'Deccan Business Feature',
    caption: 'Coverage of FunSmartism’s growth and impact in the Deccan Business news outlet.',
    tag: 'NEWS',
  }
]

