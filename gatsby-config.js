module.exports = {
  siteMetadata: {
    title: `Web Developer — Rathes Sachchithananthan`,
    description: `I am a former freelancing Web Designer and Web Developer. Currently you can find me working at Aheenam, the agency I started to provide digital solutions for anyone. Get in touch with me using social media!`,
    author: `@rswebdesigner`,
    siteUrl: `https://rathes.me`,
  },
  plugins: [
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
        plugins: [
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
        ],
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
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
