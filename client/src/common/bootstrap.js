// Modified Bootstrap Components

import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const LinkButton = props => (
  <LinkContainer to={props.to}>
    <Button {...props}>{props.children}</Button>
  </LinkContainer>
)

export class ModalButton extends React.Component {

  constructor() {
    super()
    this.state = { show: false }
  }

  // for other components
  show() { this.setState({ show: true }) }
  hide() { this.setState({ show: false }) }

  render() {
    const { title, children, footer } = this.props
    const show = () => this.show()
    const hide = () => this.hide()
    return (
      <div className="modal-container" style={{height: 200}}>
        <Button onClick={show}>{title}</Button>
        <Modal
          show={this.state.show}
          onHide={hide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          {footer && <Modal.Footer>{footer}</Modal.Footer>}
        </Modal>
      </div>
    )
  }
}
