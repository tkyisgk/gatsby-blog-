import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardList from '../components/molecules/cardList'
import ProfileBox from '../components/molecules/profileBox'

declare function require(x: string): any
const styles = require('./index.module.scss')

import { IndexPageTypeQuery } from "../../types/graphql-types"

type IndexProps = {
  data: IndexPageTypeQuery
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  const blogList = data.allContentfulBlog.edges
  const largeList = blogList.slice(0, 2)
  const mediumList = blogList.slice(2)

  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.sectionBlog}>
        <h2 className={styles.hdg2}>Blog</h2>
        <div className={styles.cardWrapLarge}>
          <CardList postList={largeList} cardSize="Large" />
        </div>
        <div className={styles.cardWrapMedium}>
          <CardList postList={mediumList} />
        </div>
      </section>

      <section className={styles.sectionProfile}>
        <h2 className={styles.hdg2}>Profile</h2>
        <div className={styles.profileWrap}>
          <ProfileBox />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageType {
    allContentfulBlog(
      sort: {order: DESC, fields: createdAt}
    ) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "YYYY.MM.DD")
          updatedAt(formatString: "YYYY.MM.DD")
          body {
            body
          },
          thumbnail {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default IndexPage
