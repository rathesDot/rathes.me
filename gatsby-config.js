const markdownPlugins = [
  `gatsby-plugin-twitter`,
  {
    resolve: `gatsby-remark-prismjs`,
    options: {
      aliases: {},
      showLineNumbers: false,
    },
  },
  {
    resolve: `gatsby-remark-images`,
    options: {
      // It's important to specify the maxWidth (in pixels) of
      // the content container as this plugin uses this as the
      // base for generating different widths of each image.
      maxWidth: 590,
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Web Developer — Rathes Sachchithananthan`,
    description: `I am a former freelancing Web Designer and Web Developer. Currently you can find me working at Aheenam, the agency I started to provide digital solutions for anyone. Get in touch with me using social media!`,
    author: `@rswebdesigner`,
    siteUrl: `https://rathes.me`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,500,600,700"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: markdownPlugins,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: markdownPlugins,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
