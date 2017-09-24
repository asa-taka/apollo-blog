import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import DocumentIndex from './documents/Index'

export default props => (
  <Switch>

    <Route path="/docs/" component={({ match }) => (
      <DocumentIndex/>
    )}/>

    <Redirect from="/" to="/docs/"/>

  </Switch>
)
