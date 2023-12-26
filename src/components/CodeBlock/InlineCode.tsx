import { HTMLProps } from "react"

export const InlineCode: React.FC<HTMLProps<HTMLElement>> = ({ ...props }) => (
  <code
    className="whitespace-normal break-all rounded-sm bg-neutral-800 px-1 py-[0.1em] font-mono text-sm text-neutral-300/80"
    {...props}
  />
)
