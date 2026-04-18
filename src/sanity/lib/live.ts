import { defineLive } from 'next-sanity/live'
import { client, token } from './client'

export const { SanityLive, sanityFetch } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
