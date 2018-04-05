import React from 'react';

const DistanceSlideBar = props => (
  <div>
    <input type="range" min="20" max="100" step="20" onChange={e => props.handleSlide(e.target.value) } />
    <br/>
    <span>
      <span style={{marginRight: '1%'}}>20</span>
      <span style={{marginRight: '1%'}}>40</span>
      <span style={{marginRight: '1%'}}>60</span>
      <span style={{marginRight: '1%'}}>80</span>
      <span style={{marginRight: '1%'}}>100 miles</span>
      {/* <span>miles</span> */}
    </span>
  </div>
);
export default DistanceSlideBar;