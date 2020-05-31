import { Link } from "gatsby"
import React from "react"
import Image from "./image"

import { ContentfulBlogTypeQuery } from '../../../types/contentful-blog-types.d'

declare function require(x: string): any
const styles = require('./card.module.scss')

type CardProps = {
  post: ContentfulBlogTypeQuery
}

const Card: React.FC<CardProps> = ({ post }) => {

  return (
    <Link to={`${post.node.slug}/`} className={styles.link}>
      <div className={styles.thumb}>
        {post.node.thumbnail ? (
          <Image publicURL={post.node.thumbnail.localFile.publicURL} alt="" />
        ) : ''}
      </div>
      <div className={styles.txtInr}>
        <h3 className={styles.title}>{post.node.title}</h3>
        <span className={styles.date}>{post.node.createdAt}</span>
      </div>
    </Link>
  )
}

export default Card
