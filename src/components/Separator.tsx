import { ComponentPropsWithRef } from "react"

import { cva } from "../cva.config"

const styles = cva({
  base: "h-auto border-none leading-none my-8 text-neutral-600 antialiased font-semibold before:block before:content-['*_*_*']",
})

export const Separator: React.FC<ComponentPropsWithRef<"hr">> = ({
  className,
  ...props
}) => <hr className={styles({ className })} {...props} />
