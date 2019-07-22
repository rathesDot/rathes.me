import React, { PureComponent } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import cx from "classnames"

import Toggle from "../Toggle"
import Logo from "../Logo"

class Navigation extends PureComponent {
  state = {
    isNavOpen: false,
  }

  toggleNavigation = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  render() {
    const { isNavOpen } = this.state

    return (
      <StaticQuery
        query={graphql`
          query {
            resume: file(relativePath: { eq: "files/resume.pdf" }) {
              publicURL
            }
          }
        `}
        render={data => (
          <div className="mb-20 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <Link to="/">
                <Logo />
              </Link>
              <Toggle className="md:hidden" onClick={this.toggleNavigation} />
            </div>
            <div
              className={cx("text-right", { hidden: !isNavOpen }, "md:block")}
            >
              <Link to="/about" className="font-bold mr-2">
                About
              </Link>
              <a href={data.resume.publicURL} className="font-bold mr-2">
                <span
                  className="font-normal text-xl mr-2"
                  dangerouslySetInnerHTML={{ __html: "&sol;" }}
                ></span>
                Resume
              </a>
              <Link to="/work" className="font-bold mr-2">
                <span
                  className="font-normal text-xl mr-2"
                  dangerouslySetInnerHTML={{ __html: "&sol;" }}
                ></span>
                Work
              </Link>
              <Link to="/writings" className="font-bold">
                <span
                  className="font-normal text-xl mr-2"
                  dangerouslySetInnerHTML={{ __html: "&sol;" }}
                ></span>
                Writings
              </Link>
            </div>
          </div>
        )}
      />
    )
  }
}

export default Navigation
