import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"

const styles = cva(
  "mt-3 mb-4 text-base leading-snug font-sans antialiased font-normal text-neutral-300/70 md:text-lg"
)

export const Paragraph: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p className={styles({ className })} {...props}>
    {props.children}
  </p>
)
