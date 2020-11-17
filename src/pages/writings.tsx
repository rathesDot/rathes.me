import React from "react"
import { graphql, PageProps } from "gatsby"

import { styled } from "../../stitches.config"

import { Link, List, ListItem, Paragraph, Meta } from "../components"
import { SayHi } from "../patterns"
import { PageLayout } from "../layouts"

import { extractBlogPosts, getSortedGroups, groupPostsByYear } from "../utils"
import externalLinks from "../content/articles/externalLinks"

const Container = styled("section", {
  marginTop: "$32",
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$32",
})

const SayHiContainer = styled("section", {
  marginBottom: "$32",
  marginTop: "$32",
})

const BlogList = styled("div", {
  marginTop: "$12",
})

const Writings: React.FC<PageProps> = ({ data }) => {
  const blogPosts = getSortedGroups(
    groupPostsByYear(extractBlogPosts(data).concat(externalLinks))
  )

  return (
    <PageLayout>
      <Container>
        <Meta title="Writings" />
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

        <Section>
          <BlogList>
            <List title="Books & Whitepapers">
              <ListItem link="https://learn-tamil.com">
                A Guide To Basic Tamil Grammar
              </ListItem>
            </List>
          </BlogList>

          {blogPosts.map(([key, posts]) => {
            return (
              <BlogList>
                <List title={key} key={key}>
                  {posts.map((post, index) => (
                    <ListItem link={post.link} key={index}>
                      {post.title}
                    </ListItem>
                  ))}
                </List>
              </BlogList>
            )
          })}
        </Section>
        <SayHiContainer>
          <SayHi />
        </SayHiContainer>
      </Container>
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
