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

  const dateFomatter = (date) => {
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()

    return `${year}.${month}.${day}`
  }

  return (
    <Link to={post.node.slug} className={styles.link}>
      <div className={styles.thumb}>
        {post.node.thumbnail ? (
          <Image filename={post.node.thumbnail.localFile.name} alt="" />
        ) : ''}
      </div>
      <div className={styles.txtInr}>
        <h3 className={styles.title}>{post.node.title}</h3>
        <span className={styles.date}>{dateFomatter(post.node.createdAt)}</span>
      </div>
    </Link>
  )
}

export default Card
