import React, { Component } from 'react';
import './App.css';

import Camera from './Components/Camera/Camera.js';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      haveData: true
    };
  }

  sendVoteToServer = (image) => {
    let url = 'http://badass.ghdom.tk/registerScript.php';
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": '*',
      },
      body: {
        image: image
      }, // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const { haveData } = this.state;
    return (
      <div className="App">
      {
        haveData
          ? <Camera sendVoteToServer={this.sendVoteToServer}></Camera>
          : <img className="loading-logo" alt="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
      }       
      </div>
    );
  }
}

export default App;
