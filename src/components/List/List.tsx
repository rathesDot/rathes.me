import React from "react"
import { Link as RouterLink } from "gatsby"
import { styled } from "../../../stitches.config"

import { Heading, Link } from ".."

const Title = styled("li", {
  fontSize: "$base",
  color: "$slate12",
  margin: "$2 0",
})

const Subtitle = styled("span", {
  color: "$slate11",
  display: "block",
  fontSize: "$xs",
})

const Container = styled("div", {
  display: "block",
})

const ListContent = styled("ul", {
  display: "block",
})

export type ListItemProps = {
  subtitle?: string
  link: string
  subtitlePosition?: "above" | "under"
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  subtitle,
  link,
  subtitlePosition = "under",
}) => {
  const isExternalLink = link && link.startsWith("http")

  return (
    <Title>
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
        <RouterLink to={link}>
          {subtitle && subtitlePosition == "above" && (
            <Subtitle>{subtitle}</Subtitle>
          )}
          {children}
          {subtitle && subtitlePosition == "under" && (
            <Subtitle>{subtitle}</Subtitle>
          )}
        </RouterLink>
      )}
    </Title>
  )
}

export type ListProps = {
  title?: string
}

export const List: React.FC<ListProps> = ({ title, children, ...props }) => (
  <Container {...props}>
    {title && (
      <Heading level="heading4" color="slate11">
        {title}
      </Heading>
    )}
    <ListContent>{children}</ListContent>
  </Container>
)
