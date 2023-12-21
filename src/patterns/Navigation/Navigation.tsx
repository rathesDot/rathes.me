import React, { PropsWithChildren, useEffect, useState } from "react"
import Link, { LinkProps } from "next/link"

import { cva, cx } from "class-variance-authority"

import { Logo } from "../../components"

const MenuItem: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => (
  <Link
    {...props}
    className="block font-sans text-[6.32688928vh] font-bold leading-none text-neutral-50 antialiased"
  >
    {children}
  </Link>
)

const hamburgerIconBar = cva("block h-[1.5px] bg-white transition-all", {
  variants: {
    position: {
      top: "w-[16.5px]",
      bottom: "mt-[6px] group-hover:translate-x-0 group-hover:w-[16.5px]",
    },
    crossed: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      position: "top",
      crossed: true,
      class: "-rotate-45 translate-y-[3.75px]",
    },
    {
      position: "bottom",
      crossed: true,
      class: "w-[16.5px] rotate-45 -translate-y-[3.75px]",
    },
    {
      position: "bottom",
      crossed: false,
      class: "w-[10.5px] translate-x-[6px]",
    },
  ],
})

const Hamburger: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onToggle: () => void }>
> = ({ isOpen, onToggle }) => (
  <button
    aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
    onClick={onToggle}
    type="button"
    className="group block h-6 w-6 p-[3.5px]"
  >
    <span className={hamburgerIconBar({ position: "top", crossed: isOpen })} />
    <span
      className={hamburgerIconBar({ position: "bottom", crossed: isOpen })}
    />
  </button>
)

const TopBar: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="mx-auto flex w-full items-center justify-between p-4 text-neutral-50">
    {children}
  </div>
)

const navigation = cva(
  "overflow-hidden fixed inset-x-0 z-50 transition-all flex flex-col",
  {
    variants: {
      isOpen: {
        true: "inset-y-0 bg-neutral-950/100 h-full",
        false: "h-14 bg-neutral-950/70 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
)

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
      document.body.style.overflow = ""
    } else {
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <nav className={navigation({ isOpen })}>
      <TopBar>
        <div className={cx({ "opacity-0": isOpen })}>
          <Logo />
        </div>
        <Hamburger isOpen={isOpen} onToggle={toggleMenu} />
      </TopBar>
      {isOpen && (
        <div className="flex flex-grow items-center">
          <div className="px-8">
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/about">About</MenuItem>
            <MenuItem href="/reading">Reading</MenuItem>
            <MenuItem href="/writing">Writing</MenuItem>
            <MenuItem href="/photos">Photos</MenuItem>
            <MenuItem href="/work">Work</MenuItem>
          </div>
        </div>
      )}
    </nav>
  )
}

export { Navigation }
