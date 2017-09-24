import React from 'react'
import { graphql, gql } from 'react-apollo'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const DeleteDocumentButton = withRouter(props => {
  const { id, history } = props
  const submit = () => {
    if (!window.confirm('Are you sure to delete?')) return
    props.mutate({ variables: { id }})
      .then(res => {
        console.log(res)
        if (props.onSucceedRoute) history.push(props.onSucceedRoute)
      })
      .catch(console.error)
  }
  return (
    <Button onClick={submit}>{props.children}</Button>
  )
})

DeleteDocumentButton.propTypes = {
  onSucceedRoute: PropTypes.string
}

const MUTATION = gql`
  mutation DeleteDocument($id: ID!) {
    deleteDocument(id: $id) {
      id title body
    }
  }
`
const withMutation = graphql(MUTATION)

export default withMutation(DeleteDocumentButton)
