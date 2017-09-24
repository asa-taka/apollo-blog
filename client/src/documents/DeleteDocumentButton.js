import React from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { DocumentsQuery, DeleteDocumentMutation } from './queries'

const DeleteDocumentButton = withRouter(props => {
  const { id, history } = props
  const submit = async () => {
    if (!window.confirm('Are you sure to delete?')) return
    const options = {
      variables: { id },
      refetchQueries: [{ query: DocumentsQuery }]
    }
    const res = await props.mutate(options).catch(console.error)
    console.log(res)
    if (props.routeOnSucceed) history.push(props.routeOnSucceed)
  }
  return <Button onClick={submit}>{props.children}</Button>
})

DeleteDocumentButton.propTypes = {
  routeOnSucceed: PropTypes.string
}

const withMutation = graphql(DeleteDocumentMutation)

export default withMutation(DeleteDocumentButton)
