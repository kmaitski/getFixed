import React from 'react';
import Camera from 'react-camera';

export default class CamShot3 extends React.Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
      .then((blob) => {
        this.img.src = URL.createObjectURL(blob);
        this.img.onload = () => { URL.revokeObjectURL(this.src); };
        console.log(this.img);
      });
  }

  render() {
    const style = {
      preview: {
        position: 'center',
        margin: 'auto',
        height: '37%',
        width: '37%',
      },
      captureContainer: {
        position: 'absolute',
        justifyContent: 'center',
        margin: 'auto',
        zIndex: 1,
        bottom: 0,
        height: '37%',
        width: '37%',
      },
      captureButton: {
        position: 'absolute',
        top: '80px',
        margin: 'auto',
      },
      captureImage: {
        position: 'center',
        margin: 'auto',
        height: '37%',
        width: '37%',
      },
    };
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          onClick={this.takePicture} 
          style={style.captureButton}
        >
          <i className="material-icons">add</i>
        </button>
      </Camera>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
      </div>
    );
  }
}
