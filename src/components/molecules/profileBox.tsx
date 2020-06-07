// import { Link } from "gatsby"
import * as React from "react"

declare function require(x: string): any
const styles = require('./profileBox.module.scss')

import Image from "../atoms/image"

const ProfileBox: React.FC = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.thumb}>
        <Image fileName="masao.png" alt="profile image" />
      </div>
      <div className={styles.txt}>
        <h3 className={styles.hdg}>石垣 琢也</h3>
        <p className={styles.desc}>
          都内のインタラクティブエージェンシーに勤めるフロントエンドエンジニアです。<br />
          Javascriptとコーヒーと音楽と自転車が好きです。
        </p>
        <a
          href="http://tkyisgk.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >ポートフォリオサイトはこちら</a>
      </div>
    </div>
  )
}

export default ProfileBox
