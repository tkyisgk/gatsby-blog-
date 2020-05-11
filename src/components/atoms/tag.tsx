import * as React from "react"

declare function require(x: string): any
const styles = require('./tag.module.scss')

interface TagProps {
  tag: string
}

const Tag: React.FC<TagProps> = ({ tag }) => {

  return (
    <span className={styles.link}>{tag}</span>
  )
}

export default Tag
