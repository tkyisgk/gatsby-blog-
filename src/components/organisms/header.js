import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './header.module.scss'
import Logo from '../atoms/logo'

const Header = ({ siteTitle }) => (
  <header className={styles.header} id="js-header">
    <div className={styles.inr}>
      <h1 className={styles.hdg}>
        <Link to="/" className={styles.link}>
          <Logo
            siteTitle={siteTitle}
            color="#EFEFEF"
          ></Logo>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
