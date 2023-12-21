import React, {
  HTMLProps,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react"
import Link, { LinkProps } from "next/link"

import { cva } from "class-variance-authority"

import { Heading4, Logo } from "../../components"

const MenuItem: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => (
  <Link
    {...props}
    className="font-sansDisplay block py-1 text-lg font-medium text-neutral-900 antialiased dark:text-neutral-50"
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
  <div className="mx-auto box-content flex max-w-xl items-center justify-between p-4 text-neutral-50">
    {children}
  </div>
)

const menuBody = cva(
  "inset-0 mt-[65px] bg-neutral-50 px-8 md:px-16 lg:px-32 [&_div]:max-w-xl [&_div]:mx-auto dark:bg-neutral-900 z-10",
  {
    variants: {
      isOpen: { true: "fixed", false: "hidden" },
    },
    defaultVariants: { isOpen: false },
  }
)

const navigation = cva("overflow-hidden fixed inset-x-0 z-50 transition-all", {
  variants: {
    isOpen: {
      true: "inset-y-0 bg-neutral-950/100 h-full",
      false: "h-14 bg-neutral-950/70 backdrop-blur-sm",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
})

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
        <Logo />
        <Hamburger isOpen={isOpen} onToggle={toggleMenu} />
      </TopBar>
    </nav>
  )
}

export { Navigation }
