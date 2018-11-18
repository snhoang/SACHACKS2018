import React, { Component } from 'react';
import './App.css';

import Camera from './Components/Camera/Camera.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Camera></Camera>
      </div>
    );
  }
}

export default App;
