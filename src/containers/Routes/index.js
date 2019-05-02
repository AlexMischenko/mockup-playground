import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import PostDetails from '../PostDetails'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/post" component={PostDetails} />
    <Route path="/post/:id" component={PostDetails} />
  </Switch>
)

export default Routes
