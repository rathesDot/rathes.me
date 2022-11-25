import React, { HTMLProps } from "react"
import { cva, cx, VariantProps } from "class-variance-authority"

export const link = cva(null, {
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
  <a {...props} className={cx(link({ underlined }), className)} />
)
