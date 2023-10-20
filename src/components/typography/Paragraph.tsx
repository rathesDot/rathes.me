import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"

const styles = cva(
  "mt-3 mb-6 text-base font-normal leading-relaxed text-neutral-800 dark:text-neutral-400"
)

export const Paragraph: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p className={styles({ className })} {...props}>
    {props.children}
  </p>
)
