import React from 'react'
import './App.css'
import LayoutWrapper from './containers/Layout/index'
import Routes from './containers/Routes'

function App() {
  return (
    <div className="wrapper">
      <LayoutWrapper>
        <Routes />
      </LayoutWrapper>
    </div>
  )
}

export default App
