import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Twitter from '../atoms/twitter.js'
import Facebook from '../atoms/facebook.js'
import Hatena from '../atoms/hatena.js'

import styles from './shareSNS.module.scss'

function ShareSNS({title}) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={styles.shareWrap}>
      <a className={styles.link} href={`https://twitter.com/share?url=${window.location.href}&text=${title} | ${site.siteMetadata.title}`} target="_blank" rel="noreferrer noopener">
        <Twitter iconColor={`#EFEFEF`} bgColor={`#858585`} />
      </a>
      <a className={styles.link} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer noopener">
        <Facebook iconColor={`#EFEFEF`} bgColor={`#858585`} />
      </a>
      <a className={styles.link} href={`https://b.hatena.ne.jp/add?mode=confirm&url=${window.location.href}&title=${title} | ${site.siteMetadata.title}" target="_blank" rel="nofollow">はてなブックマークでシェアする</a>`} target="_blank" rel="noreferrer noopener">
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
