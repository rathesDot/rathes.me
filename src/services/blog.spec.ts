import {
  groupPostsByYear,
  getSortedGroups,
  getBlogPostUrl,
  getFilteredBlogPosts,
  getTranslations,
} from "./blog"

describe("blog", () => {
  describe("getBlogPostUrl", () => {
    it("builds the current /blog/{lang}/{slug} shape", () => {
      expect(getBlogPostUrl("en", "fatherhood")).toBe("/blog/en/fatherhood")
      expect(getBlogPostUrl("de", "vue-app-auth")).toBe(
        "/blog/de/vue-app-auth"
      )
    })
  })

  describe("getTranslations", () => {
    it("returns both languages for a genuine translation pair", () => {
      expect(getTranslations("laravel-package")).toEqual(["en", "de"])
    })

    it("returns a single language for posts without a translation", () => {
      expect(getTranslations("fatherhood")).toEqual(["en"])
    })

    it("returns an empty array for a non-existent slug", () => {
      expect(getTranslations("does-not-exist")).toEqual([])
    })
  })

  describe("getFilteredBlogPosts", () => {
    it("returns every group unfiltered when there is no search term", () => {
      const all = getFilteredBlogPosts()
      const filtered = getFilteredBlogPosts("")

      expect(filtered).toEqual(all)
    })

    it("matches titles case-insensitively", () => {
      const filtered = getFilteredBlogPosts("FATHERHOOD")
      const matches = filtered.flatMap(([, posts]) => posts)

      expect(matches.length).toBeGreaterThan(0)
      expect(
        matches.every((post) => post.title.toLowerCase().includes("fatherhood"))
      ).toBe(true)
    })

    it("matches links as well as titles", () => {
      const filtered = getFilteredBlogPosts("vue-app-auth")
      const matches = filtered.flatMap(([, posts]) => posts)

      expect(matches.length).toBeGreaterThan(0)
      expect(
        matches.every((post) => post.link.toLowerCase().includes("vue-app-auth"))
      ).toBe(true)
    })

    it("returns no matches for a search term that matches nothing", () => {
      const filtered = getFilteredBlogPosts("this-slug-does-not-exist-anywhere")
      const matches = filtered.flatMap(([, posts]) => posts)

      expect(matches).toEqual([])
    })
  })

  it("groups posts by year", () => {
    const posts = [
      {
        title: "The latest posts.",
        date: "18 July, 2019",
        link: "/blog/en/customer-experience-instead-of-features/",
      },
      {
        title: "Stop thinking in features.",
        date: "18 February, 2019",
        link: "/blog/en/customer-experience-instead-of-features/",
      },
      {
        title: "From Ghent with love",
        date: "02 June, 2018",
        link: "/blog/en/from-ghent-with-love/",
      },
      {
        title: "Managing time",
        date: "08 April, 2019",
        link: "/blog/en/managing-time/",
      },
    ]

    expect(groupPostsByYear(posts)).toEqual({
      2019: [
        {
          title: "The latest posts.",
          date: "18 July, 2019",
          link: "/blog/en/customer-experience-instead-of-features/",
        },
        {
          title: "Managing time",
          date: "08 April, 2019",
          link: "/blog/en/managing-time/",
        },
        {
          title: "Stop thinking in features.",
          date: "18 February, 2019",
          link: "/blog/en/customer-experience-instead-of-features/",
        },
      ],
      2018: [
        {
          title: "From Ghent with love",
          date: "02 June, 2018",
          link: "/blog/en/from-ghent-with-love/",
        },
      ],
    })
  })

  it("sorts by descending years", () => {
    const posts = {
      2017: [
        {
          title: "The oldest post",
          date: "02 June, 2017",
          link: "/blog/en/the-oldest/",
        },
      ],
      2019: [
        {
          title: "The latest posts.",
          date: "18 July, 2019",
          link: "/blog/en/customer-experience-instead-of-features/",
        },
        {
          title: "Managing time",
          date: "08 April, 2019",
          link: "/blog/en/managing-time/",
        },
        {
          title: "Stop thinking in features.",
          date: "18 February, 2019",
          link: "/blog/en/customer-experience-instead-of-features/",
        },
      ],
      2018: [
        {
          title: "From Ghent with love",
          date: "02 June, 2018",
          link: "/blog/en/from-ghent-with-love/",
        },
      ],
    }

    expect(getSortedGroups(posts)).toEqual([
      [
        "2019",
        [
          {
            title: "The latest posts.",
            date: "18 July, 2019",
            link: "/blog/en/customer-experience-instead-of-features/",
          },
          {
            title: "Managing time",
            date: "08 April, 2019",
            link: "/blog/en/managing-time/",
          },
          {
            title: "Stop thinking in features.",
            date: "18 February, 2019",
            link: "/blog/en/customer-experience-instead-of-features/",
          },
        ],
      ],
      [
        "2018",
        [
          {
            title: "From Ghent with love",
            date: "02 June, 2018",
            link: "/blog/en/from-ghent-with-love/",
          },
        ],
      ],
      [
        "2017",
        [
          {
            title: "The oldest post",
            date: "02 June, 2017",
            link: "/blog/en/the-oldest/",
          },
        ],
      ],
    ])
  })
})
