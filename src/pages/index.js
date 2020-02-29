import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.scss"

export const query = graphql`
  query {
    allContentfulBlog(
      limit: 3
    ) {
      edges {
        node {
          title
          thumbnail {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  console.log(data.allContentfulBlog.edges)
  const blogList = data.allContentfulBlog.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className={styles.container}>
        <Image filename="gatsby-astronaut" />
      </div>
      <ul className={styles.list}>
        {blogList.map((item, key) => (
          <li className={styles.item} key={item.node.id}>
            <h2>{item.node.title}</h2>
            <img src={item.node.thumbnail.fluid.src} alt="" />
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}