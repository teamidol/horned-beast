import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>The Horned Beast {this.props.title}</h2>
        <p>Skills: {this.props.description}</p>
        <img src={this.props.imgsrc} alt={this.props.description} title={this.props.title}></img>
      </article>
    )
  }
}

export default HornedBeast;