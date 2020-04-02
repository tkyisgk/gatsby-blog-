import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/atoms/image"
import ShareSNS from '../components/molecules/shareSNS'
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

class Posts extends Component {

  constructor(props) {
    super()

    this.data = props.data
  }

  componentDidMount() {
    this.addScrollEvent()
  }

  componentWillUnmount() {
    this.removeScrollEvent()
  }

  scrollFunc() {
    const windowTop = window.pageYOffset
    const headerH = document.getElementById('js-header').clientHeight
    const targetEl = document.getElementById('js-aside')
    const targetTop = targetEl.offsetTop
    const targetH = targetEl.getBoundingClientRect().height
    const targetContentH = targetEl.firstElementChild.clientHeight
    const isPC = () => { return window.innerWidth >= 769 }
    const refresh = () => {
      targetEl.firstElementChild.style.position = ''
      targetEl.firstElementChild.style.top = ''
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
      targetEl.firstElementChild.style.position = 'absolute'
      targetEl.firstElementChild.style.top = `${- (targetEl.getBoundingClientRect().top - headerH)}px`
      targetEl.firstElementChild.style.left = 0
    }
  }

  addScrollEvent() {
    document.addEventListener('scroll', this.scrollFunc)
  }

  removeScrollEvent() {
    document.removeEventListener('scroll', this.scrollFunc)
  }

  render() {

    const dateFomatter = (date) => {
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth() + 1
      const day = new Date(date).getDate()

      return `${year}.${month}.${day}`
    }

    return (
      <Layout>
        <SEO title={this.data.contentfulBlog.title} />

        <article>

          <div className={styles.head}>
            <h1 className={styles.hdg1}>{this.data.contentfulBlog.title}</h1>
            <p className={styles.date}>{dateFomatter(this.data.contentfulBlog.updatedAt)}</p>
            <div className={styles.thumb}>
              <Image filename={this.data.contentfulBlog.thumbnail.localFile.name} />
            </div>
          </div>

          <div className={styles.content}>
            <main className={styles.main}>
              <div className={styles.article} dangerouslySetInnerHTML={{ __html: this.data.contentfulBlog.body.childMarkdownRemark.html }} />

              <div className={styles.catWrap}>
                <TagList tagList={this.data.contentfulBlog.tags}></TagList>
              </div>
            </main>
            <aside className={styles.side} id="js-aside">
              <ShareSNS title={this.data.contentfulBlog.title} />
            </aside>
          </div>

        </article>

        <div className={styles.tabWrap}>
          <TabPostList postList={this.data.allContentfulBlog.edges} activeTag={this.data.contentfulBlog.tags[0]}></TabPostList>
        </div>
        <div className={styles.prifileWrap}>
          <ProfileBox />
        </div>
      </Layout>
    )
  }
}

export default Posts