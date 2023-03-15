import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
    <main>
      {data.map((hornedBeastObj, index) => {
        return <HornedBeast title={hornedBeastObj.title} image_url={hornedBeastObj.image_url} key={index} description={hornedBeastObj.description} id={hornedBeastObj._id} keyword={hornedBeastObj.keyword} horns={hornedBeastObj.horns}/>
      })}
    </main>
    )
  }
}

export default Main;
