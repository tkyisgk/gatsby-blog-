import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"

import CardList from '../components/molecules/cardList'
import ProfileBox from '../components/molecules/profileBox'

export const query = graphql`
  query {
    allContentfulBlog(
      sort: {order: DESC, fields: createdAt}
    ) {
      edges {
        node {
          title,
          slug,
          createdAt,
          updatedAt,
          body {
            body
          },
          thumbnail {
            localFile {
              name
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const blogList = data.allContentfulBlog.edges
  const largeList = blogList.slice(0, 2)
  const mediumList = blogList.slice(2)

  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.sectionBlog}>
        <h2 className={styles.hdg2}>Blog</h2>
        <div className={styles.cardWrapLarge}>
          <CardList
            postList={largeList}
            cardSize="Large"
          ></CardList>
        </div>
        <div className={styles.cardWrapMedium}>
          <CardList
            postList={mediumList}
          ></CardList>
        </div>
      </section>

      <section className={styles.sectionProfile}>
        <h2 className={styles.hdg2}>Profile</h2>
        <div className={styles.profileWrap}>
          <ProfileBox></ProfileBox>
        </div>
      </section>
    </Layout>
  )
}