import { HTMLProps } from "react"
import cx from "clsx"

export const CodeBlock: React.FC<HTMLProps<HTMLPreElement>> = ({
  className,
  ...props
}) => (
  <pre
    className={cx(
      "my-4 -mx-8 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-100 p-[1em] dark:border-neutral-800 dark:bg-neutral-900",
      className
    )}
    {...props}
  />
)
