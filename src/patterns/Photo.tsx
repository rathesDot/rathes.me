import React from "react"
import Image, { StaticImageData } from "next/image"

import { cva } from "../../cva.config"

type PhotoMode = "portrait" | "landscape"

const container = cva({
  base: "flex flex-col flex-none gap-1",
  variants: {
    mode: {
      landscape: "md:max-w-[656px] md:col-span-2",
      portrait: "md:max-w-[320px]",
    },
  },
})

export const Photo: React.FC<{
  image: StaticImageData
  title: string
  caption?: string
  mode?: PhotoMode
}> = ({ image, title, caption, mode = "portrait" }) => (
  <figure className={container({ mode })}>
    <Image src={image} alt={title} />
    {caption && (
      <figcaption className="px-4 text-xs text-neutral-500 dark:text-neutral-400">
        {caption}
      </figcaption>
    )}
  </figure>
)
