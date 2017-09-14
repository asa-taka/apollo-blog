import React from 'react'

import CreateDocument from './CreateDocument'
import ListDocument from './ListDocument'
import UpdateDocument from './UpdateDocument'

export const routes = [
  {
    path: '',
    component: ({ match }) => {
      return (
        <div>
          <ListDocument/>
        </div>
      )
    }
  },
  {
    path: ':id',
    component: ({ match }) => {
      const id = match.params.id
      return (
        <div>
          <h1>{id}</h1>
          <CreateDocument/>
          <UpdateDocument id={id}/>
          <ListDocument/>
        </div>
      )
    }
  },
]
