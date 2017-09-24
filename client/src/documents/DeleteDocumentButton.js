import React from 'react'
import { graphql, gql } from 'react-apollo'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const DeleteDocumentButton = withRouter(props => {
  const { id, history } = props
  const submit = async () => {
    if (!window.confirm('Are you sure to delete?')) return
    const res = await props.mutate({ variables: { id }}).catch(console.error)
    console.log(res)
    if (props.routeOnSucceed) history.push(props.routeOnSucceed)
  }
  return <Button onClick={submit}>{props.children}</Button>
})

DeleteDocumentButton.propTypes = {
  routeOnSucceed: PropTypes.string
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
