import * as React from "react"

declare function require(x: string): any
const styles = require('./tagList.module.scss')

import Tag from '../atoms/tag'

type TagListProps = {
  tagList: string[]
}

const TagList: React.FC<TagListProps> = ({ tagList }) => {
  return (
    <ul className={styles.tags}>
      {tagList.map((item, key) => (
        <li className={styles.tag} key={key}>
          <Tag tag={item} />
        </li>
      ))}
    </ul>
  )
}

export default TagList
