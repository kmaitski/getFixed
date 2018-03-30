import React from 'react';


var videoPlayer = document.querySelector('#player');
var videoElement = document.querySelector('#canvas');
var captureButton = document.querySelector('#capture-btn');
var imagePicker = document.querySelector('#image-picker');
var imagePickerArea = document.querySelector('#pick-mage');

//check to see if navigator media devices to capture picture is supported
function initializeMedia() {
  if (!('mediaDevices' in navigator)) {
    navigator.mediaDevices = {};
  }

// backup method for older phones to take a phone if above doesnt work
// for safari or mozilla
  if (!('getUserMedia' in navigator.mediaDevices)) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//homeboy has a old phone and is out of luck
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implmented!'));
      }
//if no error uses navigator for picture taking
      return new Promise(function(resolve, reject) {
        getuserMedia.call(navigator, constraints, resolve, reject);
      })
    }
  }

  navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    videoPlayer.srcObject = stream;
    videoPlayer.style.display = 'block';
  })
  .catch(function(err) {
    imagePickerArea.style.display = 'block';
  });
}




const CamShot = (props) => (
  <div>
    <video id="player" autoplay></video>
    <canvas id="canvas" width="320px" height="240px">
    </canvas>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="capture-btn">Capture
    </button>
    <div id="pick-image">
      <h6>Pick an Image instead</h6>
      <input type="file" accept="image/*" id="image-picker" />
    </div>
    <div class="input-section">
  <button class="mdl-button mdl-js-button mdl-button mdl-button--colored" type="button" id="location-btn">Get
    Location
  </button>
<div class="mdl-spinner mdl-js-spinner is-active" id="location-loader"></div>
</div>
  </div>
)

export default CamShot;