import { HTMLAttributes } from "react"

import cx from "clsx"

export const Separator: React.FC<HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => (
  <hr
    className={cx(
      "my-8 w-6 border-2 border-neutral-300 dark:border-neutral-700"
    )}
    {...props}
  />
)
