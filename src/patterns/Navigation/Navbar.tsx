import React, { ComponentPropsWithRef } from "react"
import { cva } from "class-variance-authority"
import Link from "next/link"

const rootStyles = cva(
  "bg-neutral-950/70 backdrop-blur-sm sticky top-0 border-b border-neutral-800"
)

export const Root: React.FC<ComponentPropsWithRef<"nav">> = ({
  className,
  ...props
}) => <nav className={rootStyles({ className })} {...props} />

const menuStyles = cva(
  "container flex max-w-xl items-center justify-between gap-4 overflow-x-auto px-2 sm:px-6 md:px-12"
)

export const Menu: React.FC<ComponentPropsWithRef<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div className={menuStyles({ className })} {...props}>
    {children}
  </div>
)

const itemStyles = cva(
  "text-neutral-400 text-sm flex-none font-defaultSans font-medium antialiased py-4 px-2 inline-flex transition-colors hover:text-white"
)

export const Item: React.FC<ComponentPropsWithRef<"a">> = ({
  className,
  children,
  href,
  ...props
}) => (
  <Link href={href} className={itemStyles({ className })} {...props}>
    {children}
  </Link>
)
