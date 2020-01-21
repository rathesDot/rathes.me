import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Link from "../components/Link"

import { extractBlogPosts, getSortedGroups, groupPostsByYear } from "../utils"
import externalLinks from "../content/articles/externalLinks"
import SayHi from "../components/SayHi"
import BlogList from "../components/BlogList/BlogList"
import { Box } from "../components/Box"
import { Paragraph } from "../components/Typography"

const Writings = ({ data }) => {
  const blogPosts = getSortedGroups(
    groupPostsByYear(extractBlogPosts(data).concat(externalLinks))
  )

  return (
    <Layout>
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
        <div className="mt-12">
          <BlogList title="Books & Whitepapers" className="mb-10">
            <BlogList.Article
              link="https://learn-tamil.com"
              title="A Guide To Basic Tamil Grammar"
            />
          </BlogList>
          {blogPosts.map(([key, posts]) => {
            return (
              <BlogList title={key} key={key} className="mb-10">
                {posts.map((post, index) => (
                  <BlogList.Article
                    link={post.link}
                    title={post.title}
                    key={index}
                  />
                ))}
              </BlogList>
            )
          })}
        </div>
        <SayHi />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
