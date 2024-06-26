import React, { ComponentPropsWithRef, ElementType, HTMLProps } from "react"

import { cva, VariantProps } from "../../cva.config"

export const heading = cva({
  base: "text-white antialiased mt-8",
  variants: {
    level: {
      h1: "text-2xl font-bold tracking-[-0.01em] leading-tight",
      h2: "text-lg font-semibold",
      h3: "text-base font-semibold",
      h4: "text-base font-normal",
      small: "text-xs font-semibold uppercase tracking-wide text-neutral-500",
    },
  },
})

export type HeadingProps<T extends ElementType> = VariantProps<typeof heading> &
  ComponentPropsWithRef<T>

export const Heading1: React.FC<HeadingProps<"h1">> = ({
  className,
  level = "h1",
  ...props
}) => <h1 {...props} className={heading({ level, className })} />

export const Heading2: React.FC<HeadingProps<"h2">> = ({
  className,
  level = "h2",
  ...props
}) => <h2 {...props} className={heading({ level, className })} />

export const Heading3: React.FC<HeadingProps<"h3">> = ({
  className,
  level = "h3",
  ...props
}) => <h3 {...props} className={heading({ level, className })} />

export const Heading4: React.FC<HeadingProps<"h4">> = ({
  className,
  level = "h4",
  ...props
}) => <h4 {...props} className={heading({ level, className })} />
