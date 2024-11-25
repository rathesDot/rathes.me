import React, { ComponentPropsWithRef } from "react"
import RouterLink, { LinkProps as RouterLinkProps } from "next/link"

import { cx } from "../../cva.config"

import { Heading2 } from "./Heading"

export const Root: React.FC<ComponentPropsWithRef<"div">> = ({
  className,
  ...props
}) => <div className={cx("block", className)} {...props} />

export const Title: React.FC<ComponentPropsWithRef<"h2">> = ({
  className,
  ...props
}) => <Heading2 level="small" {...props} />

export const Container: React.FC<ComponentPropsWithRef<"ul">> = ({
  className,
  ...props
}) => <ul className={cx("space-y-1 not-first:my-4", className)} {...props} />

export const Item: React.FC<ComponentPropsWithRef<"li">> = (props) => (
  <li
    className="text-base font-medium text-neutral-900 antialiased dark:text-neutral-50"
    {...props}
  />
)

export const Subtitle: React.FC<ComponentPropsWithRef<"span">> = ({
  className,
  ...props
}) => (
  <span
    className={cx(
      "block text-sm text-neutral-500 dark:text-neutral-400",
      className
    )}
    {...props}
  />
)

type LinkProps = RouterLinkProps & ComponentPropsWithRef<"a">

export const Link: React.FC<LinkProps> = (props) => {
  return <RouterLink {...props} />
}

export const Button: React.FC<ComponentPropsWithRef<"button">> = (props) => {
  return <button type="button" className="block w-full text-left" {...props} />
}
