import { map } from 'rxjs'
import { DocumentLocationResolver } from 'sanity/presentation'

// Pass 'context' as the second argument if you need to use the client
export const locate: DocumentLocationResolver = (params, _context) => {
  if (params.type === 'homePage') {
    return {
      locations: [
        {
          title: 'Home',
          href: '/',
        },
      ],
    }
  }
  if (params.type === 'aboutPage') {
    return {
      locations: [
        {
          title: 'About',
          href: '/about',
        },
      ],
    }
  }
  if (params.type === 'labPage') {
    return {
      locations: [
        {
          title: 'Thinking Lab',
          href: '/thinking-lab',
        },
      ],
    }
  }
  if (params.type === 'program') {
    return {
      locations: [
        {
          title: 'Programs',
          href: '/programs',
        },
      ],
    }
  }
  return null
}
