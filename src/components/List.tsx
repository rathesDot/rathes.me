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
}) => <ul className={cx("my-4 space-y-4", className)} {...props} />

export const Item: React.FC<ComponentPropsWithRef<"li">> = (props) => (
  <li
    className="text-base font-medium leading-tight text-neutral-200 antialiased"
    {...props}
  />
)

export const Subtitle: React.FC<ComponentPropsWithRef<"span">> = ({
  className,
  ...props
}) => (
  <span
    className={cx("block text-xs text-neutral-500 md:text-sm", className)}
    {...props}
  />
)

type LinkProps = RouterLinkProps & ComponentPropsWithRef<"a">

export const Link: React.FC<LinkProps> = (props) => {
  return <RouterLink {...props} />
}
