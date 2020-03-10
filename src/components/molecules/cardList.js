import PropTypes from "prop-types"
import React from "react"

import styles from './cardList.module.scss'

import Card from '../atoms/card.js'

const CardList = ({ postList, cardSize }) => (
  <ul className={styles.list}>
    {postList.map((item, key) => (
      <li
        className={`${styles.item} ${styles[`is${cardSize}`]}`}
        key={item.node.id}
      >
        <Card
          post={item}
          cardSize={cardSize}
        ></Card>
      </li>
    ))}
  </ul>
)

CardList.propTypes = {
  postList: PropTypes.array,
  cardSize: PropTypes.string
}

CardList.defaultProps = {
  postList: [],
  cardSize: 'Medium'
}

export default CardList
