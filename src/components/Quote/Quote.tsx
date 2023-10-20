import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"

const styles = cva(
  "my-8 -mx-8 rounded-lg bg-neutral-200 p-8 text-lg text-neutral-800 dark:bg-neutral-800 [&_p]:m-0 [&_p]:text-neutral-800 dark:[&_p]:text-neutral-500"
)

export const Quote: React.FC<HTMLAttributes<HTMLQuoteElement>> = ({
  className,
  children,
  ...props
}) => (
  <blockquote className={styles({ className })} {...props}>
    {children}
  </blockquote>
)
