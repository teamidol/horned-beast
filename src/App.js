
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main';
import './App.css';
import data from './data/data.json'

import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }


handleCloseModal = () =>{
  this.setState({
    showModal: false
  })
}


handleOpenModal = (name) =>{
  this.setState({
    showModal: true,
    selectedBeast: name
  })
}



  render() {
    return (
      <>
        <Header/>
        <Main data={data} handleOpenModal = {this.handleOpenModal}/>

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedBeast}</Modal.Header>
        </Modal>
        <Footer/>
      </>
    )
  }
}




export default App;