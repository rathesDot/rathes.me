import { HTMLProps } from "react"
import { cva } from "class-variance-authority"

const styles = cva(
  "my-8 -mx-8 overflow-x-auto border px-[1em] py-8 border-neutral-800 bg-neutral-900"
)

export const CodeBlock: React.FC<HTMLProps<HTMLPreElement>> = ({
  className,
  ...props
}) => <pre className={styles({ className })} {...props} />
