import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider, createNetworkInterface } from 'react-apollo'
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils'

import AppHeader from './AppHeader'

import schema from './schema'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql'
  })
})

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <AppHeader/>
            <ApolloProvider client={client}>
              <div className="container">
                <AppRoutes/>
              </div>
            </ApolloProvider>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
