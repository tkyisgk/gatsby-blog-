import * as React from "react"
import Card from '../atoms/card'

import { ContentfulBlogTypeQuery } from '../../../types/contentful-blog-types.d'

declare function require(x: string): any
const styles = require('./cardList.module.scss')

type CardListProps = {
  postList: ContentfulBlogTypeQuery[],
  cardSize?: string
}

const CardList: React.FC<CardListProps> = ({ postList, cardSize = 'Medium' }) => (

  <ul className={styles.list}>
    {postList.map((item, key) => (
      <li
        className={`${styles.item} ${styles[`is${cardSize}`]}`}
        key={key}
      >
        <Card post={item} />
      </li>
    ))}
  </ul>
)

export default CardList
