import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>The Horned Beast Main</h2>

        <HornedBeast title = "flash-guitarist" descripton = "super fast" img_url="./flash.gif"/>
        <HornedBeast title = "bruce-lee" description = "meow" img_url="./bruce-lee.jpg"/>
      </>
    )
  }
}

export default Main;
