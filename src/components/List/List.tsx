import React from "react"
import RouterLink from "next/link"

import { Heading2, Link } from ".."

export type ListItemProps = {
  subtitle?: string
  link?: string
  subtitlePosition?: "above" | "under"
  children?: React.ReactNode
}

const Subtitle: React.FC<{ children: string }> = ({ children }) => (
  <span className="block text-xs text-neutral-500">{children}</span>
)

const ListItemBody: React.FC<Exclude<ListItemProps, "link">> = ({
  subtitle,
  subtitlePosition,
  children,
}) => {
  return (
    <>
      {subtitle && subtitlePosition == "above" && (
        <Subtitle>{subtitle}</Subtitle>
      )}
      {children}
      {subtitle && subtitlePosition == "under" && (
        <Subtitle>{subtitle}</Subtitle>
      )}
    </>
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
      <li className="my-2 text-base text-neutral-900 dark:text-neutral-50">
        <ListItemBody subtitle={subtitle} subtitlePosition={subtitlePosition}>
          {children}
        </ListItemBody>
      </li>
    )
  }

  const isExternalLink = link && link.startsWith("http")

  return (
    <li className="my-2 text-base text-neutral-900 dark:text-neutral-50">
      {isExternalLink ? (
        <Link href={link}>
          <ListItemBody subtitle={subtitle} subtitlePosition={subtitlePosition}>
            {children}
          </ListItemBody>
        </Link>
      ) : (
        <RouterLink href={link}>
          <ListItemBody subtitle={subtitle} subtitlePosition={subtitlePosition}>
            {children}
          </ListItemBody>
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
