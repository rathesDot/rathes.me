import { HTMLAttributes } from "react"

import { cva } from "../../../cva.config"

const styles = cva({
  base: [
    "list-decimal text-neutral-200/70 antialiased pl-5 mb-8",
    "[&_ol]:mx-0 [&_ol]:my-2 [&_ol]:mb-4 [&_ol]:py-0 [&_ol]:pl-6",
    "[&_li]:my-2 [&_li]:mx-0",
    "[&_p]:m-0  [&_p]:text-sm [&_p]:text-neutral-200/70",
  ],
  variants: {
    fontFamily: {
      mono: "font-mono",
    },
  },
})

export const OrderedList: React.FC<
  HTMLAttributes<HTMLOListElement> & { fontFamily?: "mono" }
> = ({ className, children, fontFamily, ...props }) => (
  <ol className={styles({ fontFamily, className })} {...props}>
    {children}
  </ol>
)
