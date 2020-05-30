import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/atoms/image"
import ShareSNS from '../components/molecules/shareSNS'
import ProfileBox from '../components/molecules/profileBox'
import TagList from '../components/molecules/tagList'
import TabPostList from '../components/organisms/tabPostList'

declare function require(x: string): any
const styles = require('./post.module.scss')

import { PostTemplateTypeQuery } from '../../types/graphql-types.d'

const Posts = ({ data }) => {

  const postData: PostTemplateTypeQuery = data

  const scrollFunc = (): void => {
    const targetEl: HTMLElement = document.getElementById('js-aside')
    const windowTop: number = window.pageYOffset
    const headerH: number = document.getElementById('js-header').clientHeight
    const targetTop: number = targetEl.offsetTop
    const targetH: number = targetEl.getBoundingClientRect().height
    const targetContentH: number = targetEl.firstElementChild.clientHeight
    const isPC = (): boolean => { return window.innerWidth >= 769 }
    const refresh = (): void => {
      // @ts-ignore
      targetEl.firstElementChild.style.position = ''
      // @ts-ignore
      targetEl.firstElementChild.style.top = ''
      // @ts-ignore
      targetEl.firstElementChild.style.left = ''
    }

    // SPの場合
    if(!isPC()) {
      refresh()
      return
    }

    // PCの場合
    if (targetTop + targetH - headerH - targetContentH < windowTop) return

    if (targetEl.getBoundingClientRect().top - headerH <= 0) {
      // @ts-ignore
      targetEl.firstElementChild.style.position = 'absolute'
      // @ts-ignore
      targetEl.firstElementChild.style.top = `${- (targetEl.getBoundingClientRect().top - headerH)}px`
      // @ts-ignore
      targetEl.firstElementChild.style.left = 0
    }
  }

  const dateFomatter = (date) => {
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()

    return `${year}.${month}.${day}`
  }

  const createUpdateDate = () => {
    if (postData.contentfulBlog.createdAt.split('T')[0] !== postData.contentfulBlog.updatedAt.split('T')[0]) {
      return (
        <span className={styles.updateDate}>(更新日:{dateFomatter(postData.contentfulBlog.updatedAt)})</span>
      )
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollFunc)
    return  () => document.removeEventListener('scroll', scrollFunc)
  })

  return (
    <Layout>
      <SEO title={postData.contentfulBlog.title} slug={postData.contentfulBlog.slug} />

      <article>

        <div className={styles.head}>
          <h1 className={styles.hdg1}>{postData.contentfulBlog.title}</h1>
          <p className={styles.date}>
            {dateFomatter(postData.contentfulBlog.createdAt)}
            {createUpdateDate()}
          </p>
          <div className={styles.thumb}>
            <Image publicURL={postData.contentfulBlog.thumbnail.localFile.publicURL} alt={''} />
          </div>
        </div>

        <div className={styles.content}>
          <main className={styles.main}>
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: postData.contentfulBlog.body.childMarkdownRemark.html }} />

            <div className={styles.catWrap}>
              <TagList tagList={postData.contentfulBlog.tags} />
            </div>
          </main>
          <aside className={styles.side} id="js-aside">
            <ShareSNS title={postData.contentfulBlog.title} />
          </aside>
        </div>

      </article>

      <div className={styles.tabWrap}>
        <TabPostList postList={postData.allContentfulBlog.edges} activeTag={postData.contentfulBlog.tags[0]} activeSlug={postData.contentfulBlog.slug} />
      </div>
      <div className={styles.prifileWrap}>
        <ProfileBox />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostTemplateType($slug: String!) {
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
          publicURL
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
              publicURL
            }
          }
        }
      }
    }
  }
`

export default Posts