import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Twitter from '../atoms/twitter'
import Facebook from '../atoms/facebook'
import Hatena from '../atoms/hatena'

declare function require(x: string): any
const styles = require('./shareSNS.module.scss')

interface ShareSNSProps {
  title: string
}

const ShareSNS: React.FC<ShareSNSProps> = ({title}) => {

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

  if (typeof window !== 'undefined') {

    const setShareTitle = (): string => {
      return encodeURI(`${title} | ${site.siteMetadata.title}`)
    }

    return (
      <div className={styles.shareWrap}>
        <a className={styles.link} href={`https://twitter.com/share?url=${window.location.href}&text=${setShareTitle()}`} target="_blank" rel="noreferrer noopener">
          <Twitter iconColor={`#EFEFEF`} bgColor={`#858585`} />
        </a>
        <a className={styles.link} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer noopener">
          <Facebook iconColor={`#EFEFEF`} bgColor={`#858585`} />
        </a>
        <a className={styles.link} href={`https://b.hatena.ne.jp/add?mode=confirm&url=${window.location.href}&title=${setShareTitle()}`} target="_blank" rel="noreferrer noopener">
          <Hatena iconColor={`#EFEFEF`} bgColor={`#858585`} />
        </a>
      </div>
    )

  } else {
    return null
  }
}

export default ShareSNS
