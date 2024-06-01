import { HTMLAttributes } from "react"

import { cva } from "../../../cva.config"

const styles = cva({
  base: "my-8 p-8 bg-neutral-800/30 outline outline-neutral-800 text-neutral-400 rounded",
  variants: {
    fontFamily: {
      mono: "font-mono",
    },
  },
})

export const Note: React.FC<
  HTMLAttributes<HTMLDivElement> & { fontFamily?: "mono"; title?: string }
> = ({ className, children, fontFamily, title, ...props }) => (
  <div className={styles({ fontFamily, className })} {...props}>
    {title && (
      <strong className="block font-normal text-white antialiased">
        {title}
      </strong>
    )}
    {children}
  </div>
)
