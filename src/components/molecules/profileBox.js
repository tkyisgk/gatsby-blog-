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
        Javascriptが得意で、Vue.jsやReact.jsを書くことが好きです。コーヒーを飲み、音楽を聴きながら、コードを書くのが好きです。
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
