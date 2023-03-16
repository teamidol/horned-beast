import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      faves: 0,
      faved: false
    }
  }

  handleFave = () => {
    this.setState({
      faves: this.state.faves + 1
    })
  }

  fave = () => {
    this.setState({
      faved: true
    })
  }

  unfave = () => {
    this.setState({
      faved: false
    })
  }


  handleNameClick = () => {

    console.log('image clicked');

    this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
  }




  render() {
    return (
      <Card id="cardSection">


        <Card.Title  ><h5>{this.props.title}</h5></Card.Title>
        <Card.Body >
          <Card.Img onClick={this.handleNameClick} variant="top" src={this.props.image_url} alt={this.props.title} />
          <p>Info: {this.props.description}</p>
      

          <h2>faves {this.state.faves}</h2>
          {/* {console.log(this.props.title)} */}
          {/* <h4 onClick={this.handleFave}>Fave Me!!!</h4> */}
          <Button onClick={this.handleFave} variant="success">Fave!</Button>
          {/* <Button onClick={this.unfave} variant="danger">clear</Button> */}
          <div>{this.state.faved ? 'I got faved!' : ''}</div>
        </Card.Body>



      </Card>
    )
  }
}

export default HornedBeast;