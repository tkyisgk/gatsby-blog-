import PropTypes from "prop-types"
import React from "react"

import styles from './tag.module.scss'

const Tag = ({ tag }) => {

  return (
    <span className={styles.link}>{tag}</span>
  )
}

Tag.propTypes = {
  tag: PropTypes.string
}

Tag.defaultProps = {
  tag: '',
}

export default Tag
