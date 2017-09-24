import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import * as Document from './models/Document'
import { funcfy } from '../common/utils'

const MUTATION = gql`
  mutation submit($id: ID!, $input: DocumentInput!){
    updateDocument(id: $id, input: $input) { id title body }
  }
`
const withMutation = graphql(MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onSubmit: async input => {
      const { id, history, routeOnSucceed } = ownProps
      const { data } = await mutate({ variables: { id, input }}).catch(console.error)
      console.log(data)
      if (routeOnSucceed) history.push(funcfy(routeOnSucceed)(id))
    }
  })
})

export default withRouter(withMutation(Document.Form))
