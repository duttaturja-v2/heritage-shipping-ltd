"use client"

import { useState } from "react"

interface LeaderImageProps {
  src: string
  alt: string
  fallbackSrc: string
  className?: string
}

export function LeaderImage({ src, alt, fallbackSrc, className }: LeaderImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  return <img src={imgSrc || "/placeholder.svg"} alt={alt} className={className} onError={handleError} />
}
