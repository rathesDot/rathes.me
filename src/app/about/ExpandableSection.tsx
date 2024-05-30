"use client"

import React, { ComponentPropsWithRef, useState } from "react"
import { cva } from "class-variance-authority"

const readMore = cva(
  "relative delay-100 after:h-8 after:bg-gradient-to-t after:from-neutral-950 after:absolute after:bottom-0 after:inset-x-0 transition-all overflow-hidden md:columns-2 md:after:hidden md:[&>p]:mt-0 md:mt-8 md:gap-12 lg:columns-3 lg:max-w-5xl",
  {
    variants: {
      open: {
        false: "max-h-56 after:opacity-100 md:max-h-none",
        true: "max-h-[540px] after:opacity-0 md:max-h-none",
      },
    },
  }
)

export const ExpandableSection: React.FC<ComponentPropsWithRef<"section">> = ({
  className,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className={readMore({ open, className })} {...props} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-4 inline-block text-white underline underline-offset-2 md:hidden"
      >
        {open ? "Read less" : "Continue Reading"}
      </button>
    </>
  )
}
