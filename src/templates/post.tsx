import * as React from "react"
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

class Posts extends React.Component {

  private data: PostTemplateTypeQuery

  constructor(args) {
    super(args)

    this.data = args.data
  }

  componentDidMount(): void {
    this.addScrollEvent()
  }

  componentWillUnmount(): void {
    this.removeScrollEvent()
  }

  scrollFunc(): void {
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
    if (!isPC()) {
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

  addScrollEvent(): void {
    document.addEventListener('scroll', this.scrollFunc)
  }

  removeScrollEvent(): void {
    document.removeEventListener('scroll', this.scrollFunc)
  }

  render() {

    const dateFomatter = (date) => {
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth() + 1
      const day = new Date(date).getDate()

      return `${year}.${month}.${day}`
    }

    const createUpdateDate = () => {
      if (this.data.contentfulBlog.createdAt.split('T')[0] !== this.data.contentfulBlog.updatedAt.split('T')[0]) {
        return (
          <span className={styles.updateDate}>(更新日:{dateFomatter(this.data.contentfulBlog.updatedAt)})</span>
        )
      }
    }

    return (
      <Layout>
        <SEO title={this.data.contentfulBlog.title} slug={this.data.contentfulBlog.slug} />

        <article>

          <div className={styles.head}>
            <h1 className={styles.hdg1}>{this.data.contentfulBlog.title}</h1>
            <p className={styles.date}>
              {dateFomatter(this.data.contentfulBlog.createdAt)}
              {createUpdateDate()}
            </p>
            <div className={styles.thumb}>
              <Image filename={this.data.contentfulBlog.thumbnail.localFile.name} alt={''} />
            </div>
          </div>

          <div className={styles.content}>
            <main className={styles.main}>
              <div className={styles.article} dangerouslySetInnerHTML={{ __html: this.data.contentfulBlog.body.childMarkdownRemark.html }} />

              <div className={styles.catWrap}>
                <TagList tagList={this.data.contentfulBlog.tags} />
              </div>
            </main>
            <aside className={styles.side} id="js-aside">
              <ShareSNS title={this.data.contentfulBlog.title} />
            </aside>
          </div>

        </article>

        <div className={styles.tabWrap}>
          <TabPostList postList={this.data.allContentfulBlog.edges} activeTag={this.data.contentfulBlog.tags[0]} activeSlug={this.data.contentfulBlog.slug} />
        </div>
        <div className={styles.prifileWrap}>
          <ProfileBox />
        </div>
      </Layout>
    )
  }
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

export default Posts