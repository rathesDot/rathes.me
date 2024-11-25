import { ComponentPropsWithRef } from "react"
import { cx } from "../../cva.config"
import { Slot } from "@radix-ui/react-slot"

type CardProps = ComponentPropsWithRef<"div"> & { asChild?: boolean }

export const Card = ({ className, asChild = false, ...props }: CardProps) => {
  const Component = asChild ? Slot : "div"

  return (
    <Component
      className={cx(
        "rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100",
        className
      )}
      {...props}
    />
  )
}
