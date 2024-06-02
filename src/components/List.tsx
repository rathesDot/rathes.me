import React, { ComponentPropsWithRef, PropsWithChildren } from "react"
import RouterLink, { LinkProps } from "next/link"

import { cx } from "../../cva.config"

export const Root: React.FC<ComponentPropsWithRef<"div">> = ({
  className,
  ...props
}) => <div className={cx("block", className)} {...props} />

export const Title: React.FC<ComponentPropsWithRef<"h2">> = ({
  className,
  ...props
}) => (
  <h2
    className="text-xs font-semibold uppercase tracking-wide text-neutral-500 antialiased"
    {...props}
  />
)

export const Container: React.FC<ComponentPropsWithRef<"ul">> = (props) => (
  <ul className="my-4 space-y-4" {...props} />
)

export const Item: React.FC<ComponentPropsWithRef<"li">> = (props) => (
  <li
    className="text-base font-medium leading-tight text-neutral-200 antialiased"
    {...props}
  />
)

export const Subtitle: React.FC<ComponentPropsWithRef<"span">> = (props) => (
  <span className="block text-xs text-neutral-500 md:text-sm" {...props} />
)

export const Link: React.FC<PropsWithChildren<LinkProps>> = (props) => {
  return <RouterLink {...props} />
}
