import React from 'react'
import PropTypes from 'prop-types'

import TopBar from '../Layout/TopBar'
import SideDrawer from '../Layout/SideDrawer'
import Footer from '../Layout/Footer'

const Layout = ({ children, sideDrawerVisible, openSideDrawer, closeSideDrawer }) => (
  <div className="page-layout">
    <SideDrawer sideDrawerVisible={sideDrawerVisible} closeSideDrawer={closeSideDrawer} />
    <TopBar openSideDrawer={openSideDrawer} />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  sideDrawerVisible: PropTypes.bool.isRequired,
  openSideDrawer: PropTypes.func.isRequired,
  closeSideDrawer: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Layout
