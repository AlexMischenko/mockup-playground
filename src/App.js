import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import LayoutWrapper from './containers/Layout/index'
import Routes from './containers/Routes'

function App() {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false)

  const openSideDrawer = () => {
    setSideDrawerVisible(true)
  }

  const closeSideDrawer = () => {
    setSideDrawerVisible(false)
  }

  return (
    <div className="wrapper">
      <Router>
        <LayoutWrapper
          sideDrawerVisible={sideDrawerVisible}
          openSideDrawer={openSideDrawer}
          closeSideDrawer={closeSideDrawer}
        >
          <Routes />
        </LayoutWrapper>
      </Router>
    </div>
  )
}

export default App
