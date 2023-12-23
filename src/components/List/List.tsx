import React from "react"
import RouterLink from "next/link"

import { Heading2, Link } from ".."

export type ListItemProps = {
  subtitle?: string
  link?: string
  subtitlePosition?: "above" | "under"
}

const Subtitle: React.FC<{ children: string }> = ({ children }) => (
  <span className="block text-xs text-neutral-500">{children}</span>
)

export const ListItem: React.FC<React.PropsWithChildren<ListItemProps>> = ({
  children,
  subtitle,
  link,
  subtitlePosition = "under",
}) => {
  const isExternalLink = link && link.startsWith("http")

  return (
    <li className="my-2 text-base text-neutral-900 dark:text-neutral-50">
      {isExternalLink ? (
        <Link href={link}>
          {subtitle && subtitlePosition == "above" && (
            <Subtitle>{subtitle}</Subtitle>
          )}
          {children}
          {subtitle && subtitlePosition == "under" && (
            <Subtitle>{subtitle}</Subtitle>
          )}
        </Link>
      ) : (
        <RouterLink href={link}>
          {subtitle && subtitlePosition == "above" && (
            <Subtitle>{subtitle}</Subtitle>
          )}
          {children}
          {subtitle && subtitlePosition == "under" && (
            <Subtitle>{subtitle}</Subtitle>
          )}
        </RouterLink>
      )}
    </li>
  )
}

export type ListProps = {
  title?: string
}

export const List: React.FC<React.PropsWithChildren<ListProps>> = ({
  title,
  children,
  ...props
}) => (
  <div className="block" {...props}>
    {title && (
      <Heading2 size={4} className="text-neutral-900 dark:text-neutral-400">
        {title}
      </Heading2>
    )}
    <ul className="block">{children}</ul>
  </div>
)
