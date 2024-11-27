import { ComponentPropsWithRef } from "react"

import { cva } from "@/src/cva.config"

const styles = cva({
  base: "mb-4 text-neutral-900 antialiased text-base last-of-type:mb-0 dark:text-neutral-400",
})

export const Paragraph: React.FC<ComponentPropsWithRef<"p">> = ({
  className,
  ...props
}) => <p className={styles({ className })} {...props} />
