import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import * as Document from './models/Document'
import { funcfy } from '../common/utils'

const MUTATION = gql`
  mutation submit($input: DocumentInput!){
    createDocument(input: $input) { id title body }
  }
`
const withMutation = graphql(MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onSubmit: async input => {
      const { data } = await mutate({ variables: { input }}).catch(console.error)
      console.log(data)
      const id = data.createDocument.id
      const { routeOnSucceed, history } = ownProps
      if (routeOnSucceed) history.push(funcfy(routeOnSucceed)(id))
    }
  })
})

export default withRouter(withMutation(Document.Form))
