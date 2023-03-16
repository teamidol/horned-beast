import React from 'react';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render(){
    return (
      <>
       <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeastDescription}</Modal.Title>
          </Modal.Header>
          <img src= {this.props.selectedBeastUrl} alt='a horned beast'></img>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;