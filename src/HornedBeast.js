import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props){
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
  this.setState ({
    faved: true
  })
}

unfave = () =>{
  this.setState({
    faved:  false
  })
}


handleNameClick = () => {
  this.props.handleOpenModal(this.props.title)
}




  render() {
    return (
      <Card id="cardSection">

        
        <Card.Title onClick={this.handleNameClick}><h5>{this.props.title}</h5></Card.Title>


        <p>Info: {this.props.description}</p>
        <img alt="a horned beast" src={this.props.image_url}/>

        <h2>faves {this.state.faves}</h2>
        {console.log(this.props.title)}
        {/* <h4 onClick={this.handleFave}>Fave Me!!!</h4> */}
        <Button onClick={this.handleFave} variant="success">Fave!</Button>
        {/* <Button onClick={this.unfave} variant="danger">clear</Button> */}
        <div>{this.state.faved ? 'I got faved!' : ''}</div>
      </Card>
    )
  }
}

export default HornedBeast;