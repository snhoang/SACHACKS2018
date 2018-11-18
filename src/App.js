import React, { Component } from 'react';
import './App.css';

import Camera from './Components/Camera/Camera.js';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      haveData: true,
      Registered: false,

    };
  }

  sendVoteToServer = (image) => {
    // let url = 'http://127.0.0.1:8000';
    let url = 'http://badass.ghdom.tk/searchVoterDB.php';
    // let bday = document.querySelector('#bday');
    this.setState({haveData: false})
    fetch(url, {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*',
      },
      // credentials: "include",
      // body: JSON.stringify({
      //   "image" : image,
      //   "bday" : bday.value
      // })
      body: JSON.stringify(image)
  })
  .then( res => res.json() )
  .then(response => {
    this.setState({haveData: response.status})
    console.log(this.state);
    if(response.status === "V") {
      window.location.href = "http://badass.ghdom.tk/vote.php?id="+response.id;
    } else {
      window.location.href = "http://badass.ghdom.tk/index.php?status=R&photo="+response.photo+"&id="+response.id;
    }
  })
  .catch( err => console.log(err))
}

  render() {
    const { haveData, attempt } = this.state;
    return (
      <div className="App">
        <img className="ourLogo" alt="logo" src="https://scontent.fmcc1-1.fna.fbcdn.net/v/t1.15752-9/46355562_2201807040057565_8309935061109571584_n.png?_nc_cat=103&_nc_ht=scontent.fmcc1-1.fna&oh=9459aa81b7c09a18dda612d38c0462b4&oe=5C82C491"></img>
      {
        attempt
          ? <h1>TRY AGAIN MY MAN !</h1>
          : null
      }
      {
        haveData
        ? <Camera className="shadow-2" sendVoteToServer={this.sendVoteToServer}></Camera>
        : <img className="loading-logo" alt="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
      }       
      
      </div>
    );
  }
}

export default App;
