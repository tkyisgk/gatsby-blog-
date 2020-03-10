import React from "react"

import styles from "./footer.module.scss"

const Layout = () => {

  return (
    <footer className={styles.footer}>
      © copyright {new Date().getFullYear()} WEB AND ME
    </footer>
  )
}

export default Layout
