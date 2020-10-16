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

export type NavigationProps = {
  items: Array<{ title: string; path: string }>
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <MenuBar>
      <MenuItem>
        <Link to="/">
          <Logo />
        </Link>
      </MenuItem>
      <Separator />
      {items.map((item, index, menuItems) => {
        return (
          <>
            <MenuItem aria-label={item.title}>
              <Link to={item.path} activeStyle={{ color: "white" }}>
                {item.title}
              </Link>
            </MenuItem>
            {menuItems.length - 1 !== index && <Separator />}
          </>
        )
      })}
    </MenuBar>
  )
}
