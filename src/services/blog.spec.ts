import { groupPostsByYear, getSortedGroups } from "../utils/index"

describe("blog", () => {
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
