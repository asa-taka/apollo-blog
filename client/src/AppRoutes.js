import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DocumentIndex from './documents/Index'

export default props => (
  <Switch>

    <Route exact path="/" component={({ match }) => (
      <div>Root</div>
    )}/>

    <Route path="/docs" component={({ match }) => (
      <DocumentIndex/>
    )}/>

  </Switch>
)
