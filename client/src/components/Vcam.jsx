/*
import React from 'react';
import ReactWebCamCapture from 'react-webcam-capture';

class VCam extends React.Component {

  render() {
    return (
      <div>
        <h1>Video Recording Example</h1>
        <hr />

        <ReactWebCamCapture
          constraints={{ audio: true, video: true }}
          timeSlice={10}
          onGranted={this.handleGranted}
          onDenied={this.handleDenied}
          onStart={this.handleStart}
          onStop={this.handleStop}
          onPause={this.handlePause}
          onResume={this.handleResume}
          onError={this.handleError}
          render={({ start, stop, pause, resume }) =>
          <div>
            <p>Granted: {granted.toString()}</p>
            <p>Rejected Reason: {rejectedReason}</p>
            <p>Recording: {recording.toString()}</p>
            <p>Paused: {paused.toString()}</p>

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>

            <p>Streaming test</p>
            <video autoPlay></video>
          </div>
        } />
      </div>
    );
  }
}

export default VCam;
*/