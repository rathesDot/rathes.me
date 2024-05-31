export const metadata = {
  title: {
    template: "%s — Store — Rathes Sachchithananthan",
    default: "Browse",
  },
  description:
    "I'm a passionate software engineer and maker turning ideas into reality.  I specialize in web development with React and Laravel and can help you with custom solutions for your projects.  Let's discuss your project and see how I can help make it a success!",
  metadataBase: new URL("https://rathes.me"),
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Rathes Sachchithananthan", url: "https://rathes.me" }],
  creator: "Rathes Sachchithananthan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
