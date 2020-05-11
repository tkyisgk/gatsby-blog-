import * as React from "react"

declare function require(x: string): any
const styles = require('./cardList.module.scss')

import Card from '../atoms/card'

interface CardListProps {
  postList: Object[],
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
