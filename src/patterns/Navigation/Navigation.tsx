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

const IconButton: React.FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    type="button"
    className="inline-block rounded text-neutral-50"
  >
    {children}
  </button>
)

const Hamburger: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onToggle: () => void }>
> = ({ isOpen, onToggle }) => {
  const iconPaths = useMemo(
    () =>
      isOpen
        ? ["M15 5L5 15", "M5 5L15 15"]
        : ["M2.5 7.5H17.5", "M2.5 12.5H17.5"],
    [isOpen]
  )

  return (
    <IconButton
      aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
      onClick={onToggle}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconPaths.map((p, i) => (
          <path
            key={i}
            d={p}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "all 0.2s" }}
          />
        ))}
      </svg>
    </IconButton>
  )
}

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
