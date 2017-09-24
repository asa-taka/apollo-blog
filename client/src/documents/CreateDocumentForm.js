import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import * as Document from './models/Document'

const MUTATION = gql`
  mutation submit($input: DocumentInput!){
    createDocument(input: $input) { id }
  }
`
const withMutation = graphql(MUTATION, {
  props: ({ mutate }) => ({
    onSubmit: input => {
      mutate({ variables: { input }})
        .then(console.log)
        .catch(console.error)
    }
  })
})

export default withMutation(Document.Form)
