import React from 'react'
import Form from '../common/Form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const schema = {
  type: 'object',
  properties: {
    title: { type: 'string', default: 'your document title' },
    body: { type: 'string', default: '' },
  }
}

const CreateDocument = props => {

  const onSubmit = data => {
    const variables = { input: data.formData }
    props.mutate({ variables }).then(console.log, console.error)
  }

  return (
    <div>
      <Form schema={schema} onSubmit={onSubmit}/>
    </div>
  )
}

const QUERY = gql`
  mutation submit($input: DocumentInput!){
    createDocument(input: $input) { id }
  }
`

export default graphql(QUERY)(CreateDocument)
