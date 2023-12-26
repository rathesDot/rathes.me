import { cva } from "class-variance-authority"
import Image, { StaticImageData } from "next/image"
import React from "react"

type PhotoMode = "portrait" | "landscape"

const container = cva("flex flex-col gap-1", {
  variants: {
    mode: {
      landscape: "md:max-w-[672px]",
      portrait: "md:max-w-[320px]",
    },
  },
})

export const Photo: React.FC<{
  image: StaticImageData
  title: string
  caption: string
  mode?: PhotoMode
}> = ({ image, title, caption, mode = "portrait" }) => (
  <figure className={container({ mode })}>
    <Image src={image} alt={title} />
    <figcaption className="px-4 text-xs text-neutral-500">{caption}</figcaption>
  </figure>
)
