import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>The Horned Beast Main</h2>

        <HornedBeast title = {"flash-guitarist" } description ={ "guitar shredding"} imgsrc={"/flash.gif"}/>
        <HornedBeast title = {"bruce-lee"} description = {"meow"} imgsrc={"/bruce-lee.jpg"}  />
      </>
    )
  }
}

export default Main;
