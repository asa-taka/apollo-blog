import React from 'react'
import { gql } from 'react-apollo'
import { PageHeader } from 'react-bootstrap'

const DocumentView = props => {
  const { title, body } = props
  return <div className="DocumentView">
    <PageHeader>{title}</PageHeader>
    <div>{body}</div>
  </div>
}

export default DocumentView
