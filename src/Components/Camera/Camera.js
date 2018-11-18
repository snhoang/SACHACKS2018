import React, {Component} from "react";
import Webcam from "react-webcam";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './Camera.css';
import 'tachyons';



class WebcamCapture extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date()
      };
    }

    handleChange = (date) => {
      this.setState({
        startDate: date
      });
    }

    setRef = webcam => {
      this.webcam = webcam;
    };
    
    captureLogin = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc.slice(23))
      this.props.sendVoteToServer(imageSrc.slice(23), "login");
    };

    captureRegister = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc.slice(23))
      this.props.sendVoteToServer(imageSrc.slice(23), "register");
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 680,
        facingMode: "user"
      };
      return (
        <div>
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
          </div>
          <a className="center db mw4 tc f6 link dim ph3 pv2 mb2 white bg-dark-gray" href="#0" onClick={this.captureRegister}>Register</a>
          <div className="pa4-l">
            <form className="bg-dark-gray mw7 center pa4 br2-ns ba b--black-10 shadow-2">
              <fieldset className="cf bn ma0 pa0">
                <div className="cf flex justify-around">
                <label className="clip" htmlor="email-address">BirthDate</label>
                <DatePicker className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Birthday" value="" type="text" name="email-address" id="email-address" style={{width: "560px"}}
                selected={this.state.startDate}
                onChange={this.handleChange}
                />
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Submit" onClick={this.captureLogin}/>
                </div>
              </fieldset>
            </form>
          </div>

        </div>
      );
    }
}

export default WebcamCapture;