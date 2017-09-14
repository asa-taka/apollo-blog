import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './routes'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils'

import AppHeader from './AppHeader'

import schema from './schema'

const client = new ApolloClient({
  networkInterface: mockNetworkInterfaceWithSchema({ schema })
})

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <div className="container">
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    exact path={route.path}
                    component={route.component}
                  />
                ))}
              </Switch>
            </div>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
