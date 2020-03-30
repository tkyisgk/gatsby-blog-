import PropTypes from "prop-types"
import React from "react"

import Twitter from '../atoms/twitter.js'
import Facebook from '../atoms/facebook.js'
import Hatena from '../atoms/hatena.js'

import styles from './shareSNS.module.scss'

const ShareSNS = ({ currentTabType, tabData, onClick }) => {

  return (
    <div className={styles.shareWrap}>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer noopener">
        <Twitter iconColor={`#EFEFEF`} bgColor={`#858585`} />
      </a>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer noopener">
        <Facebook iconColor={`#EFEFEF`} bgColor={`#858585`} />
      </a>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer noopener">
        <Hatena iconColor={`#EFEFEF`} bgColor={`#858585`} />
      </a>
    </div>
  )
}

ShareSNS.propTypes = {
  title: PropTypes.string
}

ShareSNS.defaultProps = {
  title: ''
}

export default ShareSNS
