import { Link } from "gatsby"
import * as React from "react"
import Logo from '../atoms/logo'

declare function require(x: string): any
const styles = require('./header.module.scss')

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className={styles.header} id="js-header">
    <div className={styles.inr}>
      <h1 className={styles.hdg}>
        <Link to="/" className={styles.link}>
          <Logo siteTitle={siteTitle} color="#EFEFEF" />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
