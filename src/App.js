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
    // let url = 'http://127.0.0.1:8000';
    let url = 'http://badass.ghdom.tk/registerScript.php';
    let bday = document.querySelector('#bday');
    this.setState({haveData: false})
    fetch(url, {
      method: "POST", 
      mode: "no-cors",
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*',
      },
      body: JSON.stringify({
        "image" : image,
        "bday" : bday.value
      })
  })
  // .then( res => res.json() )
  .then(response => {
    this.setState({haveData: response})
    console.log(response);
  })
  .catch( err => console.log(err))
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
