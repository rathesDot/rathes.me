import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"

const styles = cva(
  [
    "my-8 -mx-8 list-inside list-decimal rounded-lg bg-neutral-200 py-8 px-12 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-500",
    "[&_ol]:mx-0 [&_ol]:my-2 [&_ol]:mb-4 [&_ol]:py-0 [&_ol]:pl-6",
    "[&_li]:my-2 [&_li]:mx-0",
    "[&_p]:m-0  [&_p]:text-sm [&_p]:text-neutral-800 [&_p]:dark:text-neutral-500",
  ],
  {
    variants: {
      fontFamily: {
        mono: "font-mono",
      },
    },
  }
)

export const OrderedList: React.FC<
  HTMLAttributes<HTMLOListElement> & { fontFamily?: "mono" }
> = ({ className, children, fontFamily, ...props }) => (
  <ol className={styles({ fontFamily, className })} {...props}>
    {children}
  </ol>
)
