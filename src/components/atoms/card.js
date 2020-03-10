import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './card.module.scss'

import Image from "./image"

const Card = ({ post, cardSize }) => {

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
          <Image filename={post.node.thumbnail.localFile.name} />
        ) : ''}
      </div>
      <div className={styles.txtInr}>
        <h3 className={styles.title}>{post.node.title}</h3>
        <span className={styles.date}>{dateFomatter(post.node.updatedAt)}</span>
      </div>
    </Link>
  )
}

Card.propTypes = {
  post: PropTypes.object,
  cardSize: PropTypes.string
}

Card.defaultProps = {
  post: {},
  cardSize: 'medium'
}

export default Card
