import React from 'react'
import { gql } from 'react-apollo'
import { PageHeader } from 'react-bootstrap'

const DocumentView = props => {
  const doc = props.doc
  return <div className="DocumentView">
    <PageHeader>{doc.title}</PageHeader>
    <div>{doc.body}</div>
  </div>
}

export default DocumentView
