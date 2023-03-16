
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main';
import './App.css';
import data from './data/data.json'

import React, { Component } from 'react'
// import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      selectedBeastUrl: '',
      selectedBeastDescription: ''

    }
  }


  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }


  handleOpenModal = (name, image, description) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      selectedBeastUrl: image,
      selectedBeastDescription: description
 
    })
  }


  render() {

console.log(this.state);

    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal} />

        <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} selectedBeastUrl={this.state.selectedBeastUrl} selectedBeastDescription={this.state.selectedBeastDescription}/>

        {/* <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedBeast}
          </Modal.Header>
        </Modal> */}

        <Footer />
      </>
    )
  }
}




export default App;