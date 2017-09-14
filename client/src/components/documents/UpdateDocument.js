import React from 'react'
import Form from '../common/Form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import schema from './schema'

const CreateDocument = props => {

  const onSubmit = data => {
    const variables = { id: props.id, input: data.formData }
    props.mutate({ variables }).then(console.log, console.error)
  }

  return (
    <Form schema={schema} onSubmit={onSubmit}/>
  )
}

const QUERY = gql`
  mutation submit($id: ID!, $input: DocumentInput!){
    updateDocument(id: $id, input: $input) { id }
  }
`

export default graphql(QUERY)(CreateDocument)
