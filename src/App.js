import React, { Component } from 'react';
import './App.css';

import Camera from './Components/Camera/Camera.js';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      haveData: true,
      TryAgain: false,
      logo: true,
    };
  }

  sendVoteToServer = (image, option) => {
    let url;
    // let url = 'http://127.0.0.1:8000';
    if (option === "register"){
      url = 'http://badass.ghdom.tk/registerScript.php';
    } else {
      url = 'http://badass.ghdom.tk/searchVoterDB.php';
    }
    // let bday = document.querySelector('#bday');
    this.setState({haveData: false, logo: false, TryAgain: false})
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
      this.setState({haveData: response.status, logo: true})
      console.log(response);
      if(response.status === "V") {
        window.location.href = "http://badass.ghdom.tk/vote.php?id="+response.id;
      } else if (response.status === "R"){
        // window.location.href = "https://snhoang.github.io/SACHACKS/";
      } else {
        // this.setState({TryAgain: true, logo:true})
      }
    })
    .catch( err => console.log(err))
  }


  render() {
    const { haveData, TryAgain, logo } = this.state;
    return (
      <div className="App"> 
        <div className="bg-black-70 mw7 center db shadow-5 h-50">
          {
            TryAgain
            ? ( <div id="tryagain">
                  <div className="flex items-center justify-center pa4 bg-lightest-blue navy">
                    <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
                      <title>info icon</title>
                      <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
                    </svg>
                    <span className="lh-title ml3">Some info that you want to call attention to.</span>
                  </div>
                </div>
              )
              : null
          }
          {
            logo
              ?<img className="ourLogo" alt="logo" src="https://scontent.fmcc1-1.fna.fbcdn.net/v/t1.15752-9/46355562_2201807040057565_8309935061109571584_n.png?_nc_cat=103&_nc_ht=scontent.fmcc1-1.fna&oh=9459aa81b7c09a18dda612d38c0462b4&oe=5C82C491"></img>
              : null
          }          
          {
            haveData
            ? <Camera className="shadow-2" sendVoteToServer={this.sendVoteToServer}></Camera>
            : <img className="loading-logo" alt="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
          }
        </div>             
      </div>
    );
  }
}

export default App;
