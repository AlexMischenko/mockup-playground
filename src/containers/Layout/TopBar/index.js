import React from 'react'

const TopBar = () => (
  <nav>
    <a className="menu-toggle-btn" href="#" onClick={() => alert('Open SideDrawer')}>
      <i className="material-icons md-30">menu</i>
    </a>

    <form className="topbar-search">
      <i class="material-icons md-30">search</i>
      <input className="topbar-search-input" type="text" placeholder="Search..." />
    </form>
  </nav>
)

export default TopBar
