import React from 'react'
import PropTypes from 'prop-types'

const TopBar = ({ openSideDrawer }) => (
  <nav>
    <a className="menu-toggle-btn" href="#" onClick={openSideDrawer}>
      <i className="material-icons md-30">menu</i>
    </a>

    <form className="topbar-search">
      <i class="material-icons md-30">search</i>
      <input className="topbar-search-input" type="text" placeholder="Search..." />
    </form>
  </nav>
)

TopBar.propTypes = {
  openSideDrawer: PropTypes.func.isRequired,
}

export default TopBar
