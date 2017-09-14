import React from 'react'

import { routes as documentRoutes } from './components/documents/routes'

export const routes = [
  {
    path: '/',
    component: () => {
      return (
        <div>RootPage</div>
      )
    }
  },
  {
    path: '/docs',
    component: () => {
      return (
        <div>DocumentRoot</div>
      )
    },
    routes: documentRoutes
  },
]
