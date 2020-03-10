import PropTypes from "prop-types"
import React from "react"

import styles from './tagList.module.scss'

import Tag from '../atoms/tag.js'

const TagList = ({ tagList }) => {
  return (
    <ul className={styles.tags}>
      {tagList.map((item, key) => (
        <li className={styles.tag} key={item}>
          <Tag tag={item}></Tag>
        </li>
      ))}
    </ul>
  )
}

TagList.propTypes = {
  tagList: PropTypes.array
}

TagList.defaultProps = {
  tagList: []
}

export default TagList
