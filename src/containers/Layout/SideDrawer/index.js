import React from 'react'

const SideDrawer = () => (
  <div className="side-drawer-ovelay">
    <div className="side-drawer">
      <div className="side-drawer-close-btn">
        <a className="menu-close-btn" href="#" onClick={() => alert('Open SideDrawer')}>
          <i className="material-icons md-30">close</i>
        </a>
      </div>
      <div className="side-drawer-message">
        <h4>Hello,</h4>
      </div>
    </div>
  </div>
)

export default SideDrawer
