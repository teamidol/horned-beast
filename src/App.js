
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main';
import './App.css';
import data from './data/data.json';

import React, { Component } from 'react'
// import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';
import { Form } from 'react-bootstrap'


// let numOfHorns = [1, 2, 3, 100];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      selectedBeastUrl: '',
      selectedBeastDescription: '',
      sortedHorns: data,

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



  handleSelect = (event) => {
    event.preventDefault();
    let selected = +event.target.value;
    console.log(typeof selected);
    if (selected === 1) {
      let newHorns = data.filter(singleBeast =>  singleBeast.horns === 1)
      this.setState({
        sortedHorns: newHorns
      })
    }
     else if (selected === 2) {
      let newHorns = data.filter(singleBeast =>  singleBeast.horns === 2)
      this.setState({
        sortedHorns: newHorns
      })
    } else if (selected === 3) {
      let newHorns = data.filter(singleBeast =>  singleBeast.horns === 3)
      this.setState({
        sortedHorns: newHorns
      })
    } else if (selected === 100) {
      let newHorns = data.filter(singleBeast =>  singleBeast.horns === 100)
      this.setState({
        sortedHorns: newHorns
      })
    } else {
      this.setState({
        sortedHorns: data
      })
    }

  }
  // submitHandler = (event) =>{
  //    event.preventDefault();
  //    this.setState({
  //     username: event.target.username.value
  //    })
  //    console.log('line 6a',this.state);
  // }


  // handleInput =(event) =>{
  //   this.setState({
  //     username: event.target.value
  //   })

  // }

  render() {

    console.log(this.state);

    return (
      <>
        <Header />

        {/* <h1>Forms In React</h1>
        <Form onSubmit={this.submitHandler}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control onInput={this.handleInput} type="text" name="username"/>
        </Form.Group>
        <Button type='submit'>Submit</Button>
        </Form> */}

        {/* <ListGroup>
          {this.state.sortedHorns.map((num, idx) => {
            return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
          })}
        </ListGroup> */}

        <Form>
          <Form.Group>

            <Form.Select name="selected" onChange={this.handleSelect}>
              <option>Select Number Of Horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
              <option value="all">all</option>
            </Form.Select>

          </Form.Group>
        </Form>




        <Main data={this.state.sortedHorns} handleOpenModal={this.handleOpenModal} />

        <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} selectedBeastUrl={this.state.selectedBeastUrl} selectedBeastDescription={this.state.selectedBeastDescription} />

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