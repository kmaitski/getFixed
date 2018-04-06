import React, { Component } from 'react';
import Camera from 'react-camera';

export default class CamShot3 extends React.Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.state = { cameraView: true };
  }

  takePicture() {
    this.camera.capture()
      .then((blob) => {
        this.img.src = URL.createObjectURL(blob);
        this.img.onload = () => { URL.revokeObjectURL(this.src); };
        this.props.handlePhoto(this.img.src);
      })
      .then(this.setState({ cameraView: false }));
  }

  render() {
    const style = {
      preview: {
        position: 'center',
        height: '60%',
        width: '40%',
      },
      captureContainer: {
        top: '38%',
        paddingLeft: '40%',
      },
      captureImage: {
        position: 'center',
        height: '60%',
        width: '40%',
      },
    };
    const view = this.state.cameraView
      ? <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer}>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              onClick={this.takePicture}
            >
              <i className="material-icons">add</i>
            </button>
          </div>

        </Camera>
      : <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />

    return (
      <div>
        {view}
      </div>
    );
  }
}
