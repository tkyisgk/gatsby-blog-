// import { Link } from "gatsby"
import React from "react"

import styles from './profileBox.module.scss'

import Image from "../atoms/image"

const ProfileBox = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.thumb}>
        <Image filename="masao.png" />
      </div>
      <div className={styles.txt}>
        <h3 className={styles.hdg}>石垣 琢也</h3>
        <p className={styles.desc}>
          都内在住で、広告関連のweb制作会社に勤めるフロントエンドエンジニアです。<br />
          Javascriptが好きです。コーヒーと音楽とプログラミングが好きです。
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
