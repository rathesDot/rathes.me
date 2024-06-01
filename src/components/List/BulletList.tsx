import { HTMLAttributes } from "react"

import { cva } from "../../../cva.config"

const styles = cva({
  base: [
    "list-disc text-neutral-200/70 antialiased pl-5 mb-8",
    "[&_ul]:mx-0 [&_ul]:my-2 [&_ul]:mb-4 [&_ul]:py-0 [&_ul]:pl-6",
    "[&_li]:my-2 [&_li]:mx-0",
    "[&_p]:m-0  [&_p]:text-sm [&_p]:text-neutral-200/70",
  ],
  variants: {
    fontFamily: {
      mono: "font-mono",
    },
  },
})

export const BulletList: React.FC<
  HTMLAttributes<HTMLUListElement> & { fontFamily?: "mono" }
> = ({ className, children, fontFamily, ...props }) => (
  <ul className={styles({ fontFamily, className })} {...props}>
    {children}
  </ul>
)
