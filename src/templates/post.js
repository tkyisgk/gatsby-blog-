import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/atoms/image"
import ProfileBox from '../components/molecules/profileBox'
import TagList from '../components/molecules/tagList'
import TabPostList from '../components/organisms/tabPostList'

import styles from './post.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
      createdAt
      slug
      title
      updatedAt,
      tags,
      body {
        childMarkdownRemark {
          html
        }
      },
      thumbnail {
        localFile {
          name
        }
      }
    },
    allContentfulBlog(
      sort: {order: DESC, fields: createdAt}
    ) {
      edges {
        node {
          title,
          slug,
          createdAt,
          updatedAt,
          tags,
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
  console.warn(data.contentfulBlog)
  const dateFomatter = (date) => {
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()

    return `${year}.${month}.${day}`
  }

  return (
    <Layout>
      <SEO title={data.contentfulBlog.title} />

      <article>

        <div className={styles.head}>
          <h1 className={styles.hdg1}>{data.contentfulBlog.title}</h1>
          <p className={styles.date}>{dateFomatter(data.contentfulBlog.updatedAt)}</p>
          <div className={styles.thumb}>
            <Image filename={data.contentfulBlog.thumbnail.localFile.name} />
          </div>
        </div>

        <div className={styles.content}>
          <main className={styles.main}>
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: data.contentfulBlog.body.childMarkdownRemark.html }} />

            <div className={styles.catWrap}>
              <TagList tagList={data.contentfulBlog.tags}></TagList>
            </div>
          </main>
          <aside className={styles.side}></aside>
        </div>

      </article>

      <div className={styles.tabWrap}>
        <TabPostList postList={data.allContentfulBlog.edges} activeTag={data.contentfulBlog.tags[0]}></TabPostList>
      </div>
      <div className={styles.prifileWrap}>
        <ProfileBox></ProfileBox>
      </div>
    </Layout>
  )
}

