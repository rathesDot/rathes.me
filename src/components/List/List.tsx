import React, { HTMLProps } from "react"
import RouterLink from "next/link"
import { cx } from "class-variance-authority"

import { Heading2, Link } from ".."

export type ListItemProps = {
  subtitle?: string
  link?: string
  subtitlePosition?: "above" | "under"
  children?: React.ReactNode
}

const Subtitle: React.FC<{ children: string }> = ({ children }) => (
  <span className="block text-xs text-neutral-500 md:text-sm">{children}</span>
)

const ListItemBody: React.FC<Exclude<ListItemProps, "link">> = ({
  subtitle,
  subtitlePosition,
  children,
}) => {
  return (
    <div className="text-base text-neutral-50 md:text-lg">
      {subtitle && subtitlePosition == "above" && (
        <Subtitle>{subtitle}</Subtitle>
      )}
      {children}
      {subtitle && subtitlePosition == "under" && (
        <Subtitle>{subtitle}</Subtitle>
      )}
    </div>
  )
}

export const ListItem: React.FC<React.PropsWithChildren<ListItemProps>> = ({
  children,
  subtitle,
  link,
  subtitlePosition = "under",
}) => {
  if (!link) {
    return (
      <ListItemBody subtitle={subtitle} subtitlePosition={subtitlePosition}>
        {children}
      </ListItemBody>
    )
  }

  if (link && link.startsWith("http")) {
    return (
      <Link href={link}>
        <ListItemBody subtitle={subtitle} subtitlePosition={subtitlePosition}>
          {children}
        </ListItemBody>
      </Link>
    )
  }

  return (
    <RouterLink href={link}>
      <ListItemBody subtitle={subtitle} subtitlePosition={subtitlePosition}>
        {children}
      </ListItemBody>
    </RouterLink>
  )
}

export type ListProps = HTMLProps<HTMLUListElement> & {
  title?: string
}

export const List: React.FC<React.PropsWithChildren<ListProps>> = ({
  title,
  children,
  className,
  ...props
}) => (
  <div className="block">
    {title && (
      <Heading2 size={4} className="text-neutral-400">
        {title}
      </Heading2>
    )}
    <ul {...props} className={cx("block", "mt-4", className)}>
      {children}
    </ul>
  </div>
)
