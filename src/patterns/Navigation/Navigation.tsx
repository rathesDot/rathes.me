import React, {
  HTMLProps,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import Link, { LinkProps } from "next/link"

import cx from "clsx"
import { cva } from "class-variance-authority"

import { ThemeContext } from "../../layouts/PageLayout/PageLayout"

import { Heading4, Logo } from "../../components"

const MenuItem: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => (
  <Link
    {...props}
    className="block py-1 font-sansDisplay text-lg font-medium text-neutral-900 antialiased dark:text-neutral-50"
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
    className="inline-block rounded p-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-800"
  >
    {children}
  </button>
)

const ThemeSwitch: React.FC<
  React.PropsWithChildren<{
    theme: "dark" | "light"
    onToggle: () => void
  }>
> = ({ onToggle, theme }) => {
  if (theme === undefined) {
    return null
  }

  if (theme === "dark") {
    return (
      <IconButton aria-label="Switch to light theme" onClick={onToggle}>
        <svg
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={5} />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </IconButton>
    )
  }

  return (
    <IconButton
      type="button"
      aria-label="Switch to dark theme"
      onClick={onToggle}
    >
      <svg
        width={24}
        height={24}
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </IconButton>
  )
}

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

const topbar = cva(
  "fixed inset-x-0 mb-4 border-b border-neutral-200  px-6 py-2 backdrop-blur-sm dark:border-neutral-700  md:px-16 lg:px-32",
  {
    variants: {
      isOpen: {
        true: "bg-neutral-50/100 dark:bg-neutral-900/100",
        false: "bg-neutral-50/70 dark:bg-neutral-900/70",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
)

const TopBar: React.FC<PropsWithChildren<{ isOpen: boolean }>> = ({
  isOpen,
  children,
}) => (
  <div className={topbar({ isOpen })}>
    <div className="box-content flex max-w-xl items-center justify-between text-neutral-900 dark:text-neutral-50">
      {children}
    </div>
  </div>
)

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { toggleTheme, theme } = useContext(ThemeContext)

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
    <nav>
      <TopBar isOpen={isOpen}>
        <div className="flex">
          <Link href="/" aria-label="Home">
            <IconButton as="span">
              <Logo />
            </IconButton>
          </Link>
        </div>
        <div className="flex">
          <ThemeSwitch theme={theme} onToggle={toggleTheme}>
            Toggle
          </ThemeSwitch>
          <Hamburger isOpen={isOpen} onToggle={toggleMenu} />
        </div>
      </TopBar>
      <div
        className={cx(
          "inset-0 mt-[65px] bg-neutral-900 px-8 md:px-16 lg:px-32",
          {
            fixed: isOpen,
            hidden: !isOpen,
          }
        )}
      >
        <div className="mt-8">
          <Heading4 className="text-neutral-500">Navigation</Heading4>
          <MenuItem href="/about">About</MenuItem>

          <MenuItem href="/files/resume.pdf" aria-label="Resume">
            Resume
          </MenuItem>

          <MenuItem href="/work">Work</MenuItem>

          <MenuItem href="/writings">Writings</MenuItem>
        </div>
        <div className="mt-8">
          <Heading4 className="text-neutral-500">Current Projects</Heading4>
          <a
            className="block py-1 font-sansDisplay text-lg font-medium text-neutral-900 antialiased dark:text-neutral-50"
            href="https://learn-tamil.com"
          >
            Learn Tamil
          </a>
          <a
            className="block py-1 font-sansDisplay text-lg font-medium text-neutral-900 antialiased dark:text-neutral-50"
            href="https://getmaxout.app"
          >
            Maxout
          </a>
        </div>
      </div>
    </nav>
  )
}

export { Navigation }
