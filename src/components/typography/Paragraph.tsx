import { HTMLAttributes } from "react"

import cx from "clsx"

export const Paragraph: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p
    className={cx(
      "mt-3 mb-6 text-base font-normal leading-relaxed text-neutral-800 dark:text-neutral-400",
      className
    )}
    {...props}
  >
    {props.children}
  </p>
)
