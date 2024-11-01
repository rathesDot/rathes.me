import React from "react"
import Image, { StaticImageData } from "next/image"

import { cva } from "../../cva.config"

type PhotoMode = "portrait" | "landscape"

const container = cva({
  base: "flex flex-col flex-none gap-1",
  variants: {
    mode: {
      landscape: "md:max-w-[672px]",
      portrait: "md:max-w-[320px]",
    },
    list: {
      true: "max-w-[320px]",
    },
  },
  compoundVariants: [
    {
      mode: "landscape",
      list: true,
      className: "max-w-[320px]",
    },
  ],
})

export const Photo: React.FC<{
  image: StaticImageData
  title: string
  caption?: string
  mode?: PhotoMode
  inList?: boolean
}> = ({ image, title, inList: list = false, caption, mode = "portrait" }) => (
  <figure className={container({ mode, list })}>
    <Image src={image} alt={title} />
    {caption && (
      <figcaption className="px-4 text-xs text-neutral-500">
        {caption}
      </figcaption>
    )}
  </figure>
)
