import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import LayoutWrapper from './containers/Layout/index'
import Routes from './containers/Routes'

function App() {
  return (
    <div className="wrapper">
      <Router>
        <LayoutWrapper>
          <Routes />
        </LayoutWrapper>
      </Router>
    </div>
  )
}

export default App
