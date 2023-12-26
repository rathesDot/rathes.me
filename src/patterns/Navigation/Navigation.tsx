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
    className="flex items-center font-sans text-[6.32688928vh] font-bold leading-none text-neutral-50 antialiased md:text-[clamp(54px,7.5vw,96px)] lg:-translate-x-[68px] lg:transition-transform lg:duration-500 lg:hover:translate-x-0"
  >
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-mr-4 hidden pt-4 lg:block"
    >
      <path
        d="M60.375 28.875L73.5 42M73.5 42L60.375 55.125M73.5 42H10.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {children}
  </Link>
)

const hamburgerIconBar = cva("block h-[1.5px] bg-white transition-all", {
  variants: {
    position: {
      top: "",
      bottom: "translate-y-2 group-hover:scale-x-100",
    },
    crossed: { true: "", false: "" },
  },
  compoundVariants: [
    { position: "bottom", crossed: false, class: "origin-right scale-x-[60%]" },
    { position: "top", crossed: true, class: "translate-y-[4.5px] rotate-45" },
    {
      position: "bottom",
      crossed: true,
      class: "origin-center translate-y-[3.5px] -rotate-45 scale-x-100",
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
    className="flex items-center gap-2"
  >
    <span className="hidden uppercase tracking-widest md:block">Menu</span>
    <div className="group h-6 w-6 py-[7px] md:h-8 md:w-8 md:py-[12px]">
      <span
        className={hamburgerIconBar({ position: "top", crossed: isOpen })}
      />
      <span
        className={hamburgerIconBar({ position: "bottom", crossed: isOpen })}
      />
    </div>
  </button>
)

const TopBar: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="mx-auto flex w-full items-center justify-between p-4 text-neutral-50 md:p-8 md:px-14">
    {children}
  </div>
)

const navigation = cva(
  "overflow-hidden fixed inset-x-0 z-50 transition-all duration-300 flex flex-col top-0",
  {
    variants: {
      isOpen: {
        true: "bottom-0 bg-neutral-950/100 h-full",
        false: "h-14 bg-neutral-950/70 backdrop-blur-sm md:h-24",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
)

const menuBodyContainer = cva(
  "flex flex-grow items-center transition-opacity delay-500",
  {
    variants: {
      isOpen: {
        true: "opacity-1",
        false: "opacity-0 delay-0",
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
        <Link href="/" className={cx({ "opacity-0": isOpen })}>
          <Logo className="md:h-8 md:w-8" />
        </Link>
        <Hamburger isOpen={isOpen} onToggle={toggleMenu} />
      </TopBar>
      <div className={menuBodyContainer({ isOpen })}>
        <div className="mx-8 overflow-hidden md:mx-14">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/reading">Reading</MenuItem>
          <MenuItem href="/writing">Writing</MenuItem>
          <MenuItem href="/photos">Photos</MenuItem>
          <MenuItem href="/work">Work</MenuItem>
        </div>
      </div>
    </nav>
  )
}

export { Navigation }
