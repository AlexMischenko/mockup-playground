import React from 'react'
import PropTypes from 'prop-types'

import TopBar from '../Layout/TopBar'
import SideDrawer from '../Layout/SideDrawer'
import Footer from '../Layout/Footer'

const Layout = props => (
  <div className="page-layout">
    <SideDrawer />
    <TopBar />
    {props.children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
