import * as React from "react"

declare function require(x: string): any
const styles = require('./footer.module.scss')

const Layout: React.FC = () => {

  return (
    <footer className={styles.footer}>
      © copyright {new Date().getFullYear()} WEB AND ME
    </footer>
  )
}

export default Layout
