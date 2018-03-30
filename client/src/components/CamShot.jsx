import React from 'react';


var videoPlayer = document.querySelector('#player');
var videoElement = document.querySelector('#canvas');
var captureButton = document.querySelector('#capture-btn');
var imagePicker = document.querySelector('#image-picker');

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
    <div id="pick-image">
      <h6>Take a Photo</h6>
      <input type="file" accept="image/*" />
    </div>
    <div className="input-section">
</div>
  </div>
)

export default CamShot;