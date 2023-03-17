import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
    <main>
      {this.props.sortedHorns}
      {this.props.data.map((hornedBeastObj, index) => {
        return (
        <HornedBeast 
        title={hornedBeastObj.title} 
        image_url={hornedBeastObj.image_url} 
        key={index} 
        description={hornedBeastObj.description} 
        id={hornedBeastObj._id} 
        keyword={hornedBeastObj.keyword} 
        horns={hornedBeastObj.horns}
        handleOpenModal={this.props.handleOpenModal}
        />
        )
      })}
    </main>
    )
  }
}

export default Main;
