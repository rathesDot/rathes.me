import { HTMLAttributes } from "react"

import cx from "clsx"

export const Note: React.FC<
  HTMLAttributes<HTMLDivElement> & { fontFamily?: "mono" }
> = ({ className, children, fontFamily, ...props }) => (
  <div
    className={cx(
      "my-8 -mx-8 rounded-lg bg-neutral-200 p-8 text-lg text-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 [&_p]:m-0 [&_p]:text-neutral-800 dark:[&_p]:text-neutral-500",
      { "font-mono": fontFamily === "mono" },
      className
    )}
    {...props}
  >
    {children}
  </div>
)
