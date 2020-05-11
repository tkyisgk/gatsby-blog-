/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from './organisms/header'
import Footer from './organisms/footer'

declare function require(x: string): any
const styles = require('./layout.module.scss')

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.container}>
        <div className={styles.inr}>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
