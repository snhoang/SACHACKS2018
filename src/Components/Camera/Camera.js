import React, {Component} from "react";
import Webcam from "react-webcam";

import './Camera.css'

class WebcamCapture extends Component {


    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc)

      this.props.sendVoteToServer(imageSrc.slice(23));
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 680,
        facingMode: "user"
      };
  
      return (
        <div className="webcam">
          <Webcam
            audio={true}
            height={600}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={800}
            videoConstraints={videoConstraints}

            className="camera"
          />
          <button className="btn waves-effect waves-light" onClick={this.capture}>Submit
            <i className="material-icons right"></i>
          </button>
        </div>
      );
    }
}

export default WebcamCapture;