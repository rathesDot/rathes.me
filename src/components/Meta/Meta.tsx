import React from "react"
import { Helmet } from "react-helmet"

export type MetaProps = {
  description?: string
  lang?: string
  meta?: Array<
    { name: string; content: string } | { property: string; content: string }
  >
  title: string
}

export const Meta: React.FC<MetaProps> = ({
  description = "",
  lang = `en`,
  meta = [],
  title,
}) => {
  // @todo Fetch correct meta data
  const data = {
    site: {
      siteMetadata: {
        title: "",
        description: "",
        author: "",
      },
    },
  }

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: `rathes.me`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
