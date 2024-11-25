import React, { ComponentPropsWithRef } from "react"

import { cva, VariantProps } from "../../cva.config"
import { type LinkProps } from "next/link"
import BaseLink from "next/link"

export const link = cva({
  base: "text-current antialiased transition-colors dark:text-neutral-300 dark:hover:text-white",
  variants: {
    underlined: {
      true: "underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-400",
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
