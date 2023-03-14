import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>The Horned Beast {this.props.title}</h2>
        <p>Skills: {this.props.description}</p>
        <p>photo {this.props.photo}</p>
      </article>
    )
  }
}

export default HornedBeast;