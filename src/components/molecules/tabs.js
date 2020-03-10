import PropTypes from "prop-types"
import React from "react"

import styles from './tabs.module.scss'

const Tabs = ({ currentTabType, tabData, onClick }) => {

  return (
    <div className={styles.tabs}>
      {tabData.map(tab => (
        <button
          type="button"
          key={tab.type}
          className={`${styles.tab} ${currentTabType === tab.type ? styles.active : ''}`}
          onClick={() => onClick(tab.type)}
        >{tab.content}</button>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  currentTabType: PropTypes.string,
  tabData: PropTypes.array,
  onClick: PropTypes.func
}

Tabs.defaultProps = {
  currentTabType: '',
  tabData: [],
  onClick: function() {}
}

export default Tabs
