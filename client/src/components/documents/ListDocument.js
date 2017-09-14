import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const ListDocument = props => {

  const data = props.data
  if (data.loading) return <div>Loading</div>
  if (data.error) return <div>{data.error}</div>

  const docs = data.getDocuments
  return (
    <div>{docs.map(e => <div key={e.id}>{e.id}</div>)}</div>
  )
}

const QUERY = gql`
  query {
    getDocuments { id title body }
  }
`

export default graphql(QUERY)(ListDocument)
