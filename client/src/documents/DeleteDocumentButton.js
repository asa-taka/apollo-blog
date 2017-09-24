import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const DeleteDocumentButton = withRouter(props => {
  const { history } = props
  const submit = () => {
    if (!window.confirm('Are you sure to delete?')) return
    if (props.onSucceedRoute) history.push(props.onSucceedRoute)
  }
  return (
    <Button onClick={submit}>{props.children}</Button>
  )
})

DeleteDocumentButton.propTypes = {
  onSucceedRoute: PropTypes.string
}

export default DeleteDocumentButton
