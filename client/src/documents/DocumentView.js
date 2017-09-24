import React from 'react'
import { PageHeader } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

const DocumentView = props => {
  const { title, body } = props
  return <div className="DocumentView">
    <PageHeader>{title}</PageHeader>
    <ReactMarkdown source={body}/>
  </div>
}

export default DocumentView
