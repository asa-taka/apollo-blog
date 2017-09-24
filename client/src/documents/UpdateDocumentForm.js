import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import * as Document from './models/Document'

const MUTATION = gql`
  mutation submit($id: ID!, $input: DocumentInput!){
    updateDocument(id: $id, input: $input) { id }
  }
`
const withMutation = graphql(MUTATION, ({
  props: ({ id, mutate }) => ({
    onSubmit: input => {
      mutate({ variables: { id: 1, input }})
        .then(console.log)
        .catch(console.error)
    }
  })
}))

export default withMutation(Document.Form)
