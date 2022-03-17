// @todo Html lang="en" needs to be fixed
import Head from "next/head"
import React from "react"

export type MetaProps = {
  description?: string
  lang?: string
  meta?: Array<
    { name: string; content: string } | { property: string; content: string }
  >
  title: string
}

export const SITE_TITLE = "Web Developer — Rathes Sachchithananthan"
export const SITE_DESCRIPTION =
  "I am a former freelancing Web Designer and Web Developer. Currently you can find me working at Aheenam, the agency I started to provide digital solutions for anyone. Get in touch with me using social media!"
export const SITE_AUTHOR = "@rswebdesigner"
export const SITE_URL = "https://rathes.me"

export const Meta: React.FC<MetaProps> = ({
  description = "",
  lang = `en`,
  meta = [],
  title,
}) => {
  const metaDescription = description || SITE_DESCRIPTION

  const metaData = [
    { name: "description", content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:site_name`, content: `rathes.me` },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: SITE_AUTHOR },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
  ].concat(meta)

  return (
    <Head>
      <title>
        {title ? `${title} — Rathes Sachchithananthan` : SITE_TITLE}
      </title>
      <link rel="icon" href="/images/icon.png" type="image/png" />
      {metaData.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </Head>
  )
}
