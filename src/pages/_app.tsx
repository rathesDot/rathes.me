import type { AppProps } from "next/app"
import Script from "next/script"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.usefathom.com/script.js"
        data-spa="auto"
        data-site="ZYWCGBNZ"
        defer
      />
      <Component {...pageProps} />
    </>
  )
}
