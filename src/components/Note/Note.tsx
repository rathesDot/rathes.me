import { ComponentPropsWithRef } from "react"

import { cva, VariantProps } from "../../../cva.config"

const styles = cva({
  base: "my-8 p-8 bg-neutral-800/30 outline outline-neutral-800 text-neutral-400 rounded",
  variants: {
    fontFamily: {
      mono: "font-mono",
    },
  },
})

export const Note: React.FC<
  ComponentPropsWithRef<"div"> & VariantProps<typeof styles>
> = ({ className, fontFamily, ...props }) => (
  <div className={styles({ fontFamily, className })} {...props} />
)
