

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}




