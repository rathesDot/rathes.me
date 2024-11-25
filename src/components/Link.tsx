import React, { ComponentPropsWithRef } from "react"

import { cva, VariantProps } from "../../cva.config"
import { type LinkProps } from "next/link"
import BaseLink from "next/link"

export const link = cva({
  base: "text-currentColor antialiased transition-all",
  variants: {
    underlined: {
      true: "underline underline-offset-4 decoration-dashed hover:decoration-solid",
      false: "no-underline",
    },
  },
  defaultVariants: {
    underlined: true,
  },
})

export const Link: React.FC<
  ComponentPropsWithRef<"a"> & LinkProps & VariantProps<typeof link>
> = ({ className, underlined, ...props }) => (
  <BaseLink {...props} className={link({ underlined, className })} />
)
