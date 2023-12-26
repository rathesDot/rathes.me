import Image, { StaticImageData } from "next/image"
import React from "react"

export const Photo: React.FC<{
  image: StaticImageData
  title: string
  caption: string
}> = ({ image, title, caption }) => (
  <figure className="flex flex-col gap-1">
    <Image src={image} alt={title} />
    <figcaption className="px-4 text-xs text-neutral-500">{caption}</figcaption>
  </figure>
)
