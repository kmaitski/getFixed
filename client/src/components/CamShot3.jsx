import React, { Component } from 'react';
import Camera from 'react-camera';

export default class CamShot3 extends React.Component {

 constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.state = {
      cameraView: true
    }
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
      this.props.handlePhoto(this.img.src);
    })
    .then(
      this.setState({cameraView: false})
    )
  }

  render() {
    let view = this.state.cameraView
      ? <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >

          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"onClick={this.takePicture} style={style.captureButton}>
            <i className="material-icons">add</i>
          </button>

        </Camera>
      : <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />

    return (
      <div style={style.container}>
        {view}
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'center',
    margin: 'auto',
    height: '70%',
    width: '50%'
  },
  captureContainer: {
    position: 'absolute',
    justifyContent: 'center',
    margin: 'auto',
    zIndex: 1,
    bottom: 0,
    height: '37%',
    width: '37%'
  },
  captureButton: {
    position: 'absolute',
    top: '80px',
    margin: 'auto'
  },
  captureImage: {
    position: 'center',
    margin: 'auto',
    height: '37%',
    width: '37%'

  }
};