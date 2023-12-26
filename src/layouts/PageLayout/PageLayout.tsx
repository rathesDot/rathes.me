import React from "react"
import { cx } from "class-variance-authority"

import { Footer, Navigation } from "../../patterns"

const PageLayout: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Navigation />
      <div className={cx("mt-14 md:mt-24", className)}>{children}</div>
      <Footer />
    </main>
  )
}

export { PageLayout }
