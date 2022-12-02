import { HTMLProps } from "react"

export const InlineCode: React.FC<HTMLProps<HTMLElement>> = ({ ...props }) => (
  <code
    className="whitespace-normal break-all rounded bg-neutral-200 py-[0.1em] px-2 font-mono text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200"
    {...props}
  />
)
