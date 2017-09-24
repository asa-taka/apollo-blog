import React from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { DocumentsQuery, DeleteDocumentMutation } from './queries'

const DeleteDocumentButton = withRouter(props => {
  const { mutate, id, history, routeOnSucceed } = props
  const submit = async () => {
    if (!window.confirm('Are you sure to delete?')) return
    const options = {
      variables: { id },
      refetchQueries: [{ query: DocumentsQuery }]
    }
    const res = await mutate(options).catch(console.error)
    console.log(res)
    if (routeOnSucceed) history.push(routeOnSucceed)
  }
  return <Button onClick={submit}>{props.children}</Button>
})

DeleteDocumentButton.propTypes = {
  routeOnSucceed: PropTypes.string
}

const withMutation = graphql(DeleteDocumentMutation)

export default withMutation(DeleteDocumentButton)
