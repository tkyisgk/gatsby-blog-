import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/atoms/image"
import ShareSNS from '../components/molecules/shareSNS'
import ProfileBox from '../components/molecules/profileBox'
import TagList from '../components/molecules/tagList'
import TabPostList from '../components/organisms/tabPostList'
import Disqus from 'gatsby-plugin-disqus'

declare function require(x: string): any
const styles = require('./post.module.scss')

import { PostTemplateTypeQuery } from '../../types/graphql-types.d'

const Posts = ({ data, location }) => {

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

  const createUpdateDate = () => {
    if (postData.contentfulBlog.createdAt !== postData.contentfulBlog.updatedAt) {
      return (
        <span className={styles.updateDate}>(更新日:{postData.contentfulBlog.updatedAt})</span>
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
            {postData.contentfulBlog.createdAt}
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

      <div className={styles.comment}>
        <Disqus
          url={location.href}
          identifier={postData.contentfulBlog.title}
          title={`${postData.contentfulBlog.title} | ${data.site.siteMetadata.title}`}
        />
      </div>

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
      createdAt(formatString: "YYYY.MM.DD")
      slug
      title
      updatedAt(formatString: "YYYY.MM.DD")
      tags
      body {
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        localFile {
          publicURL
        }
      }
    }
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
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Posts