import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

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

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>Info: {this.props.description}</p>
        <img src={this.props.image_url}/>

        <h2>faves {this.state.faves}</h2>
        {/* <h4 onClick={this.handleFave}>Fave Me!!!</h4> */}
        <Button onClick={this.handleFave} variant="success">Fave!</Button>
        {/* <Button onClick={this.unfave} variant="danger">clear</Button> */}
        <div>{this.state.faved ? 'I got faved!' : ''}</div>
      </article>
    )
  }
}

export default HornedBeast;