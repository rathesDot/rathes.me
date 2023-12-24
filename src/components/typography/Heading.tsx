import React, { HTMLProps } from "react"
import { cva, cx, VariantProps } from "class-variance-authority"

export const heading = cva("antialiased font-sans", {
  variants: {
    size: {
      1: ["text-[clamp(24px,7.5vw,64px)]", "font-semibold", "leading-[1.15]"],
      2: ["text-[clamp(20px,6.25vw,48px)]", "font-semibold", "leading-[1.3]"],
      3: ["text-sm", "font-semibold"],
      4: [
        "text-xs",
        "font-normal",
        "leading-relaxed",
        "uppercase",
        "tracking-widest",
      ],
    },
  },
})

export type HeadingProps = VariantProps<typeof heading>

export const Heading1: React.FC<
  HTMLProps<HTMLHeadingElement> & HeadingProps
> = ({ className, size = 1, ...props }) => (
  <h1 {...props} className={cx(heading({ size }), className)} />
)

export const Heading2: React.FC<
  HTMLProps<HTMLHeadingElement> & HeadingProps
> = ({ className, size = 2, ...props }) => (
  <h2 {...props} className={cx(heading({ size }), className)} />
)

export const Heading3: React.FC<
  HTMLProps<HTMLHeadingElement> & HeadingProps
> = ({ className, size = 3, ...props }) => (
  <h3 {...props} className={cx(heading({ size }), className)} />
)

export const Heading4: React.FC<
  HTMLProps<HTMLHeadingElement> & HeadingProps
> = ({ className, size = 4, ...props }) => (
  <h4 {...props} className={cx(heading({ size }), className)} />
)
