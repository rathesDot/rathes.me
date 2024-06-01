import React, { HTMLProps } from "react"
import { cva, VariantProps } from "cva"

export const link = cva({
  variants: {
    underlined: {
      true: ["underline"],
      false: ["no-underline"],
    },
  },
  defaultVariants: {
    underlined: false,
  },
})

export const Link: React.FC<
  HTMLProps<HTMLAnchorElement> & VariantProps<typeof link>
> = ({ className, underlined, ...props }) => (
  <a {...props} className={link({ underlined, className })} />
)
