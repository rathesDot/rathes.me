import React from "react"
import styledComponent from "styled-components"
import { Link as RouterLink } from "gatsby"
import { styled } from "../../../stitches.config"

import { Heading4, Link } from ".."

const Title = styledComponent.li`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.white.default};
  margin: ${(props) => props.theme.spacing[2]} 0;
`

const Subtitle = styled("span", {
  color: "$gray600",
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
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  subtitle,
  link,
}) => {
  const isExternalLink = link && link.startsWith("http")

  return (
    <Title>
      {isExternalLink ? (
        <Link href={link}>
          {children}
          {subtitle && <Subtitle color="silver">{subtitle}</Subtitle>}
        </Link>
      ) : (
        <RouterLink to={link}>
          {children}
          {subtitle && <Subtitle color="silver">{subtitle}</Subtitle>}
        </RouterLink>
      )}
    </Title>
  )
}

export type ListProps = {
  title?: StringConstructor
}

export const List: React.FC<ListProps> = ({ title, children, ...props }) => (
  <Container {...props}>
    {title && <Heading4 color="silver">{title}</Heading4>}
    <ListContent>{children}</ListContent>
  </Container>
)
