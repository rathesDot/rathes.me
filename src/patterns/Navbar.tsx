import React, { ComponentPropsWithRef } from "react"
import Link from "next/link"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { cva } from "@/src/cva.config"

const rootStyles = cva({
  base: "sticky top-0 mt-0 border-b bg-white/70 backdrop-blur-sm dark:border-b-neutral-800 dark:bg-neutral-950/70",
})

export const Root = ({
  className,
  ...props
}: NavigationMenu.NavigationMenuProps) => (
  <NavigationMenu.Root className={rootStyles({ className })} {...props} />
)

const menuStyles = cva({ base: "flex items-center justify-between" })

export const Menu = ({
  className,
  ...props
}: NavigationMenu.NavigationMenuListProps) => (
  <NavigationMenu.List className={menuStyles({ className })} {...props} />
)

const itemStyles = cva({
  base: "block px-1 py-4 text-sm text-neutral-900 antialiased dark:text-neutral-400",
})

export const Item: React.FC<ComponentPropsWithRef<"a">> = ({
  className,
  children,
  href = "",
  ...props
}) => (
  <NavigationMenu.Item>
    <NavigationMenu.Link asChild>
      <Link href={href} className={itemStyles({ className })} {...props}>
        {children}
      </Link>
    </NavigationMenu.Link>
  </NavigationMenu.Item>
)
