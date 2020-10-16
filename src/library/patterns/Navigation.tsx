import React from "react"
import { Link } from "gatsby"

import { styled } from "../../../stitches.config"

import { Logo } from "../components/Logo"

export const MenuItem = styled("div", {
  display: "block",
  color: "$gray600",
  fontSize: "$sm",
  fontFamily: "$base",
  fontWeight: "$bold",

  "> a": {
    color: "$gray600",
    textDecoration: "none",
  },

  mini: {
    fontSize: "$base",
  },

  mobile: {
    fontSize: "$lg",
  },
})

const MenuBar = styled("nav", {
  alignItems: "center",
  display: "flex",
})

const Separator = styled("span", {
  display: "block",
  margin: "0 $1",
  color: "$gray600",
  fontSize: "$base",
  fontFamily: "$default",

  "::before": {
    content: `"/"`,
  },

  mobile: {
    margin: "0 $2",
    fontSize: "$lg",
  },
})

const NavigationItem: React.FC<{
  title: string
  path: string
  isFile?: boolean
  showSeparator: boolean
}> = ({ title, path, isFile, showSeparator }) => (
  <>
    <MenuItem aria-label={title}>
      {isFile && (
        <a href={path} aria-label={title}>
          {title}
        </a>
      )}
      {!isFile && (
        <Link to={path} activeStyle={{ color: "white" }} aria-label={title}>
          {title}
        </Link>
      )}
    </MenuItem>
    {showSeparator && <Separator />}
  </>
)

export type NavigationProps = {
  items: Array<{ title: string; path: string; isFile?: boolean }>
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <MenuBar>
      <MenuItem>
        <Link to="/" activeStyle={{ color: "white" }}>
          <Logo />
        </Link>
      </MenuItem>
      <Separator />
      {items.map((item, index, menuItems) => {
        return (
          <NavigationItem
            key={`navigation-item-${index}`}
            title={item.title}
            path={item.path}
            isFile={item.isFile}
            showSeparator={menuItems.length - 1 !== index}
          />
        )
      })}
    </MenuBar>
  )
}
