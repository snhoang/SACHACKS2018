import React, {Component} from "react";
import Webcam from "react-webcam";

class WebcamCapture extends Component {
    setRef = webcam => {
      this.webcam = webcam;
    };

    sendVoteToServer = (image) => {
        fetch(link){
            
        }
    }
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc.slice(23))
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
}

export default WebcamCapture;