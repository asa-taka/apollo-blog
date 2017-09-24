import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import * as Document from './models/Document'

const MUTATION = gql`
  mutation submit($id: ID!, $input: DocumentInput!){
    updateDocument(id: $id, input: $input) { id }
  }
`
const withMutation = graphql(MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onSubmit: input => {
      mutate({ variables: { id: ownProps.id, input }})
        .then(console.log)
        .catch(console.error)
    }
  })
})

export default withMutation(Document.Form)
