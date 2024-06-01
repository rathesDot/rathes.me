"use client"

import React, { ComponentPropsWithRef, useState } from "react"

import { cva } from "../../../cva.config"

const readMore = cva({
  base: "relative delay-100 after:h-8 after:bg-gradient-to-t after:from-neutral-950 after:absolute after:bottom-0 after:inset-x-0 transition-all ease-linear overflow-hidden",
  variants: {
    open: {
      false: "max-h-56 after:opacity-100",
      true: "max-h-[540px] after:opacity-0",
    },
  },
})

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
        className="mt-4 block font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-2 antialiased transition-colors hover:decoration-neutral-400"
      >
        {open ? "Read less" : "Continue Reading"}
      </button>
    </>
  )
}
