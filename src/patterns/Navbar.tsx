import React, { ComponentPropsWithRef } from "react"

import Link from "next/link"

import { cva } from "../../cva.config"

const rootStyles = cva({
  base: "bg-neutral-950/70 sticky top-0 border-b border-neutral-800 z-20",
})

export const Root: React.FC<ComponentPropsWithRef<"nav">> = ({
  className,
  ...props
}) => <nav className={rootStyles({ className })} {...props} />

const menuStyles = cva({
  base: "container mx-auto flex max-w-xl backdrop-blur-sm items-center justify-between gap-4 overflow-x-auto px-2 md:px-0",
})

export const Menu: React.FC<ComponentPropsWithRef<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div className={menuStyles({ className })} {...props}>
    {children}
  </div>
)

const itemStyles = cva({
  base: "text-neutral-400 text-sm flex-none font-sans font-medium antialiased py-4 px-2 inline-flex transition-colors hover:text-white",
})

export const Item: React.FC<ComponentPropsWithRef<"a">> = ({
  className,
  children,
  href = "",
  ...props
}) => (
  <Link href={href} className={itemStyles({ className })} {...props}>
    {children}
  </Link>
)

const bannerStyles = cva({
  base: "group flex h-8 items-center justify-center gap-1 bg-neutral-800 text-center text-sm font-semibold font-sans text-neutral-50 antialiased",
})

export const Banner: React.FC<ComponentPropsWithRef<"a">> = ({
  className,
  children,
  href = "",
  ...props
}) => (
  <Link href={href} className={bannerStyles({ className })} {...props}>
    {children}
    <span className="origin-left transition-transform group-hover:translate-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </Link>
)
