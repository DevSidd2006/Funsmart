'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export function Studio() {
  //  Supports the same props as `defineConfig`
  return <NextStudio config={config} />
}
