import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        &bull;{" "}
        <a
          href={`https://www.linkedin.com/in/${social.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{" "}
        &bull;{" "}
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </footer>
    </div>
  )
}

export default Layout
