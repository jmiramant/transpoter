import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button, Modal} from 'react-bootstrap'

export default class SecretModal extends React.Component {
  
  constructor(props, context) {
    super(props, context)
  }

  render () {
    const { showModal } = this.props

    return (<div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={showModal} >Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>)
  }
}