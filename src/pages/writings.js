import React from "react"
import { graphql } from "gatsby"

import { PageLayout } from "../layouts"
import SEO from "../components/SEO"
import { Link } from "../components"

import { extractBlogPosts, getSortedGroups, groupPostsByYear } from "../utils"

import externalLinks from "../content/articles/externalLinks"
import { Box, List, Paragraph } from "../components"

import { SayHi } from "../patterns"

const Writings = ({ data }) => {
  const blogPosts = getSortedGroups(
    groupPostsByYear(extractBlogPosts(data).concat(externalLinks))
  )

  return (
    <PageLayout>
      <Box maxWidth="640px" marginTop={32} element="section">
        <SEO title="Writings" />
        <Paragraph>
          From time to time, I do write. Sometime on my blog, but also on other
          blogs such as on{" "}
          <Link color="white" href="https://medium.com/@rathes" underlined>
            Medium
          </Link>
          . The topics, I write about are diverse. Obviously, I write about the
          web, but also about non-web topics like my mother tongue Tamil or even
          about movies or anime.
        </Paragraph>
        <Paragraph>
          I do write in English, German and Tamil. So if you do not understand
          the title, it may be that you do not speak the language. If you want
          me to translate a specific article, just drop a message{" "}
          <Link
            color="white"
            href="https://twitter.com/rswebdesigner"
            underlined
          >
            @rswebdesigner
          </Link>
        </Paragraph>

        <Box marginTop={32} element="section">
          <Box marginTop={12}>
            <List title="Books & Whitepapers">
              <List.Item link="https://learn-tamil.com">
                A Guide To Basic Tamil Grammar
              </List.Item>
            </List>
          </Box>

          {blogPosts.map(([key, posts]) => {
            return (
              <Box marginTop={12}>
                <List title={key} key={key}>
                  {posts.map((post, index) => (
                    <List.Item link={post.link} key={index}>
                      {post.title}
                    </List.Item>
                  ))}
                </List>
              </Box>
            )
          })}
        </Box>
        <Box marginTop={32} marginBottom={32} element="section">
          <SayHi />
        </Box>
      </Box>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Writings
