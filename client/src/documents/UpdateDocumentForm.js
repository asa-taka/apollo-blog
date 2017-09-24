import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import * as Document from './models/Document'
import { funcfy } from '../common/utils'

const MUTATION = gql`
  mutation submit($id: ID!, $input: DocumentInput!){
    updateDocument(id: $id, input: $input) { id }
  }
`
const withMutation = graphql(MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onSubmit: input => {
      const { id, history, routeOnSucceed } = ownProps
      mutate({ variables: { id, input }})
        .then(({ data }) => {
          console.log(data)
          if (routeOnSucceed) history.push(funcfy(routeOnSucceed)(id))
        })
        .catch(console.error)
    }
  })
})

export default withRouter(withMutation(Document.Form))
