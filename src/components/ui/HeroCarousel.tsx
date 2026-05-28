'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroCarouselProps {
  images: string[]
  headline: string
  hoverEffect?: boolean
}

export function HeroCarousel({ images, headline, hoverEffect = false }: HeroCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [loadOthers, setLoadOthers] = useState(false)

  useEffect(() => {
    // Delay loading the rest of the images to prioritize the LCP image
    const othersTimer = setTimeout(() => {
      setLoadOthers(true)
    }, 1500)

    const carouselTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    
    return () => {
      clearTimeout(othersTimer)
      clearInterval(carouselTimer)
    }
  }, [images.length])

  return (
    <>
      <Image
        src={images[0]}
        alt={headline}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-cover transition-all duration-1000 ${
          hoverEffect ? 'group-hover:scale-110' : ''
        } ${
          0 === currentImage
            ? `opacity-100 ${hoverEffect ? 'scale-100' : ''}`
            : `opacity-0 ${hoverEffect ? 'scale-110' : ''}`
        }`}
      />
      {loadOthers && images.slice(1).map((img, idx) => (
        <Image
          key={idx + 1}
          src={img}
          alt={headline}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-all duration-1000 ${
            hoverEffect ? 'group-hover:scale-110' : ''
          } ${
            idx + 1 === currentImage
              ? `opacity-100 ${hoverEffect ? 'scale-100' : ''}`
              : `opacity-0 ${hoverEffect ? 'scale-110' : ''}`
          }`}
        />
      ))}
    </>
  )
}
